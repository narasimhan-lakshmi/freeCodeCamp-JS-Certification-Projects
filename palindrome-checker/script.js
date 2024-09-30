const input = document.getElementById("text-input"); 
const button = document.getElementById("check-btn"); 
const result = document.getElementById("result"); 

button.addEventListener("click", function() {
    const userInput = input.value.trim(); // Get the input and trim whitespace
    
    if (userInput === '') {
        alert("Please input a value"); //  alert message
    } else {
        checkPalindrome(userInput);
    }
});

function checkPalindrome(str) {
    // convert to lowercase and remove non-alphanumeric characters
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if the normalized string is the same forwards and backwards
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    if (normalizedStr === reversedStr) {
        result.textContent = `${str} is a palindrome`; 
    } else {
        result.textContent = `${str} is not a palindrome`; 
    }
}
