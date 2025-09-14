import os
import streamlit as st
import pandas as pd
import copy
import plotly.express as px

# Ruta al archivo CSV
BASE_DIR = os.path.dirname(__file__)
data_titanic = os.path.join(BASE_DIR, "train.csv")

def clean_data(df):
    
    sobrevivio = {1:'Yes', 0:'No'}
    clase = {1:'1st', 2:'2nd', 3:'3rd'}
    embarque = {'C': 'Cherbourg', 'Q': 'Queenstown', 'S':'Southampton'}

    df.replace({'Survived': sobrevivio}, inplace = True)
    df.replace({'Pclass': clase}, inplace = True)
    df.replace({'Embarked': embarque}, inplace = True)
    
    df.dropna(subset = ['Fare'], inplace = True)
    df.dropna(subset = ['Age'], inplace = True)
    df.dropna(subset = ['Embarked'], inplace = True)

    df['count'] = 1
    
    return df

@st.cache_data    
def get_data(data):
    df = pd.read_csv(data)
    df = clean_data(df)
    return df

@st.cache_data
def get_values(col):
    return sorted(st.session_state['df'][col].unique())

def update_df():
    st.session_state['df_fil'] = st.session_state['df'][
        (st.session_state['df']['Survived'].isin(st.session_state['Survived_fil'])) &
        (st.session_state['df']['Pclass'].isin(st.session_state['Pclass_fil'])) &
        (st.session_state['df']['Sex'].isin(st.session_state['Sex_fil'])) &
        (st.session_state['df']['Embarked'].isin(st.session_state['Embarked_fil'])) &
        (st.session_state['df']['Age'] >= st.session_state['Age_fil'][0]) &
        (st.session_state['df']['Age'] <= st.session_state['Age_fil'][1]) &
        (st.session_state['df']['SibSp'] >= st.session_state['SibSp_fil'][0]) &
        (st.session_state['df']['SibSp'] <= st.session_state['SibSp_fil'][1]) &
        (st.session_state['df']['Parch'] >= st.session_state['Parch_fil'][0]) &
        (st.session_state['df']['Parch'] <= st.session_state['Parch_fil'][1]) &
        (st.session_state['df']['Fare'] >= st.session_state['Fare_fil'][0]) &
        (st.session_state['df']['Fare'] <= st.session_state['Fare_fil'][1])
    ]
    
def generate_plot(var_1, var_2, var_3, color_var, num_var, plot_type):
    
    if plot_type == 'Bar':
        fig = px.bar(
            st.session_state['df_fil'],
            x = var_1,
            y = var_2,
            color = color_var,
        )
    elif plot_type == 'Pie':
        fig = px.pie(
            st.session_state['df_fil'],
            values = num_var,
            names = var_1,
        )    
    elif plot_type == 'Scatter':
        fig = px.scatter(
            st.session_state['df_fil'],
            x = var_1,
            y = var_2,
            size = num_var,
            color = color_var,
        )
    elif plot_type == 'Heatmap':
        fig = px.density_heatmap(
            st.session_state['df_fil'],
            x = var_1,
            y = var_2,
            z = num_var,
            text_auto = True,
        )
    elif plot_type == 'Treemap':
        fig = px.treemap(
            st.session_state['df_fil'],
            path = [var_1, var_2, var_3],
            values = num_var,
            color = color_var,
        )        
    return fig

st.set_page_config(
    page_title = 'Titanic',
    page_icon = '🚢​',
    layout='wide',
    initial_sidebar_state='expanded'
)

if 'df' not in st.session_state:
    st.session_state['df'] = pd.DataFrame()
    
if 'df_fil' not in st.session_state:
    st.session_state['df_fil'] = pd.DataFrame()

st.header('Titanic passenger data')

st.session_state['df'] = get_data(data_titanic)


def page_1():
    st.subheader('🚢 Data description')
    st.markdown(
        open('./titanic_table_description.html').read(),
        unsafe_allow_html=True,
    )
    with st.expander('Dataframe'):
        st.write(st.session_state['df'])

    with st.expander('Describe'):
        st.write(st.session_state['df'])


def page_2():
    if st.session_state['df_fil'].empty:
        st.session_state['df_fil'] = copy.copy(st.session_state['df'])
    
    st.subheader('📈 Data analytics')
    
    col_plot_1, col_plot_2 = st.columns([5,1])
    
    with col_plot_1:
        fig_plot = st.empty()
        
    with col_plot_2:
        plot_type = st.selectbox(
            'Type of plot',
            options=['Bar', 'Pie', 'Scatter', 'Heatmap', 'Treemap']
        )
        
        var_1 = st.selectbox('1st variable',
                            options = st.session_state['df_fil'].columns)
        
        num_var = st.selectbox('Numeric variable',
                            options = ['count', 'Fare', 'Age', 'SibSp', 'Parch'])
        
        color_var = st.selectbox('Color variable',
                            options = st.session_state['df_fil'].columns)
        
        var_2 = st.selectbox('2nd variable',
                            options = st.session_state['df_fil'].columns)
        
        var_3 = st.selectbox('3rd variable',
                            options = st.session_state['df_fil'].columns)
    
    with st.expander('Filters'):
        with st.form(key='filter_form'):
            col_fil_1, col_fil_2 = st.columns([1,1])
            
            with col_fil_1:
                surv_values = get_values('Survived')
                pclass_values = get_values('Pclass')
                sex_values = get_values('Sex')
                embarked_values = get_values('Embarked')
                
                st.multiselect('Survived', options=surv_values, default=surv_values, key='Survived_fil')
                st.multiselect('Passenger Class', options=pclass_values, default=pclass_values, key='Pclass_fil')
                st.multiselect('Gender', options=sex_values, default=sex_values, key='Sex_fil')
                st.multiselect('Embarked', options=embarked_values, default=embarked_values, key='Embarked_fil')
            
            with col_fil_2:
                age_values = get_values('Age')
                st.slider('Age',
                        min_value = min(age_values),
                        max_value = max(age_values),
                        value = [min(age_values), max(age_values)],
                        key = 'Age_fil')

                sibsp_values = get_values('SibSp')
                st.slider('SibSp',
                        min_value = min(sibsp_values),
                        max_value = max(sibsp_values),
                        value = [min(sibsp_values), max(sibsp_values)],
                        key = 'SibSp_fil')

                parch_values = get_values('Parch')
                st.slider('Parch',
                        min_value = min(parch_values),
                        max_value = max(parch_values),
                        value = [min(parch_values), max(parch_values)],
                        key = 'Parch_fil')
                
                fare_values = get_values('Fare')
                st.slider('Fare',
                        min_value = min(fare_values),
                        max_value = max(fare_values),
                        value = [min(fare_values), max(fare_values)],
                        key = 'Fare_fil')
                
                submit = st.form_submit_button('Update')

        if submit:
            update_df()
            
        fig = generate_plot(var_1, var_2, var_3, color_var, num_var, plot_type)
        fig_plot.write(fig)



pg = st.navigation(
    {
        'D&A': [
            st.Page(page_1, title='Data description', icon='🚢'),
            st.Page(page_2, title='Data Analytics', icon='📈'),
        ],
    }
)

pg.run()


