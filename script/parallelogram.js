// console.log('conected parallelogram')

// function calculateParallelogram() {
//     // console.log('click conected')
//     const ParallelogramB = document.getElementById('Parallelogram-b')
//     // console.log(ParallelogramB)
//     const ParallelogramValue = ParallelogramB.value
//     // console.log(ParallelogramValue)
//     const B =parseFloat(ParallelogramValue)



// }

// get Parallelogram value of base and height
function calculateParallelogramArea() {
    const base = getInputValueById('Parallelogram-b')
    console.log(base)
    const width = getInputValueById('Parallelogram-wid')
    console.log(width)
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId)
    const InputValueText = inputField.value
    const inputValue = parseFloat(InputValueText)
    // console.log(inputValue)
    return inputValue
}