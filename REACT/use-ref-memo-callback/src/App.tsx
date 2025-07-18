import "./App.css";
import FocusInput from "./Components/FocusInput";
import Timer from "./Components/Timer";
import UserFilter from "./Components/UserFilter";
import TodoList from "./Components/TodoList/TodoList.App";

function App() {
  return (
    <>
      <FocusInput></FocusInput>
      <Timer></Timer>
      <UserFilter></UserFilter>
      <TodoList></TodoList>
    </>
  );
}

export default App;
