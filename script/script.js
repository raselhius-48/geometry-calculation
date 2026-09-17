console.log('hello i am conected')

// * objective : get base, height of a triangle . calculate the area by using the provided formula . and than display the area. 

// * step -1 : get base value of the traiangle 
// * step -2: added an id in the base input field 
// * step -3: user getElementById to access the input field
// * step -4 : get value from the input field . (value is string now)
// * step -5: convert the value to a number .use persefloat 




function CalculatetriangleArea() {
    // traiangle base 
    const TriangleInput = document.getElementById('tariangle-input')
    const tariangleAreaFiled = TriangleInput.value
    const tariangleBase = parseFloat(tariangleAreaFiled)
    console.log(tariangleBase)
    console.log('buttom conected')

    // get triangle height value
    const traiangle = document.getElementById('height-input')
    const traiangleValue = traiangle.value
    const height = parseFloat(traiangleValue)
    console.log(height)
}