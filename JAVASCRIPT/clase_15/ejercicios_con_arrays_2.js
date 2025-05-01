/* Ejercicio 1
Crea un nuevo array donde cada elemento del array original se duplique*/
let miArray = [2,4,6,3,4,12]
let miArrayDobles = miArray.map(i => i*2)
console.log(miArrayDobles)

/* Ejercicio 2
Calcula la suma de todos los elementos en el array creado en el ejercicio 1 e imprímelo.*/
let sumaArray = miArrayDobles.reduce((acc, i) => acc += i,0)
console.log(sumaArray)

/* Ejercicio 3
Crea un nuevo array que contenga solo los números pares del array original.*/
miArray_2 = [2,3,6,1,3,23,20]
let paresMiArray_2 = miArray_2.filter(i => i%2 == 0)
console.log(paresMiArray_2)

/* Ejercicio 4
Pide al usuario que ingrese un número y verifica si está presente en el array.*/
let numUsuario = 0
//numUsuario = Number(prompt('Introduce un número'))
if (numUsuario in miArray){
    console.log('Tu número esta en miArray')
}else{
    console.log('Tu número NO esta en miArray')
}

//6-Ordena el array de números en orden descendente y imprímelo.
let arrayOrdenado = miArrayDobles.sort((a,b)=>a-b)
console.log(arrayOrdenado)
let arrayDescendente = arrayOrdenado.reverse()
console.log(arrayDescendente)

//7- Dado dos arrays de números, array1 y array2, crea una función que devuelva un nuevo array que
//contenga los elementos que son múltiplos de 3 y no sean múltiplos de 5. Además, asegúrate de que el nuevo array no contenga duplicados.
const array1 = [2, 3, 5, 9, 12, 15];
const array2 = [4, 6, 9, 12, 18, 20];

let nuevoArray = array1.concat(array2);
console.log(nuevoArray)

nuevoArray = nuevoArray.reduce((accu,n)=>{
    if(!accu.includes(n)){
        accu.push(n)
    }
    return accu
},[])
console.log(nuevoArray)

nuevoArray = nuevoArray.filter(i => i%3 == 0 && i%5 != 0)
console.log(nuevoArray)

// Ejercicio 8: Filtrar y transformar datos en un array
// Dado un array de objetos que representan libros,
// cada objeto tiene propiedades como título, autor y año de publicación.
// Filtra los libros que fueron publicados después de 2000
// y crea un nuevo array con los títulos de esos libros en mayúsculas.
const libros = [
    { titulo: 'El señor de los anillos', nombre: 'J.R.R. Tolkien', year: 1954},
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', year: 1997 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', year: 1967 },
    { titulo: 'El código Da Vinci', autor: 'Dan Brown', year: 2003 },
    { titulo: '1984', autor: 'George Orwell', year: 1949 },
    { titulo: 'El hobbit', autor: 'J.R.R. Tolkien', year: 1937 },
    { titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', year: 2008 },
];

let libros2000 = libros.filter(libro => libro.year >= 2000)
console.log(libros2000)

libros2000 = libros2000.map(libro => libro.titulo.toUpperCase())
console.log(libros2000)

// Ejercicio 9
//Filtra los estudiantes que tienen una edad mayor o igual a 18 años y guárdalos en un nuevo array llamado estudiantesMayoresDeEdad.
const estudiantes = [
    { nombre: 'Ana', edad: 20, calificaciones: [10, 90, 87] },
    { nombre: 'Carlos', edad: 22, calificaciones: [78, 92, 87] },
    { nombre: 'Elena', edad: 19, calificaciones: [75, 88, 91] },
    { nombre: 'Daniel', edad: 18, calificaciones: [82, 79, 90] },
    { nombre: 'Luisa', edad: 21, calificaciones: [88, 85, 89] },
    { nombre: 'Miguel', edad: 17, calificaciones: [76, 84, 80] },
    { nombre: 'Sara', edad: 23, calificaciones: [91, 9, 94] },
];
let estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad >= 18)
console.log(estudiantesMayores)

// Calcula el promedio de calificaciones para cada estudiante en el array estudiantesMayoresDeEdad y almacena los resultados en un nuevo array llamado promediosCalificaciones.
let promediosCalificaciones = estudiantesMayores.map(estudiante => {
    let suma = estudiante.calificaciones.reduce((accu,nota) => {
        accu += nota;
        return accu
    }, 0);
    return suma/estudiante.calificaciones.length;
    }
)
console.log(promediosCalificaciones)

// Encuentra al estudiante con la calificación más alta en el array promediosCalificaciones y muestra su nombre y calificación máxima en la consola.
let mayorPromedio = promediosCalificaciones.reduce((accu, promedio) => {
    if (promedio > accu){
        accu = promedio
    }
    return accu
})
console.log(mayorPromedio)

let indexMayorPromedio = promediosCalificaciones.indexOf(mayorPromedio)
let estudianteDestacado = estudiantes[indexMayorPromedio]
console.log(estudianteDestacado)

estudianteDestacado = {
    nombre: estudianteDestacado.nombre,
    maxima_calificacion: estudianteDestacado.calificaciones.reduce((accu,nota)=>{
        if (nota > accu){
            accu = nota
        }
        return accu
    },0)
}
console.log(estudianteDestacado)

// Ejercicio 10
// Filtra las ventas que tienen una cantidad mayor a 8 unidades y guárdalas en un nuevo array llamado ventasElevadas.
const ventas = [
    { producto: 'Camiseta', cantidad: 10, precioUnitario: 15 },
    { producto: 'Zapatos', cantidad: 5, precioUnitario: 50 },
    { producto: 'Sombrero', cantidad: 8, precioUnitario: 20 },
    { producto: 'Pantalones', cantidad: 12, precioUnitario: 30 },
    { producto: 'Bufanda', cantidad: 15, precioUnitario: 10 },
];
let ventasElevadas = ventas.filter(venta => venta.cantidad > 8)
console.log(ventasElevadas)

// Calcula el total de ingresos para cada venta multiplicando la cantidad por el precio unitario y almacena los resultados en un nuevo array llamado ingresosTotales.
ingresosTotales = ventas.map(venta =>{
    return {producto: venta.producto, ingreso: venta.cantidad*venta.precioUnitario}
})
console.log(ingresosTotales)

// Encuentra la venta con el ingreso total más alto en el array ingresosTotales y muestra el producto y el ingreso total en la consola.
let ingresos = ingresosTotales.map(producto => producto.ingreso)
console.log(ingresos)

ingresoMayor = ingresos.reduce((accu,ingreso)=>{
    if (ingreso > accu){
        accu = ingreso
    }
    return accu
},0)
console.log(ingresoMayor)
let ventaIngresoMayor = ingresosTotales.filter(producto => producto.ingreso == ingresoMayor)
console.log(ventaIngresoMayor)

// Ordena el array original ventas de manera ascendente según la cantidad de productos vendidos.
let ventasOrdenadas = ventas.sort((a,b)=> a.cantidad - b.cantidad)
console.log(ventasOrdenadas)