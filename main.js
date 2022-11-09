// Calcolare il biglietto del treno

// variabili bottone
const btnConferma = document.getElementById('conferma');
const btnReset = document.getElementById('reset');
const prezzo = 0.21

btnConferma.addEventListener('click',

    function() {

        // variabili
        const userName = document.getElementById('nome')
        const nomeCognome = userName.value;

        const userKm = document.getElementById('km').value;
        const kmViaggio = userKm.value;

        const userAge = document.getElementById('etaUtente');
        const fasciaEta = userAge.value;

        const userTicketName = document.getElementById('nomePasseggero');

        // append
        let riempimento = userName.value;
        userTicketName.append(riempimento)

        // append null
        userName.value = null;
        


    
        // Carrozza numero random
        const carrozzaRandom = Math.floor(Math.random() * 10) +1;
        document.getElementById('numeroCarrozza').innerHTML = carrozzaRandom;
        
        // Codice P random
        const codiceUtente = Math.floor(Math.random() * 10000) +1;
        document.getElementById('codicePasseggero').innerHTML = codiceUtente

        // // prezzo
        const prezzoIntero = (userKm * prezzo).toFixed(2);

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


    }
)
