//The selections
let checkBTN = document.getElementById("btn")
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let factors1 = document.getElementById("num1Factors")
let factors2 = document.getElementById("num2Factors")
let result = document.getElementById("amicable-result")

//the arrays to store the factors
let factorsN1 = []
let factorsN2 = []

//the sums of the elements of the factor arrays
let sumFactorsNumber1 = 0;
let sumFactorsNumber2 = 0;


/**The program takes the users inputs,
 * then it checks the factors for both the numbers.
 * After we get the factors in the arrays, we check the sum of 
 * all the items in the arrays one by one.
 * Once we have the original two numbers, their factors,
 * and the sum of all their factors, we can check if the numbers
 * are an amicable pair or not.
 */
//event handlers
checkBTN.addEventListener("click",function(e){
    e.preventDefault()

    //after the user clicks the check numbers button, this function is triggered
    factorsN1 = []
    factorsN2 = []

    sumFactorsNumber1 =0;
    sumFactorsNumber2 =0;

    result.innerText = ""
    factors1.innerText = ""
    factors2.innerText = ""
    let number1 = num1.value
    let number2 = num2.value

    //checking the factors of both numbers
    checkNum1Factors(number1)
    checkNum2Factors(number2)

    //checking the sums of both factors list
    checkSumFactors1()
    checkSumFactors2()

    //finally checking the numbers 
    checkAmicable(number1,number2)
})

function checkAmicable(number1, number2){
    //if the sum of the factors of the number 1 equals the number 2
    // and the sum of the factors of the number 2 equals the number 1
    // then the numbers are an amicable pair
    if(sumFactorsNumber1 == number2 && sumFactorsNumber2 == number1){
        result.innerText = `The Numbers: ${number1} and ${number2} are amicable`
    }else{
        result.innerText = `The Numbers: ${number1} and ${number2} are not amicable`

    }
}

//getting the sum of the factors of the number 1
function checkSumFactors1(){

    for(let i =0; i < factorsN1.length;i++){
        sumFactorsNumber1 += factorsN1[i]
    }
    showFactorsN1()

}

//getting the sum of the factors of the number 2
function checkSumFactors2(){
    for(let i =0; i < factorsN2.length;i++){
        sumFactorsNumber2 += factorsN2[i]
    }
    showFactorsN2()

   
}

//checking the factors of number 1
function checkNum1Factors(number1){
    for(let i = 1; i < number1; i++) {

        // check if number is a factor
        if(number1 % i == 0) {
            factorsN1.push(i)
        }
    }

}

//checking the factors of number 2
function checkNum2Factors(number2){
    for(let i = 1; i < number2; i++) {

        // check if number is a factor
        if(number2 % i == 0) {
            factorsN2.push(i)
        }
    }

}

//adding the factors of the number 1 to the UI
function showFactorsN1(){
    for(let i = 0; i<factorsN1.length;i++){
        factors1.innerText += " "+ factorsN1[i] + " "
    }
    factors1.innerText += " = "+sumFactorsNumber1
}

//adding the factors of the number 2 to the UI
function showFactorsN2(){
    for(let i = 0; i<factorsN2.length;i++){
        factors2.innerText += " "+ factorsN2[i] + " "
    }
    factors2.innerText += " = "+sumFactorsNumber2

}

