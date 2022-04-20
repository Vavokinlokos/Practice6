function calculator(){
    firstNum = document.getElementById("first").value
    secondNum = document.getElementById("second").value
    sign = document.getElementById("sign").value
    alert(calculate(firstNum, secondNum, sign))
}


function calculate(first, second, sign){
    const signs = {
        "+": (first, second) => {
            return +first + +second
        },
        "-": (first, second) => {
            return first - second
        },
        "*": (first, second) => {
            return first * second
        },
        "/": (first, second) => {
            return first / second
        }
    }
    return signs[sign](first, second)
}