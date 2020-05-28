let button = document.getElementById('nameButton')
let name = document.getElementById('name')
let numberDisplay = document.getElementById('numberDisplay')
let inp = document.getElementById('inp')
let startGame = document.getElementById(`startGame`)
let i = 1
let guess = document.getElementById('number');
let submit = document.getElementById(`submit`)
let correct = document.getElementById('correct');
let wrong = document.getElementById('wrong');
let right = 0;
let left = 0;
let sort = 7;
let total = 0
inp.onkeyup = (event) => {
    if (event.keyCode === 13) {

        event.preventDefault();
        startGame.click()
    }

}
startGame.onclick = () => {
    start()
}

guess.onkeyup = (event) => {

    if (event.keyCode === 13) {
        event.preventDefault();
        submit.click()

    }
}
let randomizer = Math.floor((Math.random() * 10) + 3)
submit.onclick = gamePlay

function start() {
    if (inp.value == "" || inp.value.match(/[1234567890]/) || inp.value.match(/[-,+*/!@#$%^&~{}=`|]/)) {
        numberDisplay.innerText = `enter name`
    } else {
        name.innerHTML = `welcome ${inp.value}!!!`
        name.style.textTransform = `capitalize`
        inp.style.display = `none`

        numberDisplay.innerText = randomizer;
        setTimeout(() => {
            numberDisplay.style.display = "none"

        }, 2500);
        startGame.style.display = `none`


    }
}

function gamePlay() {

    total++
    if (guess.value == randomizer) {

        correct.innerText = right;
        right++
        sort++

        correct.innerText = `correct:${right}`;
        randomizer *= 17
        numberDisplay.style.display = `block`;
        numberDisplay.innerText = randomizer;
        setTimeout(() => {
            numberDisplay.style.display = "none"

        }, 2000);

        console.log(sort);
    } else {

        correct.innerText = right;
        numberDisplay.style.display = `block`;
        numberDisplay.innerText = `wrong answer`;
        left++

        correct.innerText = `correct:${right}`;
        submit.disabled = true
        setTimeout(() => {
            numberDisplay.innerText = `passed:${right}||failed:${left}`

        }, 1500);
    }

}