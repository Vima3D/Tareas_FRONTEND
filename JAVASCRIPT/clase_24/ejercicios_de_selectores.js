
// // 1. Selecciona el primer p de la página y modificarlo para que cambie el texto que lleva dentro y que ponga "hola que tal"
// let primerP = document.getElementsByTagName('p')[0];
// primerP.textContent = 'hola que tal';

// // 2. Selecciona el 2º enlace del primer p de la página y cambia su href por https://www.google.com
// let primerP = document.getElementsByTagName('p')[0];
// let segundoEnlace = primerP.getElementsByTagName('a')[1];
// segundoEnlace.setAttribute('href','https://www.google.com');

// // 3. Selecciona el penúltimo hijo de una etiqueta con el id "milista"
// let miLista = document.getElementById('milista');
// let hijosMiLista = miLista.children;
// let penultimoMiLista = hijosMiLista[hijosMiLista.length-2];
// console.log(penultimoMiLista.textContent)

// // 4. Desactiva el atributo class del último p de la página
// let parrafos = document.getElementsByTagName('p')
// let ultimoParrafo = parrafos[parrafos.length-1]
// ultimoParrafo.removeAttribute('class')

// // 5. Crea un elemento h3 e insertalo al final del body
// let miH3 = document.createElement('h3')
// miH3.textContent = 'Elemento H3 creado con Javascript'
// document.body.appendChild(miH3)

// // 6. Selecciona el elemento h3 que acabas de crear y añádele un span con el texto "Soy nuevo"
// let miSpan = document.createElement('span')
// miSpan.textContent = ' Soy nuevo'
// miH3.appendChild(miSpan)

// // 7. Modifica el contenido de la segunda etiqueta p, añadiéndole una etiqueta a con el contenido "aquí" y que apunte a https://google.com
// let segundoParrafo = document.getElementsByTagName('p')[1];
// let vinculoAqui = document.createElement('a');
// vinculoAqui.textContent = 'aquí';
// vinculoAqui.setAttribute('href', 'https://google.com');
// segundoParrafo.appendChild(vinculoAqui);

// // 8. Comprueba que todos los p que estén dentro de un div con clase "hero" tienen clase, en caso de ser verdadero, elimínalo
// let pHero = document.querySelectorAll('div.hero p')
// console.log(pHero)
// for (let p of pHero) {
//     if (p.hasAttribute('class')) {
//         p.remove()
//     }
// }

// // 9. Selecciona el último nodo hijo de body
// let ultimoNodo = document.body.lastChild;
// console.log(ultimoNodo)

// // 10. Selecciona el siguiente elemento hermano del primer p
// let primerP = document.getElementsByTagName('p')[0];
// let hermanoP = primerP.nextElementSibling;
// console.log(primerP)
// console.log(hermanoP)

// // 11. Borra el último elemento de body
// let ultimoNodo = document.body.lastChild;
// console.log(ultimoNodo)
// ultimoNodo.remove();

// // 12. Modifica el valor del atributo de todas las imágenes cuyo src sea cambiame a "cambiado"
// let imagenes = document.getElementsByTagName('img')
// for (let img of imagenes) {
//     console.log(img.src)
// }
// console.log(`---Ahora modificamos el SRC 'cambiame' de las imagenes---`)
// for (let img of imagenes) {
//     if (img.src.includes('cambiame')) {
//         img.src = 'cambiado'
//     }
// }
// for (let img of imagenes) {
//     console.log(img.src)
// }

// // 13. Dale la clase "claseejemplo" al primer p
// let primerP = document.getElementsByTagName('p')[0]
// primerP.className = 'claseejemplo'

// 14. Para cada ul que tenga únicamente 2 li, añade un tercer li con contenido "tercer elemento"
// let uls = document.getElementsByTagName('ul')
// let nuevoLi = document.createElement('li')
// nuevoLi.textContent = 'tercer elemento'
// for (let ul of uls) {
//     if (ul.children.length == 2) {
//         ul.appendChild(nuevoLi)
//     }
// }

// // 15. Selecciona el padre del primer p
// let primerP = document.getElementsByTagName('p')[0];
// let padre = primerP.parentElement;
// console.log(padre)

// // 16. Selecciona el hermano anterior del primer p
// let primerP = document.getElementsByTagName('p')[0];
// let hermanoAnterior = primerP.previousSibling;
// console.log(hermanoAnterior)

