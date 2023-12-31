const inputElement: HTMLInputElement | null = document.getElementById('numberinput') as HTMLInputElement;

const calculateButton: HTMLElement | null = document.getElementById('calculateButton') as HTMLInputElement;
calculateButton.addEventListener('click', function() {
    const inputValue: number = parseFloat(inputElement.value);
 
    if (isNaN(inputValue)) {
        alert(`Please enter a valid input value`);
    } else if (inputValue % 2 === 0) {
        alert(`${inputValue} is an Even Number`);
    } else  {
        alert(`${inputValue} is an Odd Number`);
    }
    
});  
 
 