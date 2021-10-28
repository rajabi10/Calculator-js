const display = document.querySelector(".display");

function showDisplay(event) {
    const x = event.target.innerText;
    if (display.innerHTML == 0) {
        return display.innerHTML = x;
    }
    return display.innerHTML += x
}
const list = document.querySelectorAll(".show-display");
list.forEach(item => {
    item.addEventListener("click", showDisplay)

})

function calculate() {
    let result = display.innerText
    display.innerText = eval(result)
}

document.querySelector(".calculate").addEventListener("click", calculate);

function clear() {
    display.innerText = 0;
}
document.querySelector(".all-clear").addEventListener("click", clear);

function oneClear() {
    let text = display.innerText;
    if (text.length === 0) {
        display.innerText = 0;
    } else {
        display.innerText = text.substring(0, text.length - 1)
    }
}

document.querySelector(".clear-last").addEventListener("click", oneClear)