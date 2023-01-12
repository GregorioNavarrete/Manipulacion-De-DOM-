// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});
//-----------------------

h1.innerHTML = 'Patito <br> Feo';  // trans forma a codigo html 
h1.innerText = 'Patito <br> Feo';   //solo lo lee 



 console.log(h1.getAttribute('class'));   // con .getAttribute('class') lee, la clase de la etiqueta h1
h1.setAttribute('class', 'rojo');        // con .setAttribute('class', 'rojo') una forma para modificar los atributos del HTMl en la WEB


// con .classList es la mejor forma de manipular clases ediferentes formas 
h1.classList.add('rojo');  //a la clse de h1 , se le agrega otra clase mas q es rojo 
h1.classList.remove('verde');// a la clase h1 , le quito si tien la clase verde 


h1.classList.toggle('verde');       //depende si ya tiene o no , la misma clase, se quitara o se colocara una clase 
h1.classList.contains('verde');     //un condicional q nos dice si h1 tiene esa clase 

// podemos modificar el valor por deecto en los inputs 
input.value = "456"





const img = document.createElement('img'); // creamos la variable "img"

// le damos atributos a la "variable img ""
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');

//Es para ver si se colocaron los atributos que tien la "img"
console.log(img); 

//inserto la var "Img" dentro del contenedor "pid" , y los usuarios lo podran ver 
pid.appendChild(img);

// es uan forma de borra todo lo q hay dentro del ""pid"""
pid.innerHTML = "";

