// Chiedere i dati

const nome = document.getElementById('identity');
const km = document.getElementById('identityKm')
const inputField = document.getElementById('nome');
const inputFieldKm = document.getElementById('km')
const btn = document.getElementById('btn')

// bottone genera biglietto
btn.addEventListener('click', 

    function() {
        // Chiedere il nome
        let riempimento = inputField.value;
        nome.append(riempimento);
        // Chiedere i quanti km fare
        let riempimento2 = inputFieldKm.value;
        km.append(riempimento2);
        // auto-annullamento della value
        inputField.value = null;
        inputFieldKm.value = null;
    }

);

// selezionare con un dropdown l'eta

    // minorenne sconto del 20%

    // piu di 65 anni sconto del 40%

// output
