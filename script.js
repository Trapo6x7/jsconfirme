let iterations;
let resultat = "";

while (Number.isInteger(iterations) === false) {
  iterations = Number(prompt("Veuillez saisir un nombre : "));
}

for (let i = 1; i <= iterations; i++) {
  let star = "";

  for (let x = 0; x < i; x++) {
    star += "*";
  }
  resultat += star + "\n";
}

console.log(resultat);

let height;
let resultatSapin = "";

while (Number.isInteger(height) === false) {
  height = Number(prompt("Veuillez saisir un nombre : "));
}

for (let i = 0; i < height; i++) {
  let line = "";
  for (let j = 0; j < height - i - 1 / 2; j++) {
    line += " ";
  }
  for (let j = 0; j < i + 1; j++) {
    line += "*";
  }
  for (let j = 0; j < i - 1 / 2; j++) {
    line += "*";
  }

  resultatSapin += line + "\n";
}

console.log(resultatSapin);

const superHeros = [
  "Spider-Man",
  "Wonder Woman",
  "Iron Man",
  "Batman",
  "Superman",
  "Black Panther",
  "Captain Marvel",
  "Flash",
  "Hulk",
  "Thor",
  "Green Lantern",
  "Aquaman",
  "Doctor Strange",
  "Scarlet Witch",
  "Black Widow",
];

superHeros.forEach((heros) => {
  console.log("Je suis fan de " + heros);
});

let count = 10;

do {
  window.alert(count);
  count -= 1;
} while (count >= 0);

if (count < 0) {
  window.alert("Décolage!");
}

const prenoms = [
  "Amina",
  "Jamal",
  "Mei",
  "Ravi",
  "Fatima",
  "Omar",
  "Sofia",
  "Arjun",
  "Leïla",
  "Diego",
];

for (let i = 0; i < prenoms.length; i += 1) {
  let ligne = "";
  let count = 0;

  while (count < i + 1) {
    ligne += prenoms[i] + " ";
    count += 1;
  }

  console.log(ligne.trim());
}

let trueFalse;

while (Number.isInteger(trueFalse) === false) {
  trueFalse = Number(prompt("Saisis un nombre entre 1 et 3"));
}

while (trueFalse != 3) {
  trueFalse = Number(prompt("Essayes encore :("));
}

if (trueFalse === 3) {
  alert("Bravo :)");
}


let trueFalse2;

while (Number.isInteger(trueFalse2) === false) {
  trueFalse2 = Number(prompt("Saisis un nombre"));
}

while (trueFalse2 != 14) {
  trueFalse2 = Number(prompt("Essayes encore :("));
    if (trueFalse2 === 14) {
    alert("Bravo :)");
  } else if (trueFalse2 < 10) {
    alert("Plus grand :(");
  } else if (trueFalse2 > 20) {
    alert("Plus petit :(");
  }
}


let plusDix;

let finalPlusDix =""

while (Number.isInteger(plusDix) === false) {
  plusDix = Number(prompt("Saisis un nombre"));
}

let resultatPlusDix = plusDix;

while (resultatPlusDix != plusDix + 10){
  resultatPlusDix += 1;
  finalPlusDix += resultatPlusDix + "\n";
} ;

console.log(finalPlusDix);


let plusDix2 = "jgjjyh";
let finalPlusDix2 ="";

while (Number.isInteger(plusDix2) === false) {
  plusDix2 = Number(prompt("Saisis un nombre"));
};

let resultatPlusDix2 = plusDix2;

for (let i = plusDix2; i <= plusDix2 + 10 -1; i += 1){
  resultatPlusDix2 += 1;
  finalPlusDix2 += resultatPlusDix2 + "\n";
};

console.log(finalPlusDix2);


let multiplieur;

while (Number.isInteger(multiplieur) === false) {
  multiplieur = Number(prompt("Saisis un nombre"));
}

function multiplier(a) {
  let resultat = "";

  for (let i = 1; i <= 10; i += 1) {
    resultat += a + " x " + i + " =  " + a * i + "\n";
  }

  return resultat;
}

let resultat = multiplier(multiplieur);

window.alert("La table de " + multiplieur + " : " + "\n" + resultat);


let number;

while (Number.isInteger(number) === false) {
  number = Number(prompt("Saisis un nombre"));
};

let numberFinal=0;

for (let i=1; i<= number; i += 1){
  numberFinal += i;
};

console.log(numberFinal);



let number;

while (Number.isInteger(number) === false) {
  number = Number(prompt("Saisis un nombre"));
}

function factorielisation(a) {
  let i;
  a;
  factoriel = 1;

  for (let i = 1; i <= number; i += 1) {
    factoriel = factoriel * i;
  }
  return factoriel;
}

console.log(factorielisation(number));

let number;

for (let i=0; i<= 20; i += 1){
while (Number.isInteger(number) === false) {
  number = Number(prompt("Saisis un nombre"));
};
};

function calculateChange(){
  let prices = [];
  let price = parseInt(prompt("entre le prix de l'article: (0 pour terminer)"))

  while (price != 0){
    prices.push(price);
    let price = parseInt(prompt("entre le prix de l'article: (0 pour terminer)"))
  }

  let total = prices.reduce((count, current) => count + current, 0);

  let amountPaid = parseInt(prompt("Entrez la somme payée :"));
  let change = amountPaid - total;

  if (change === 0) {
    return;
  }

  if (change < 0) {
    console.log("Somme payée insuffisante");
    return;
  }

  if (change > 0) {
    let currencies = [ 100, 50, 20, 10, 5, 2, 1];
    let changeToReturn = {};

    currencies.forEach((currency) => {
      let count = Math.floor(change / currency);
      if (count > 0) {
        changeToReturn[currency] = count;
        change %= currency ;
      }
    })

      Object.entries(changeToReturn).forEach(([currency, count]) => {
        console.log(count + " X " + currency + "€ rendus ! ");
      })
        return changeToReturn;
  }
}


function factorial(nombre) {
  if (nombre === 0 || nombre === 1){
    return 1;
  };

  return nombre * factorial(nombre -1);
};

function calculateChances(nombreChevauxPartants, nombreDeChevauxJoués){
  let X = factorial(nombreChevauxPartants) / factorial(nombreChevauxPartants-nombreDeChevauxJoués);
  let Y = factorial(nombreChevauxPartants) / (factorial(nombreDeChevauxJoués) * factorial(nombreChevauxPartants-nombreDeChevauxJoués));

  console.log("Dans l’ordre : une chance sur " + X +" de gagner");
  console.log("Dans le désordre : une chance sur " + Y +" de gagner");    
  };

  let nombreChevauxPartants = parseInt(prompt("Entrez le nombre de chevaux partant"));
  let nombreDeChevauxJoués = parseInt(prompt("Entrez le nombre de chevaux joués"));

  calculateChances(nombreChevauxPartants,nombreDeChevauxJoués);