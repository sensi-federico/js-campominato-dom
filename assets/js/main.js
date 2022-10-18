// Consegna


// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.

// const containerEl = document.querySelector('.my-container');
// const button = document.querySelector('.btn');

// function start () {
    
//     const level = document.querySelector('.selector').value;
//     console.log(level);
//     if (level == 1) {
//         for (let i = 1; i <= 100; i++) {
//             const markUp = `<div class="cell lvl_1" src="" alt="">${i}</div>`
//             containerEl.insertAdjacentHTML('beforeend', markUp);
//         }
//     } else if (level == 2){
//         for (let i = 1; i <= 81; i++) {
//             const markUp = `<div class="cell lvl_2" src="" alt="">${i}</div>`
//             containerEl.insertAdjacentHTML('beforeend', markUp);
//         }
//     } else if (level == 3){
//         for (let i = 1; i <= 49; i++) {
//             const markUp = `<div class="cell lvl_3" src="" alt="">${i}</div>`
//             containerEl.insertAdjacentHTML('beforeend', markUp);
//         }
//     }


//     const cells = document.querySelectorAll('.cell');
    
//     for (let i = 0; i < cells.length; i++) {
//         const cell = cells[i];
//         cell.addEventListener('click', function(){
//             cell.classList.toggle('bg');
//             const cellNum = cell.innerHTML;
//             console.log(cellNum);
//         })
//     }   
// }


function reload () {
    location.reload();
}



const bombs = [];

function generateBomb () {
    while (bombs.length != 16){
        const bomb = generateRandomNumber(1, 100);
        if (!bombs.includes(bomb)){
            bombs.push(bomb);
        }

    }
    console.log(bombs);
}


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

generateBomb()