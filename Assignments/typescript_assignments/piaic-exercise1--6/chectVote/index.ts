const inputElement: HTMLInputElement | null = document.getElementById('numberinput') as HTMLInputElement;
 
const calculateButton: HTMLElement | null = document.getElementById('calculateButton') as HTMLInputElement;
calculateButton.addEventListener('click', function() {
    const inputValue: number = parseFloat(inputElement.value);
 
 if (isNaN(inputValue)) {
    alert(`Please enter Your Age in Years`);
}
else if (inputValue >= 18) {
    alert(`welcome, You are eligible in this election`);
}
else   
    alert(`Sorry, You are not eligible in this election`);
 

}); 