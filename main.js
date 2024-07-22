const formElement = document.querySelector('[data-form]');
const dayInput = document.querySelector('[data-dayInput]');
const monthInput = document.querySelector('[data-monthInput]');
const yearInput = document.querySelector('[data-yearInput]');
const dayOutput = document.querySelector('[data-dayOutput]')
const monthOutput = document.querySelector('[data-monthOutput]')
const yearOutput = document.querySelector('[data-yearOutput]')

formElement.addEventListener('submit', (event)=>{
    event.preventDefault()
    dayCalculations = 31 - dayInput.value
    monthCalculations = 12 - monthInput.value -6
    yearCalculations = 2024 - yearInput.value
    if(monthCalculations < 1){
        yearCalculations -- 
        monthCalculations +=12
    }
    if(monthCalculations == 12){
        yearCalculations ++ 
        monthCalculations -=12
    }
    if(monthInput.value == 2){
        dayCalculations = 27 - dayInput.value
    }
    if(monthInput.value == 4 || monthInput.value == 6 || monthInput.value == 8 || monthInput.value == 10){
        dayCalculations = 30 - dayInput.value
    }
    dayOutput.innerText = `${dayCalculations}`
    monthOutput.innerText = `${monthCalculations}`
    yearOutput.innerText = `${yearCalculations}`
});