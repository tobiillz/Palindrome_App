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
    
    if (userInput.length > 1){
        const outPut = (alphaNumeric.join("") === alphaNumeric.reverse().join("")) 
        ? document.getElementById("output-images").innerHTML = `${alphaNumeric.join("")} is a palindrome` : document.getElementById("output-images").innerHTML = `${userInput} is not a palindrome`;
    }else if (userInput.length == 1){
        const outPut1 = document.getElementById("output-images").innerHTML = 'Please enter more than one character !!!';   
    }else{
        const outPut1 = document.getElementById("output-images").innerHTML =  `That's an empty text field.`;
        
    }
   
    console.log(outPut);
}
