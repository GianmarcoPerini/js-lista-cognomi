let listaCognomi = ["Verdi","Bianchi","Rossi","Neri","Gialli"]
let tuoCognome = prompt("Cognome")
const capitalizzazione = tuoCognome.charAt(0).toUpperCase() + tuoCognome.slice(1);

listaCognomi.push(capitalizzazione)
console.log(listaCognomi.sort());
console.log(listaCognomi.indexOf(capitalizzazione) + 1);