// // 17. Selecciona el primer div con clase "container" y modifica su background-color a red
// let divContainer = document.querySelector('div.container');
// console.log(divContainer)
// divContainer.style.backgroundColor = 'red';

// // 18. Selecciona el p con id "text" y cambia su contenido poniendole un enlace que apunte a Google
// let pText = document.getElementById('text');
// let enlace = document.createElement('a');
// enlace.href = 'https://www.google.com'
// enlace.textContent = 'Enlace a Google'
// pText.textContent = ''
// pText.appendChild(enlace)

// // 19. Selecciona los div con clase "eustakio"
// let divEustakio = document.querySelectorAll('div.eustakio')
// console.log(divEustakio)

// // 20. Selecciona el párrafo de ID con valor "paisa"
// let parrafoPaisa = document.querySelector('p#paisa');
// console.log(parrafoPaisa)

// // 21. Selecciona el primer párrafo hijo de un div
// let parrofoEspecial = document.querySelector('div p')
// console.log(parrofoEspecial)

// // 22. Selecciona el penúltimo enlace de la página.
// let enlaces = document.getElementsByTagName('a')
// let penultimoEnlace = enlaces[enlaces.length - 2]
// console.log(penultimoEnlace)

// // 23. Selecciona el antepenúltimo párrafo de los div y añádele la clase "portatil" si no la tiene, y en caso de tenerla, que la elimine.
// let parrafosDiv = document.querySelectorAll('div p');
// let antepenultimoP = parrafosDiv[parrafosDiv.length - 3];
// if (antepenultimoP.classList.contains('portatil')) {
//     antepenultimoP.classList.remove('portatil')
// }else {
//     antepenultimoP.classList.add('portatil')
// }
// console.log(antepenultimoP.className)

// // 24. Selecciona el padre del primer li de la página
// let primerLi = document.querySelector('li');
// let padreLi = primerLi.parentElement;
// console.log(padreLi)

// // 25. Para todas las listas ordenadas que tengan únicamente dos elementos, insertar otro elemento entre los dos elementos
// let ols = document.getElementsByTagName('ol')
// for (let ol of ols) {
//     if (ol.children.length == 2) {
//         nuevoLi = document.createElement('li')
//         nuevoLi.textContent = 'Nuevo li'
//         ol.insertBefore(nuevoLi, ol.children[1])
//     }
// }

// // 26. Añade el atributo class con valor azul al último elemento p
// let parrafos = document.getElementsByTagName('p');
// let ultimoP = parrafos[parrafos.length - 1];
// ultimoP.setAttribute('class', 'azul')
// console.log(ultimoP.className)

// // 27. Comprueba los elementos div que tengan el atributo class, si lo tiene se debe añadir el valor container, y si no lo tiene no se hace nada.
// let divs = document.getElementsByTagName('div');
// for (let div of divs) {
//     if (div.hasAttribute('class')) {
//         div.className = 'container'
//     }
// }
// for (let div of divs) {
//     console.log(div.className)
// }


// // 28. Obtén el valor del atributo alt de la última imagen
// let img = document.getElementsByTagName('img')
// let ultimoImg = img[img.length-1]
// let srcUltimoImg = ultimoImg.getAttribute('src')
// console.log(srcUltimoImg)

// // 29. Suponiendo que tenemos Hola. Obtén los valores de los atributos y los imprimes por pantalla uno por uno.
// let divHola = document.getElementById('divhola');
// let atributosHola = divHola.attributes;
// for (let attr of atributosHola) {
//     console.log(`${attr.name}: ${attr.value}`)
// }

// // 30. Si tenemos lo siguiente, modifica el estilo para que el font-size sea de 40px, el color sea naranja y el texto se alinee a la derecha.
// h1{
//     font-size: 20px;
//     color: red;
//     text-align: center;
//     }
// let h1 = document.getElementsByTagName('h1')[0]
// h1.style.fontSize = '40px';
// h1.style.color = 'orange';
// h1.style.textAlign = 'right';


// // 31. Suponiendo que tenemos el siguiente código. Añade debajo un tercer p que diga "soy el tres";
// {/* <div id="parrafos">
// <p>hola soy el uno</p>
// <p>hola soy el dos</p>
// </div> */}
// let parrafos = document.getElementById('parrafos')
// let nuevoP = document.createElement('p')
// nuevoP.textContent = 'soy el tres'
// parrafos.appendChild(nuevoP)

