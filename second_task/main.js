function calculator(){
    firstNum = document.getElementById("first").value
    secondNum = document.getElementById("second").value
    sign = document.getElementById("sign").value
    alert(calculate(firstNum, secondNum, sign))
}


function calculate(first, second, sign){
    const signs = {
        "+": (first, second) => +first + +second,
        "-": (first, second) => first - second,
        "*": (first, second) => first * second,
        "/": (first, second) => first / second
    }
    if (Array.isArray(first)){
        let result = []
        first.forEach((num1, index) => {
            const num2 = second[index]
            result.push(signs[sign](num1, num2))
        })
        return result
    }
    if (typeof first === 'object'){
        return {result: signs[sign](first.a, second.b)}
    }
    return signs[sign](first, second)
}

// console.log(calculate([1,2,3], [1,5,3], "+"))
// console.log(calculate([1,2,3], [1,5,3], "*"))

// console.log(calculate({a: 7}, {b: 2}, "-"))
// console.log(calculate({a: 7}, {b: 2}, "/"))

let MathFrameWork = {
    result: "",
    first:0,
    second:0,
    calc: (a,b,sign) => MathFrameWork.result = calculate(a,b,sign)
}

// MathFrameWork.calc({a: 7}, {b: 2}, "-")
// console.log(MathFrameWork.result)

MathFrameWork.first = [2,4]
MathFrameWork.second = [5,7]
MathFrameWork.calc(MathFrameWork.first, MathFrameWork.second, "+")
console.log(MathFrameWork.result)

MathFrameWork.first = 2
MathFrameWork.second = 5
MathFrameWork.calc(MathFrameWork.first, MathFrameWork.second, "*")
console.log(MathFrameWork.result)

MathFrameWork.first = {a: 25}
MathFrameWork.second = {b: 3}
MathFrameWork.calc(MathFrameWork.first, MathFrameWork.second, "*")
console.log(MathFrameWork.result)
