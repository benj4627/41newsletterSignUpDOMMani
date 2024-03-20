//fanger de relevante elementer. 
let form = document.getElementById('email-form');
let inputEl = document.querySelector("input[type='email']");
let paraEl = document.querySelector('.successMessage');

// Fanger tidligere gemt email fra input, fra localStorage med key 'userEmail'.
let userEmail = localStorage.getItem('userEmail');

//Tjekker om paraEL eksisterer. 
if(paraEl){
    //Tjekker om der findes en email fra brugeren, hvis ja, opdaterer DOM viser en besked med den gemte email via innerHTML
    if (userEmail) {
        paraEl.innerHTML += `<p class="message"> A confirmation email has been sent to ${userEmail}. Please open
    it and click the button inside to confirm your subscription.</p>`
    };
};

//lytter efter input i email input field. Tildeler invalidMail class, hvis det indtastede indeholder forbudte tegn. Tildeler class valid, hvis emailadressen er korrekte formatteret. Tjekker ikke om mail rent faktisk eksistere. 
inputEl.addEventListener('input', () => {
    if (!inputEl.validity.valid) {
        inputEl.classList.add('invalidMail');
    } else {
        inputEl.classList.remove('invalidMail');
        inputEl.classList.add('valid');
    }

    //gemmer den indtastede email i localStorage med key 'userEmail'
    userEmail = inputEl.value; 
    localStorage.setItem('userEmail', userEmail);
});







