const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const diceImg1 = `img/dice${randomNumber1}.png`;
const imgElemLeft = document.querySelector('.left');
imgElemLeft.setAttribute('src', diceImg1);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const diceImg2 = `img/dice${randomNumber2}.png`;
const imgElemRight = document.querySelector('.right');
imgElemRight.setAttribute('src', diceImg2);


if (randomNumber1 > randomNumber2) {
    document.querySelector('#result').innerHTML = 'Player 1 wins 💎!';
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('#result').innerHTML = '💎 Player 2 wins!';
} else {
    document.querySelector('#result').innerHTML = 'Draw 👑!';
}