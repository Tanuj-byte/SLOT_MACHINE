let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let values = [
    '😂', '😍', '😘', '😊', '🤣', '😒', '😁'
]

function getRandomValue() {
    return values[parseInt(Math.random() * 7)]
}
let flag = false

function intervalManager(flag) {
    if (flag) {
        setInterval(() => {
            value1.innerText = getRandomValue();
            value2.innerText = getRandomValue();
            value3.innerText = getRandomValue();
        }, 100)
    } else
        clearInterval(intervalID);
}
let start = document.getElementById('start')
start.onclick = function(ev) {

    flag = true

    let inpSpeed = document.getElementById('inpSpeed')
    inpSpeed.onchange = function(ev) {

        document.documentElement.style.setProperty('--speed', ev.target.value)
    }

}

let st = document.getElementById('stop')
st.onclick = function(ev) {

    document.documentElement.style.setProperty('--speed', 0)
    flag = false
    if (value1.innerText == value2.innerText && value1.innerText == value3.innerText && value2.innerText === value3.innerText) {
        alert("WON")
    } else
        alert("GAME OVER")
}