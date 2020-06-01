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

let sort = Math.floor(Math.random() * 10 + 10)
let total = 0
submit.disabled = true
guess.disabled = true
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
let randomizer = Math.floor((Math.random() * 50) + 5)
submit.onclick = gamePlay


function start() {
    if (inp.value == "" || inp.value.match(/[1234567890]/) || inp.value.match(/[-,+*/!@#$%^&~{}=`|]/)) {
        numberDisplay.innerText = `enter name`

    } else {

        name.innerHTML = `welcome ${inp.value}!!!`
        name.style.textTransform = `capitalize`
        inp.style.display = `none`
        guess.disabled = true
        let string = randomizer.toString().split('')
        let numberG = string.join(' ')
        numberDisplay.innerText = numberG;

        setTimeout(() => {
            submit.disabled = false
            numberDisplay.innerText = "enter number"
            guess.disabled = false
            guess.focus()
        }, 5000);
        startGame.style.display = `none`


    }
}

function gamePlay() {

    if (guess.value == randomizer) {
        guess.value = ``
        correct.innerText = right;
        right++
        submit.disabled = true
        guess.disabled = true
        correct.innerText = `correct:${right}`;
        randomizer *= Math.floor(Math.random() * 10 + 10);
        numberDisplay.style.display = `block`;
        let string = randomizer.toString().split('')
        let numberG = string.join(' ')
        numberDisplay.innerText = numberG;
        let timer = 5000
        if (right >= 10 && right < 15) {
            timer = 8000
        } else if (right >= 15) {
            timer = 10000
        } else {
            timer = 5000
        }
        console.log(timer)
        setTimeout(() => {
            submit.disabled = false
            numberDisplay.innerText = "enter number"
            guess.disabled = false
            guess.focus()
        }, timer);
    } else {
        numberDisplay.style.display = `block `;
        numberDisplay.innerText = `wrong answer`;
        guess.value = ``
        guess.disabled = true
        correct.innerText = `correct: ${right}`;
        submit.disabled = true
        return setTimeout(() => {
            numberDisplay.innerText = `passed: ${right}`

        }, 1000);
    }


}