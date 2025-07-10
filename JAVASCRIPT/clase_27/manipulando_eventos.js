// Vamos a seleccionar todos los elementos de body y vamos a hacer que cambie el backgraound del elemento que tenga el mouse encima

let elementos = document.body.getElementsByTagName('*')

//Funcion que crea un rgb aleatorio
let colorAleatorio = () => {
    let amarillo = Math.floor(Math.random()*256);
    let azul = Math.floor(Math.random()*256);
    let rojo = Math.floor(Math.random()*256);
    return `rgb(${amarillo}, ${azul}, ${rojo})`
}



for (let e of elementos) {
    e.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = colorAleatorio();
    })

    e.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'white';
    })

    e.addEventListener('contextmenu', (event) => {
        event.defaultPrevented();
    })
}