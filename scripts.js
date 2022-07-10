const currentNumberWrapper = document.getElementById("currentNumber");

let currentNumber = 0;

function increment(){
    currentNumber++
    currentNumberWrapper.innerHTML = currentNumber
    currentNumberWrapper.textContent >= 0 ? currentNumberWrapper.style.color = "black" : currentNumberWrapper.style.color = "red"
}

function decrement(){
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber
    currentNumberWrapper.textContent >= 0 ? currentNumberWrapper.style.color = "black" : currentNumberWrapper.style.color = "red"
}