// // 32. Haz lo mismo que el anterior pero en lugar de insertarlo debajo, insertalo en medio, el p tendrá el texto "hola yo soy el uno y medio".
// let parrafos = document.getElementById('parrafos')
// let nuevoP = document.createElement('p')
// nuevoP.textContent = 'hola yo soy el uno y medio'
// parrafos.insertBefore(nuevoP,parrafos.children[1])

// // 33. Añade un nuevo elemento a una lista de modo que ocupe la primera posición.
// let lista = document.querySelector('ul')
// let nuevoLi = document.createElement('li')
// nuevoLi.textContent = 'Soy el nuevo Li'
// lista.insertBefore(nuevoLi, lista.children[0])

// // 34. Obtén el primer elemento de entre todos los que tengan la clase 'class' y bórralo.
// let elementosConClaseClass = document.getElementsByClassName('class')
// elementosConClaseClass[0].remove();

// // 35. Convierte el primer elemento de una lista en un enlace.
// let lista = document.querySelector('ul');
// let nuevoEnlace = document.createElement('a');
// nuevoEnlace.textContent = lista.children[0].textContent;
// nuevoEnlace.href = '#'
// lista.children[0].textContent = ''
// lista.children[0].appendChild(nuevoEnlace);

// // 36. Borra el atributo title de todas las imágenes con la clase 'img'.
// let imagenImg = document.getElementsByClassName('img');
// for (let img of imagenImg) {
//     if (img.classList.contains('img')) {
//         img.removeAttribute('title');
//     }
// }

// for (let img of imagenImg) {
//     console.log(img)
// }

// // 37. Añade un punto final al texto contenido por las etiquetas p.
// let parrafos = document.querySelectorAll('p');
// for (let p of parrafos) {
//     p.textContent += '.'
// }

// // 38. De un conjunto de etiquetas article hijos de un section con la clase 'products', selecciona aquellos que tengan la clase 'oferta' y establece el valor de su atributo data-iva a cero
// let articlesOferta = document.getElementsByClassName('section.products article.oferta');
// for (let article of articlesOferta) {
//     article.setAttribute('data-iva', '0')
// }

// for (let article of articlesOferta) {
//     atributos = article.attributes;
//     for (let attr of atributos) {
//         console.log(`${attr.name}: ${attr.value}`)
//     }
// }

// // 39. Añade el texto "Modificado" al tercer li de todos los ul
// let tercerLis = document.querySelectorAll('li:nth-of-type(3)')
// for (let li of tercerLis) {
//     li.textContent += ' Modificado'
// }

// // 40. Incluye la clase porelasterisco en todos los p que tengan la clase preparado
// let pPreparados = document.querySelectorAll('p.preparado')
// for (let p of pPreparados) {
//     p.classList.add('porelasterisco')
// }

// for (let p of pPreparados) {
//     let atributos = p.attributes;
//     for (let attr of atributos) {
//         console.log(`${attr.name}: ${attr.value}`)
//     }
// }

// // 41. Inserta un div con la clase pepaino y cuyo border sea rojo, con dos etiquetas hijas p, en las que el primer párrafo sea la clase del div y el segundo párrafo sea el color del border.
// let miDiv = document.createElement('div')
// miDiv.setAttribute('class', 'pepaino')
// miDiv.style.border = '1px solid red'

// let primerP = document.createElement('p')
// primerP.textContent = miDiv.className
// let segundoP = document.createElement('p')
// segundoP.textContent = miDiv.style.border

// miDiv.appendChild(primerP)
// miDiv.appendChild(segundoP)

// let body = document.querySelector('body')
// body.insertBefore(miDiv, body.lastChild)

// // 42. De las listas no ordenadas, selecciona el primer y último hijo "li" y sus hermanos anteriores o posteriores y cambiales el color a rojo
// let primerosLi = document.querySelectorAll('ul li:first-of-type')
// let ultimosLi = document.querySelectorAll('ul li:last-of-type')
// for (let li of primerosLi) {
//     li.style.color = 'red'
// }
// for (let li of ultimosLi) {
//     li.style.color = 'red'
// }

// let listas = document.querySelectorAll('ul')
// for (let lista of listas) {
//     lista.previousElementSibling.style.color = 'red'
//     lista.nextElementSibling.style.color = 'red'
// }

// // 43. Seleccionar los span que sean hijos de un "p" cuyo padre del elemento "p" sea un div con la clase "padre"y cambia los estilos del div poniendo un color de fondo azul
// let spanEspecial = document.querySelectorAll('div.padre>p>span')
// for (let span of spanEspecial) {
//     span.parentElement.parentElement.style.color = 'blue'
// }
