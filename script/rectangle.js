// console.log('conected rectangle')

function CalculaterectangleArea() {
    // console.log('conected onclick')
    // get rectangle lenght value
    const RectangleLength = document.getElementById('rectangle-len');
    // console.log(RectangleInput)
    const RectangleText = RectangleLength.value;
    // console.log(RectangleText)
    const length = parseFloat(RectangleText);
    console.log(length)



    // get rectangle width value
    const RectangleWidth = document.getElementById('rectangle-wid')
    // console.log(RectangleWidth)
    const RectangleTextWid = RectangleWidth.value
    // console.log(RectangleTextWid)
    const width = parseFloat(RectangleTextWid)
    console.log(width)



    // calculate rectangle area
    const Area = length * width;
    console.log(Area)



}