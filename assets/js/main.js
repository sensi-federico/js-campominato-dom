// Consegna


// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.

const containerEl = document.querySelector('.my-container');
const button = document.querySelector('.btn');
const bombs = [];
const bannerEl = document.querySelector('.banner');

function start () {
    
    containerEl.innerHTML = '';
    let points = 0;
    const level = document.querySelector('.selector').value;
    // console.log(level);
    if (level == 1) {
        for (let i = 1; i <= 100; i++) {
            const markUp = `<div class="cell lvl_1" src="" alt="">${i}</div>`
            containerEl.insertAdjacentHTML('beforeend', markUp);
        }
        generateBomb(100);
        console.log(bombs);
    } else if (level == 2){
        for (let i = 1; i <= 81; i++) {
            const markUp = `<div class="cell lvl_2" src="" alt="">${i}</div>`
            containerEl.insertAdjacentHTML('beforeend', markUp);
        }
        generateBomb(81);
        console.log(bombs);
    } else if (level == 3){
        for (let i = 1; i <= 49; i++) {
            const markUp = `<div class="cell lvl_3" src="" alt="">${i}</div>`
            containerEl.insertAdjacentHTML('beforeend', markUp);
        }
        generateBomb(49);
        console.log(bombs);
    }


    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const cellNum = cell.innerText;
        cell.addEventListener('click', function(){

            cell.classList.toggle('bg');
            console.log(cellNum);
            points += 1;
            
            if (bombs.includes(Number(cellNum))){
                cell.classList.toggle('bg-bomb');
                bannerEl.style.display = 'block';
                containerEl.style.display = 'none';
            }
            
        })
    }  
    
    const endgame = document.querySelector('#endgame');
    endgame.append('Hai perso! punteggio: ' + points);
} 


function reload () {
    location.reload();
}


function generateBomb (max) {
    while (bombs.length != 16){
        const bomb = generateRandomNumber(1, max);
        if (!bombs.includes(bomb)){
            bombs.push(bomb);
        }
    }
    // console.log(bombs);
}


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
