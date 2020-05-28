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
let sort = Math.floor(Math.random() * 10 + 10)
console.log(sort)
let total = 0
submit.disabled = true
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
console.log(randomizer)

function start() {
    if (inp.value == "" || inp.value.match(/[1234567890]/) || inp.value.match(/[-,+*/!@#$%^&~{}=`|]/)) {
        numberDisplay.innerText = `enter name`

    } else {
        submit.disabled = false
        name.innerHTML = `welcome ${inp.value}!!!`
        name.style.textTransform = `capitalize`
        inp.style.display = `none`
        guess.disabled = true
        numberDisplay.innerText = randomizer;
        setTimeout(() => {
            numberDisplay.innerText = "enter number"
            guess.disabled = false
            guess.focus()
        }, 5000);
        startGame.style.display = `none`


    }
}




function gamePlay() {
    /*
        let end = setTimeout(() => {
            numberDisplay.innerText = `passed:${right}||failed:${left}`
            submit.disabled = true
            guess.value = ``
            correct.innerText = `correct:${right}`;
        }, 10000, );*/

    total++
    if (guess.value == randomizer) {



        console.log(`cleared`)
        guess.value = ``
        correct.innerText = right;
        right++
        sort++
        guess.disabled = true
        correct.innerText = `correct:${right}`;
        randomizer *= Math.floor(Math.random() * 10 + 10);
        numberDisplay.style.display = `block`;
        numberDisplay.innerText = randomizer;
        setTimeout(() => {
            numberDisplay.innerText = "enter number"
            guess.disabled = false
            guess.focus()
        }, 5000);
        /* setTimeout(() => {
             if (!submit.click()) {
                 numberDisplay.innerText = `passed:${right}||failed:${left}`
                 submit.disabled = true
                 guess.value = ``
                 correct.innerText = `correct:${right}`;
             }
         }, 10000, );*/

        console.log(sort);
    } else {
        numberDisplay.style.display = `block`;
        numberDisplay.innerText = `wrong answer`;
        left++
        guess.value = ``
        guess.disabled = true
        correct.innerText = `correct:${right}`;
        submit.disabled = true
        return setTimeout(() => {
            numberDisplay.innerText = `passed:${right}||failed:${left}`

        }, 1000);
    }
    /*
        end = setTimeout(() => {
            numberDisplay.innerText = `passed:${right}||failed:${left}`
            submit.disabled = true
            guess.value = ``
            correct.innerText = `correct:${right}`;
        }, 10000, );*/

}