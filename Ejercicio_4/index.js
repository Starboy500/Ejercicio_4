
//Ejerccio 4 , cadenas de texto 

//Una cadena de texto con tu Nombre
let nombre = "Israel";

//Otra cadena de texto con tu Apellido
let apellido = "Bahena";

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = (`${nombre} ${apellido}`);
console.log(estudiante);


//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante
console.log(estudianteMayus.toUpperCase()); 


//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante
console.log(estudianteMinus.toLowerCase()); 


//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let noLetras = estudiante;
console.log(noLetras.length);


//Una variable que contenga la primera letra del Nombre
let primerLnombre = nombre[0];
console.log(primerLnombre);



//Otra variable que contenga la última letra del Apellido

let ultimaLapellido = apellido[5]
console.log(ultimaLapellido);


//Una cadena de texto que elimine los espacios de la variable "estudiante"

console.log(estudiante.trim().length);


//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let incluido = estudiante;
console.log(estudiante.includes(nombre));

