// Select DOM elementsconst 
const resultEl = document.querySelector('#result');
const lengthEl = document.querySelector('#length');
const lowercaseEl = document.querySelector('#lowercase');
const uppercaseEl = document.querySelector('#uppercase');
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const generateEl =  document.querySelector('#generate');
const clipboardEl = document.querySelector('#clipboard');

// Create get random password function
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber(){
    return Math.floor(Math.random() * 10)
}
function getRandomSymbol(){
    const symbols = `!@#$%^&*(){}[]=<>/,.`
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const randFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol, 
}
// add click event to generate button
generateEl.addEventListener('click', () =>{
    length = +lengthEl.value;

    hasUpper = uppercaseEl.checked
    hasLower = lowercaseEl.checked
    hasNumber = numbersEl.checked
    hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
})
// create the generate password function

function generatePassword(lower, upper, number, symbol, length){
    // initialise the generated password
    const generatedPassword = ''

    // get the count
    const typeCount = upper + lower + number + symbol
    // filter the checked
    const typeArr = [{upper}, {lower}, {number}, {symbol}].filter((item) => 
         Object.values(item)[0]
    )

    // check if any of the boxes are checked
    if(typeCount === 0){
        return ''
    }
    // loop through each to return random function

    for(i = 0; i < length; i+=typeCount){
        typeArr.forEach((type) =>{
            const funcName = Object.keys(type)[0]
            generatedPassword+= randFunc[funcName]()
        })

    }
    const finalPassword = generatedPassword.slice(0, length).split('').sort(() => Math.random() - 0.5).join('')

    return finalPassword

    for(let i = 0; i < 
    }
}
// create the clipboard function
clipboardEl.addEventListener('click', () =>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innertext

    if(!password){
        return ''
    }

    textarea = password.value
    document.body.appendChild = textarea
    textarea.select()
    document.execCommand('copy')
    document.alert('copied to clipboard')
    textarea.remove()
})