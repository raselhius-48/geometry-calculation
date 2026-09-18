// console.log('conected 6')


//  get rhombus value of d1 and d2
function calculateRhombusArea() {
    // console.log('button conected')
    const d1 = getInputvalueById('rhombus-d2')
    // console.log(d1)
    const d2 = getInputvalueById('rhombus-d1')

    //  calculation area 
    const rhombusArea = 0.5 * d1 * d2
    console.log('rhombusArea = ', rhombusArea)
}

function getInputvalueById(inputId) {
    const inputfiled = document.getElementById(inputId)
    const inputValue = inputfiled.value
    const inputparse = parseFloat(inputValue)
    return inputparse
}