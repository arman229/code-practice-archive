const inputElementLength: HTMLInputElement | null = document.getElementById('lengthOfCube') as HTMLInputElement;
const inputElementWidth: HTMLInputElement | null = document.getElementById('widthOfCube') as HTMLInputElement;
const inputElementHeight: HTMLInputElement | null = document.getElementById('heightOfCube') as HTMLInputElement;
const calculateButton: HTMLElement | null = document.getElementById('calculateButton') as HTMLInputElement;
calculateButton.addEventListener('click', function() {
    const inputValueLength: number = parseFloat(inputElementLength.value);
    const inputValueWidth: number = parseFloat(inputElementWidth.value);
    const inputValueHeight: number = parseFloat(inputElementHeight.value);
    if(!isNaN(inputValueLength) && !isNaN(inputValueWidth) && !isNaN(inputValueHeight) ) {
        var Volume:number=inputValueLength * inputValueWidth * inputValueHeight;
        alert(`Volume of the Cube is: ${Volume}m³`) 
        console.log(`${Volume}`)
    }
    else{
        alert(`Please enter a input value`  )
    }
});  
 