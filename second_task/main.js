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
    if (Array.isArray(first)){
        let result = []
        first.forEach((num1, index) => {
            const num2 = second[index]
            result.push(signs[sign](num1, num2))
        })
        return result
    }
    return signs[sign](first, second)
}

console.log(calculate([1,2,3], [1,5,3], "+"))
console.log(calculate([1,2,3], [1,5,3], "*"))