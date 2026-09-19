// console.log("conected Ellipse")

// console.log('conected Pentagon')



//  get ellipse value of a and b
function calculateElliposeArea() {
    // console.log('button conected')
    const p = getInputvalueById('Ellipse-a')
    // console.log(d1)
    const b = getInputvalueById('Ellipse-b')

    //  calculation area 
    const ellipseArea = 0.5 * 3.1416 * p * b
    console.log('ellipseArea = ', ellipseArea)

    setInnerTextById('Ellipse-Span', area)
}

function getInputvalueById(inputId) {
    const inputfiled = document.getElementById(inputId)
    const inputValue = inputfiled.value
    const inputparse = parseFloat(inputValue)
    return inputparse
}

// calculate area display show function
function setInnerTextById(elementId, area) {
    const EllipseSpan = document.getElementById(elementId)
    EllipseSpan.innerHTML = area
}