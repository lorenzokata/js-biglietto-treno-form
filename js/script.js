var submit = document.getElementById('genera');

genera.addEventListener("click", function(){
    
    //INPUT

    //salvo il nome
    var nome = document.getElementById('nome').value;

    //salvo i km e calcoliamo il prezzo
    var km = document.getElementById('km').value;

    //salvo fascia etá
    var fascia = document.getElementById('fascia-eta').value;

    //carrozza e codice Cp devono poi essere calcolati random
    var carrozza = Math.floor(Math.random() * 9)+1;
    var codiceCp = Math.floor(Math.random() * 10000) + 90000;

    
    // CALCOLI

    // calcolo prezzo finale

    var prezzo = km * 0.21;

    if (fascia == "minorenne") {
        prezzo *= 0.8;
        fascia = "Sconto minorenne"
    }else if (fascia == "over65") {
        prezzo *= 0.6;
        fascia = "Sconto maggiorenne"
    } else {
        fascia = "Nessun'offerta";
    }


    prezzo = prezzo.toFixed(2);

    //OUTPUT

    document.getElementById('nome-passeggero').innerHTML = nome;
    document.getElementById('offerta').innerHTML = fascia;
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice-cp').innerHTML = codiceCp;
    document.getElementById('costo-biglietto').innerHTML = prezzo;

    // MOSTRA SEZIONE BIGLIETTO

    document.getElementById('sezione-biglietto').classList.remove('d-none');
});



//*** button reset */
var annulla = document.getElementById('annulla');

annulla.addEventListener("click", function(){

    document.getElementById('nome').value = "";
    document.getElementById('km').value = "";
    document.getElementById('fascia-eta').value = "";

    document.getElementById('sezione-biglietto').classList.add('d-none')

});
