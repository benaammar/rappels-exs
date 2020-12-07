const character={
    id:0,
    firstname:"jon",
    lastname:"Snow",
    livres:{
        city:"winterfell"
    }
}
const character2={
    id:1,
    firstname:"jon",
    lastname:"Stark",
    livres:{
        city:"winterfell"
    },
    isAlive:false
}

//const a =character.firstname;
//const id =character.id;
//const a =character.lastname;
//on peut faire la mm chose en une seule ligne
const{id,firstname,lastname,livres:{city:ville}}=character
console.log(id,firstname,lastname,ville);
const{id:id2,firstname:firstname2,lastname:lastname2,livres:{city:city2},isAlive:isAlive2=true}=character2;
console.log(id2,firstname2,lastname2,city2,isAlive2);

//function default paramter
//Dynamic key -clé dynamique- pratique pour mettre un nom de clé de variable dans un objet
const dynamicKey="surname"
const tyrion={
    id:2,
    firstname:"Tyrion",
    lastname:"Lannister",
    [dynamicKey]:"himp",
    lives:{
        city:"king landing",
    },
    
}
const gender="male"
console.log(tyrion);
// Spread Operator-ou comment copier un objet rapidement
const tyrion2={
    ...tyrion,
    lives:{
        city:"Mederin"
    },
   // gender:gender
   gender,//version raccourci de gender:gender
}
console.log(tyrion2);

//function default paramater
const sayHello=(name)=>{
    //template literals-string interpolation
    console.log(`Hello ${name}` )
}

//reset operator
const add=(...params)=>{
    let total=0
    for(const n of params){
        total+=n

    }
console.log(total);}
add(1,2,2,4);
add(1,9,0,9,5);