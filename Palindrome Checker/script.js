const checkButton = document.getElementById("check-btn");


checkButton.onclick = testPalindrome;

function testPalindrome() {
    const textInput = document.getElementById("text-input").value;
    const regex = /[^0-9a-z]/gi;
    const cleanInput = textInput.replace(regex, '');
    const cleanInputLower = cleanInput.toLowerCase();
    const reversedInput = cleanInputLower.split("").reverse().join("");
    const result = document.getElementById("result")

    if (textInput.length === 0) {
        alert("Please input a value");
    } 

    if (cleanInputLower === reversedInput) {
        result.classList.remove("hidden")
        result.innerHTML = `<p class="user-input"><strong>${textInput}</strong> is a palindrome</p>`    
    } else {
        result.classList.remove("hidden")
        result.innerHTML = `<p class="user-input"><strong>${textInput}</strong> is not a palindrome</p>`
    }
}