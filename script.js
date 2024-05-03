// declare variables
const button1 = document.querySelector("#check-btn")
const result = document.querySelector("#result")
const nothing = ""


// Palindrome logic click button function

const logInput = () => {

    const textInput = document.getElementById("textInput").value;
    


    if (textInput === nothing ) {
        result.textContent = "Please Input a value.";
        
    }

    else {

    const cleanString = textInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // Remove all non-alphabetic and non-numeric characters and convert to lowercase
  

    const initialNoSpace = cleanString.split(" ").join(""); // Remove spaces
    const initialNoSpacer = initialNoSpace.split("").reverse().join(""); // Reverse the string


    if (initialNoSpace === initialNoSpacer) {

        result.textContent = `"${textInput}" is a palindrome`


    }

    else { result.innerHTML = `Sorry! "${textInput}" is not a palindrome.<br>Please Try again!`} 





    
}}

// button function click and Enter Key


button1.addEventListener("click", logInput)

textInput.addEventListener("keypress", (hello) =>{
if (hello.key === "Enter") {
    logInput()
} 
})


button1.addEventListener("mouseover", () =>
{ event.target.style.backgroundColor = "#add8e6"})

button1.addEventListener("mouseout", () =>
{event.target.style.backgroundColor = ""})


