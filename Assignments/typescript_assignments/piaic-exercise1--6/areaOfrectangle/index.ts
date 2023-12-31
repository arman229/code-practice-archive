const inputElementLength: HTMLInputElement | null = document.getElementById('lengthOfReactangle') as HTMLInputElement;
const inputElementWidth: HTMLInputElement | null = document.getElementById('widhtOfReactangle') as HTMLInputElement;
const calculateButton: HTMLElement | null = document.getElementById('calculateButton') as HTMLElement;
calculateButton.addEventListener('click', function() {
    const inputValueLength: number = parseFloat(inputElementLength.value);
    const inputValueWidth: number = parseFloat(inputElementWidth.value);
    if(!isNaN(inputValueLength) && !isNaN(inputValueWidth) ) {
        var area:number=inputValueLength * inputValueWidth;
        alert(`The area of the rectangle is: ${area}m²`) 
      
    }
    else{
        alert(`Please enter a input value`  )
    }
});  
 