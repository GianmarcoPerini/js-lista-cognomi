let listaCognomi = ["Verdi","Bianchi","Rossi","Neri","Gialli"]
let tuoCognome = prompt("Cognome")
const capitalizzazione = tuoCognome.charAt(0).toUpperCase() + tuoCognome.slice(1);

listaCognomi.push(capitalizzazione)
console.log(listaCognomi.sort());
console.log(listaCognomi.indexOf(capitalizzazione) + 1);

for (let i = 0; i < listaCognomi.length; i++){
    let storico = document.getElementById("lista").innerHTML;
    document.getElementById("lista").innerHTML = storico + "<li>" + listaCognomi[i] + "</li>"

}

document.getElementById("posizione").innerHTML = listaCognomi.indexOf(capitalizzazione) + 1
