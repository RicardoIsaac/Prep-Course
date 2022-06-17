// No cambies los nombres de las funciones.

const { clear } = require("@11ty/eleventy/src/TemplateCache");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

var eso=[];
eso=Object.entries(objeto);

return eso;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const A={};
  const sampleArray=string.split("");
  sampleArray.forEach(function(x){A[x]=(A[x]||0)+1;});
  return(A)

}
//var obj={}
//for(i=0;i<string.length;i++)
//{
//  if(obj.hasOwnProperty(string[i]))
//    {
//        obj[string[i]]=+1;
//    } 
 //   else{string[i]=1}
 // }
 // return obj



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
 var may="";
 var min="";
 for(var x=0;x<s.length;x++)
 {
  if(s[x]===s[x].toUpperCase()){may+=s[x]}
  else{min+=s[x]}
 }
 return may+min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
var a=str.split(" ").map(function(elemento){return elemento.split("").reverse().join("")})


return a.join(" ")
} 
function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var rev= numero.toString().split("").reverse("").join("");
  var num=numero.toString();
  if(rev===num){return "Es capicua"}
  {return "No es capicua"}
}
function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var x=cadena.replace(/a/g,"")
  var y=x.replace(/b/g,"")
  var z=y.replace(/c/g,"")
return z;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 var a=true;
 while(a){
  a=false;
  for(x=0;x<arr.length-1;x++)
  {
    if(arr[x].length>arr[x+1].length)
    {
      var b=arr[x];
      arr[x]=arr[x+1]
      arr[x+1]=b;
      a=true;
    }
  }
 }
return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var extra=[];
  for (var x = 0; x < arreglo1.length; x++) 
  {
     for(var y = 0; y < arreglo2.length; y++)
    {
      if (arreglo1 [x] === arreglo2[y]){extra.push(arreglo1[x])}
    }
  }
  return extra;
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

