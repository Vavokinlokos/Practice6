const questions ={
    1: "Привіт! Давай дізнаємося який ти герой. Згоден?",
    2: "\nЗ якої ти країни?",
    3: "\nСкільки тобі років?",
    4: "\nТи добрий?",
    5: "\nТи винахідливий?",
    6: "\nТи допомагаєш іншим?",
    7: "\nТи живеш в селі?",
    8: "\nУ тебе є свій транспорт?",
    10: "\nУ тебе є морська хвороба?",
    11: "\nТи любиш дерева?",
    12: "\nСкажи \"паляниця\"."
}


const result ={
    1: "\nНу а шо тут сидимо? Йди молитися за Неньку!",
    2: "\nГЕТЬ З УКРАЇНИ, МОСКАЛЬ НЕКРАСІВИЙ!",
    3: "\nТи карту принёс?",
    4: "\nВ любом случае - следуй за русским кораблём!",
    5: "\nТи - той самий волонтер, який вже знайшов винищувач і думає як його відправити Новою Поштою.",
    6: "\nВи - бабуся, що напоїла русявих чаєм з проносним і підпалила туалет.",
    7: "\nТи - один з циган, що вкрали танк на тракторі. (Не бійся, ми нікому не скажемо, Слава Україні!)",
    8: "\nТи - той, завдяки кому русскій десант по старим картам спустився туди, де мав бути ліс, а опинився в голім полі і був тут же пов'язаний.",
    9: "\nТи - один з грузинів, що відмовилися заправити російський корабель і запропонували використати весла.",
    10: "\nТи - це ти. Бо кожен з нас герой!"
}

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

const prompt = require("prompt-sync")();

function game(){
    const wantPlay =  prompt(console.log(questions[1]))
    switch(wantPlay){
        case "так":
            const country =  prompt(console.log(questions[2]))
            let countryCheck = (country == "Россия" || country == "Росія") ? result[2] : (country == "Беларусь" ||country == "Білорусь" ) ? result[3] : ""
            if (countryCheck != "") {
                if(countryCheck == result[3]){
                    prompt(console.log(result[3]))
                    console.log(result[4])
                    return
                }else {
                    console.log(countryCheck)
                    return
                }
            }
            if (country == "Украина"){
                const palanicaCheck =  prompt(console.log(questions[12]))
                if (palanicaCheck != "паляниця"){
                    console.log(result[2])
                    return
                }else{
                    console.log("\nРозмовляй рідною, не позорь Неньку!")
                }
            }
            const age =  prompt(console.log(questions[3]))
            const kind =  prompt(console.log(questions[4]))
            if (kind == "так"){
                const smart =  prompt(console.log(questions[5]))
                if (smart == "так"){
                    const car =  prompt(console.log(questions[8]))
                    if(car == "ні"){
                        const vilage =  prompt(console.log(questions[7]))
                        if (vilage == "так"){
                            if(age > 70){
                                console.log(result[6])
                            }else console.log(result[10])
                        }
                    }else{
                        const sea =  prompt(console.log(questions[10]))
                        if (sea == "так"){
                            console.log(result[7])
                        }else console.log(result[9])
                    }
                }else{
                    const help =  prompt(console.log(questions[6]))
                    if (help == "так"){
                        console.log(result[5])
                    }else console.log(result[10])
                }
            }else{
                const likeTree =  prompt(console.log(questions[11]))
                if (likeTree == "так"){
                    const smart = prompt(console.log(questions[5]))
                    if (smart == "так"){
                            const car =  prompt(console.log(questions[8]))
                            if(!car){
                                const vilage =  prompt(console.log(questions[7]))
                                if (vilage == "так"){
                                    if(age > 70){
                                        console.log(result[6])
                                    }else console.log(result[10])
                                }else{
                                    const sea =  prompt(console.log(questions[10]))
                                    if (sea == "так"){
                                        console.log(result[7])
                                        
                                    }else console.log(result[9])
                                }
                            }else{
                                const help =  prompt(console.log(questions[6]))
                                if (help == "так"){
                                    console.log(result[5])
                                }else console.log(result[10])
                            }
                    }else{
                        const help =  prompt(console.log(questions[6]))
                        if (help == "так"){
                            console.log(result[5])
                        }else console,log(result[10])
                    }
                }else console.log(result[8])
            }
            return
        case "ні":
            console.log(result[1])
            return
        default:
            console.log("Я тебе не розумію.")
            return
    }
}


game();