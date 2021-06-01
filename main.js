// Function to reset the input box when the reset button is pushed
// it also resets the output paragraph

function resetFunction(){
    const empty = document.getElementById("input-text").value = "" ;
    document.getElementById("output-images").innerHTML ="";
}

// Function that takes the user input from the input text box field

function palindromeFunction(){
    const userInput = document.getElementById("input-text").value;
    const alphaNumeric = userInput.toLowerCase().match(/[a-z0-9]/g);
    const outPut = (alphaNumeric.join("") === alphaNumeric.reverse().join("")) 
    ? document.getElementById("output-images").innerHTML = `${alphaNumeric.join("")} is a palindrome` : document.getElementById("output-images").innerHTML = `${userInput} is not a palindrome`;
    console.log(outPut);
}
