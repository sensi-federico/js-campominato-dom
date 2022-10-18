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
let points = 0;

function start() {

    containerEl.innerHTML = '';
    const level = document.querySelector('.selector').value;
    // console.log(level);
    if (level == 100) {
        for (let i = 1; i <= level; i++) {
            const markUp = `<div class="cell lvl_1" src="" alt="">${i}</div>`
            containerEl.insertAdjacentHTML('beforeend', markUp);
        }
        generateBomb(100);
        console.log(bombs);
    } else if (level == 81) {
        for (let i = 1; i <= level; i++) {
            const markUp = `<div class="cell lvl_2" src="" alt="">${i}</div>`
            containerEl.insertAdjacentHTML('beforeend', markUp);
        }
        generateBomb(81);
        console.log(bombs);
    } else if (level == 49) {
        for (let i = 1; i <= level; i++) {
            const markUp = `<div class="cell lvl_3" src="" alt="">${i}</div>`
            containerEl.insertAdjacentHTML('beforeend', markUp);
        }
        generateBomb(49);
        console.log(bombs);
    }

    const cells = document.querySelectorAll('.cell');
    pointCheck(cells);

    const userPointsValue = document.querySelector('.userPoints').value;
    console.log(userPointsValue)
    const endgame = document.querySelector('#endgame');
    const victory = Number(level) - 16;

    if (userPointsValue == victory){
        endgame.append(`Hai Vinto!`);
    }else {
        endgame.append(`Hai perso!`);
    }
}

function pointCheck(cells) {
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        cell.addEventListener('click', function () {
            const cellNum = cell.innerText;
            cell.classList.add('bg');
            // console.log(cellNum);

            bombCheck(bombs, cell, cellNum);

            points += 1;

            const userPoints = document.querySelector('.userPoints');
            userPoints.innerHTML = `Punteggio: ${points - 1}`;

        })
    }
}

function bombCheck(bombs, cell, cellNum) {
    for (let i = 0; i < bombs.length; i++) {
        const bomb = bombs[i];

        if (bomb == cellNum) {
            cell.classList.add('bg-bomb');
            bannerEl.style.display = 'block';
            containerEl.style.display = 'none';
        }
    }
}

function reload() {
    location.reload();
}

function generateBomb(max) {
    while (bombs.length != 16) {
        const bomb = generateRandomNumber(1, max);
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }
    }
    return bombs
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
