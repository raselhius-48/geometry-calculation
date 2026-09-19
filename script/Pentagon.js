// console.log('conected Pentagon')

// Pentagon get funtion

//  get Pentagon value of p and b
function calculatePentagonArea() {
    // console.log('button conected')
    const p = getInputvalueById('Pentagon-p')
    // console.log(d1)
    const b = getInputvalueById('Pentagon-b')

    //  calculation area 
    const PentagonArea = 0.5 * p * b;
    console.log('PentagonArea = ', PentagonArea)

    setInnerTextById('Pentagon-Span', area)
}


function getInputvalueById(inputId) {
    const inputfiled = document.getElementById(inputId)
    const inputValue = inputfiled.value
    const inputparse = parseFloat(inputValue)
    return inputparse
}

// calculate area display show function

function setInnerTextById(elementId, area) {
    const PentagonSpan = document.getElementById(elementId)
    PentagonSpan.innerHTML = area
}