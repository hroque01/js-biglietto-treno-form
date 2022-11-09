const btnConferma = document.getElementById('conferma');
const btnReset = document.getElementById('reset');
const prezzo = 1

btnConferma.addEventListener('click',

    function() {
        const userName = document.getElementById('nome').value;
        const userKm = document.getElementById('km').value;
        const userAge = document.getElementById('etaUtente').value;

        // // prezzo
        const prezzoIntero = (userKm * prezzo).toFixed(2);

        // SE minorenne 20% di sconto
        if (userAge == "minorenne") {
            let sconto = prezzoIntero * 20 / 100;
            let costo = (prezzoIntero - sconto).toFixed(2);
            
        } 
        // ALRIMENTI SE over 65 sconto di 40%
        else if  (userAge == "over65") {
            let sconto = prezzoIntero * 40 / 100;
            let costo = (prezzoIntero - sconto).toFixed(2);
            
        } 
        // ALTRIMENTI NIENTE SCONTO
        else {
            
        }
        
        

    }

    
)
