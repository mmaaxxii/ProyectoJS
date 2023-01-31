console.log("Hola Mundo")

var numero  = 5;
console.log(numero)


var miVariable = 5;
console.log(miVariable)

var edad = 2 
console.log("Mi edad es " + edad)
/* Variables pueden ser de tipo texto numerico y booleano */ 

miVariable = 12 
console.log("Mi edad es " + miVariable)

// no se pueden modificar 
const miConstante = 3

var resultado = 2 + 2   
console.log(resultado)

let miVariable2 

var op1 = 2 
var op2 = 3
resultado = op1 + op2
console.log(resultado)

//CONDICIONALES 
let miNumero = 6 
let resultadoPregunta = miNumero == 6 


if (miNumero == 7 ) {
 console.log("Si. Mi numero vale 6")   
}else { 
    console.log("No. Mi numero no vale 6")
}

// operadores > < >= <=  == === != !==     (and - &&) (or - ||)    
if (miNumero === "6" ) {
    console.log("Si. Mi numero vale 6")   
   }else { 
       console.log("No. Mi numero no vale 6")
   }

let miNumero2 = 5
if (miNumero2 > 0) {
    console.log("Mi numero es positivo")
} else if (miNumero === 0){
    console.log("Mi numero es zero")
} else {
    console.log("Mi numero es negativo")
} 

//CICLOS

let contador  = 0

while(contador < 5) {
    console.log(contador)
    contador = contador +1 
}

for(let i = 0; i < 10 ; i++){
    console.log(i)
}


//FUNCIONES 

function saludar(nombre, edad){
    console.log("Hola "+nombre)
    console.log("Hola "+edad)
}

saludar("Laura", 25);



function multiplicar(num1, num2){
    let resultado = num1 * num2
    return resultado
}

let recibidor = multiplicar(2,5);
console.log(recibidor)

//arreglos o Arrays

let miArreglo = ["David", "Fernado", "Kevin", "Carla"]
console.log(miArreglo)

let mostrar = miArreglo[1]
console.log(mostrar)

for(let j = 0; j < 4; j++ ){
    mostrar = miArreglo[j]
    console.log(mostrar)
}

//Objetos
console.log("------------------------------------");
let persona1  = {
    nombre : "David",
    edad : 24,
    masculito : true 
}
console.log(persona1);
persona1.comidaFavorita = "Hamburguesa"
console.log(persona1);

console.log("------------------------------------");

let persona2  = {
    nombre : "Kevin",
    edad : 21,
    masculito : false 
}


console.log(persona1.nombre);
console.log(persona2);

let miArregloObjetos = [persona1, persona2]

persona1.nombre = "Juan"
console.log(persona1.nombre); 


