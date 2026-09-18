// console.log('conected 6')


//  get rhombus value of d1 and d2
function calculateRhombusArea() {
    console.log('button conected')
    const base1 = getInputvalueById('rhombus-d2')
    console.log(base1)
    console.log(getInputvalueById('rhombus-d1'))


}

function getInputvalueById(inputId) {
    const inputfiled = document.getElementById(inputId)
    const inputValue = inputfiled.value
    const inputparse = parseFloat(inputValue)
    return inputparse
}