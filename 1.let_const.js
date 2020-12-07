//var et let

//la porté de var est la fonction
//la portée de let est le bloc

//const- la portée de const est,comme pour let,celle du bloc,je ne peux pas redefinir le contenu de const

const pi=3.14159;
//j'utilise Toujours const.Si j'ai absolument besoin de modifier la variable,alors seulement j'utilise let.
let a=()=> ({firstname: "John",
  lastname: "Doe"
})
console.log(a());