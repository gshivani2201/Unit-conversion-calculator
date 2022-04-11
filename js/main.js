// pseudo code
// take value from the span in the DOM
let digitEl = document.querySelector('#digit-el')
digitEl.addEventListener('input', conversion)
function conversion() {
    num = digitEl.innerText
    let feet = (num * 3.281).toFixed(3)
    let meter = (num / 3.281).toFixed(3)
    document.querySelector('#length').innerText = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`

    let gallon = (num / 3.785).toFixed(3)
    let ltr = (num * 3.785).toFixed(3)
    document.querySelector('#volume').innerText = `${num} liters = ${gallon} gallons | ${num} gallons = ${ltr} liters`

    let kg = (num / 2.205).toFixed(3)
    let pounds = (num * 2.205).toFixed(3) 
    document.querySelector('#mass').innerText = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kg} kilos`
}
// convert it into meters & feet
//1 meter = 3.281 feet
// show the value in the DOM
// convert it into liters & gallons
//1 gallon = 3.785ltr in the DOM
//show the value
//convert it into kilos & pounds
//1kg = 2.205pounds in the DOM
//show the value

