let nombreLigne = parseInt(prompt("Donnez moi un nombre"))

for (let i=0; i>=nombreLigne; i += 1){
    let etoiles='*'.repeat(2 * i - 1);
    console.log(etoiles);
}

