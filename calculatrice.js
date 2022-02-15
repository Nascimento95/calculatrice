
do {
    
    var choiceCalculate = prompt("que souhaitez-vous faire ? "
        + "\n\n 1 - Addition\n 2 - Multiplication \n 3 - Soustraction  \n 4 - Division \n"
    )
    
} while (choiceCalculate > 4 || choiceCalculate <= 0 );

do {

    var firstNumber     = prompt("Entrez votre premier numéro")
    var secondeNumber   = prompt("Entrez votre deuxième numéro")
    // la function isNan() renvoi true si c'est pas un nombre et false si c'est un nombre
} while ( isNaN(firstNumber) == true && isNaN(secondeNumber) == true );

// les functions avec les condition 

// if (choiceCalculate == 1) {
    
//     function addition(num1, num2) {
//         return Number(num1) + Number(num2)
//     }
//     let resultatAddition = addition(firstNumber, secondeNumber)
//     console.log(resultatAddition);
// }

// if (choiceCalculate == 2) {
    
//     function multiplication(num1, num2) {
//         return Number(num1) * Number(num2)
//     }
//     let resultatMultiplication = multiplication(firstNumber, secondeNumber)
//     console.log(resultatMultiplication);
// }

// if (choiceCalculate == 3) {
    
//     function Soustraction(num1, num2) {
//         return Number(num1) - Number(num2)
//     }
//     let resultatSoustraction = Soustraction(firstNumber, secondeNumber)
//     console.log(resultatSoustraction)
// }

// if (choiceCalculate == 4) {

    // function division(num1, num2) {
    //     return Number(num1) / Number(num2)
    // }
    // let resultatdivision = division(firstNumber, secondeNumber)
    // console.log(resultatdivision)
// }

let resultat ; 
switch (choiceCalculate) {
    case "1":
        function addition(num1, num2) {
            return Number(num1) + Number(num2)
        }
            resultat = addition(firstNumber, secondeNumber)
            
        break;
    case "2":
        function multiplication(num1, num2) {
            return Number(num1) * Number(num2)
        }
            resultat = multiplication(firstNumber, secondeNumber)
            
            break;
    case "3":
        function Soustraction(num1, num2) {
            return Number(num1) - Number(num2)
        }
            resultat = Soustraction(firstNumber, secondeNumber)
        break;
    case "4":
        function division(num1, num2) {
            return Number(num1) / Number(num2)
        }
            resultat = division(firstNumber, secondeNumber)
            
        break;
    default:
        alert('problem')
        break;
}
alert(resultat)