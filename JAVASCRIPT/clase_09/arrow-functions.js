// Función 1
sumar = (a,b) => a + b;
console.log(sumar(5,4))

// Función 2
cuadrado = (numero) => numero*numero;
console.log(cuadrado(8))

// Función 3
obtenerUsuario = (id) => ({id: id, nombre: 'Usuario' + id});
console.log(obtenerUsuario(10976))

// Función 4
procesarLista = () => {
    let resultado = [];
    for (let i = 0; i < lista.length; i++) {
    resultado.push(lista[i] * 2);
    }
    return resultado;
};
const lista = [2,4,6,8,10];
console.log(procesarLista(lista))

// Función 5
(() => console.log("Ejecutando una IIFE"))();

// Función 6
const objeto = {
    id: 10,
    obtenerId: () => this.id,
};

// Función 7
const temporizador = {
    mensaje: "Listo!",
    iniciar: () => {
        setTimeout(() => console.log(this.mensaje), 1000);
    }
};



