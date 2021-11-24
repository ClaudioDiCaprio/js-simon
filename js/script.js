// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

alert('che minchia guaddi');

// generate random numbers into an array

let num = [];

for (let i = 0; num.length < 5 ;i++){
    let randoNum = Math.floor(Math.random() * 100) + 1;
    if(!num.includes(randoNum)){
        num.push(randoNum);
    }console.log(num);
}

const numberJar = document.querySelector('.jar');

// print random
num.forEach((element) =>{
    numberJar.innerHTML += `<p class="casual">${element}</p>`;
   });



setTimeout(simonSays, 10000);   