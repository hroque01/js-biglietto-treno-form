// Calcolare il biglietto del treno

// variabili bottone
const btnConferma = document.getElementById('conferma');
const btnReset = document.getElementById('reset');
const prezzo = 0.21

btnConferma.addEventListener('click',

    function() {

        // variabili
        const userName = document.getElementById('nome');
        const nomeCognome = userName.value;

        const userKm = document.getElementById('km');
        const kmViaggio = parseInt(userKm.value);

        const userAge = document.getElementById('etaUtente').value;

        const userTicketName = document.getElementById('nomePasseggero');

        // append
        let riempimento = userName.value;
        userTicketName.append(riempimento)

        // append null
        userName.value = null;
        userKm.value = null;
    
        // Carrozza numero random
        const carrozzaRandom = Math.floor(Math.random() * 10) +1;
        document.getElementById('numeroCarrozza').innerHTML = carrozzaRandom;
        
        // Codice P random
        const codiceUtente = Math.floor(Math.random() * 10000) +1;
        document.getElementById('codicePasseggero').innerHTML = codiceUtente

        // prezzo
        const prezzoIntero = (kmViaggio * prezzo).toFixed(2);

        // SE minorenne 20% di sconto
        if (userAge == "minorenne") {
            let sconto = prezzoIntero * 20 / 100;
            let costo = (prezzoIntero - sconto).toFixed(2);
            // OUTPUT
            document.getElementById('sconti').innerHTML = 'Sconto 20%';
            document.getElementById('prezzoTotale').innerHTML = `€ ${costo}`;
        } 
        // ALRIMENTI SE over 65 sconto di 40%
        else if  (userAge == "over65") {
            let sconto = prezzoIntero * 40 / 100;
            let costo = (prezzoIntero - sconto).toFixed(2);
            // OUTPUT
            document.getElementById('sconti').innerHTML = 'Sconto 40%';
            document.getElementById('prezzoTotale').innerHTML = `€ ${costo}`
        } 
        // ALTRIMENTI NIENTE SCONTO
        else {
            // OUTPUT
            document.getElementById('sconti').innerHTML = 'Biglietto Standard';
            document.getElementById('prezzoTotale').innerHTML = `€ ${prezzoIntero}`
        }

        // classi display none e display block
        const ticket = document.getElementById('ticket');
        ticket.classList.add('d-block')
        ticket.classList.remove('d-none')
    }
)

// BOTTONE RESET
btnReset.addEventListener("click",
    function () {
        n = 0;

        // classi display none e display block
        ticket.classList.add('d-none')
        ticket.classList.remove('d-block')

        // output
        document.getElementById('nomePasseggero').innerHTML = null;

        document.getElementById('numeroCarrozza').innerHTML = null;

        document.getElementById('codicePasseggero').innerHTML = null;

        document.getElementById('sconti').innerHTML = null;

        document.getElementById('prezzoTotale').innerHTML = null;

        document.getElementById('prezzoTotale').innerHTML = null;


    }
)
