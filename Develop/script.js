// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return password;
}
//var specialCharacters = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\","]","^","_","`","{","|","}","~","""]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


function generatePassword(){
  while ((characterLength === null) || (characterLength < 8) || (characterLength > 128) || (isNaN(characterLength))){
    var characterLength = window.prompt("How many characters would you like your password to contain?");
    if (characterLength === null){
      window.alert("Oops! Please click OK to begin again.")
    } else if(characterLength < 8){
        window.alert("Your password must be at least 8 characters long. Click OK to try again.")
    } else if (characterLength > 128){
        window.alert("Your password must be less than 128 characters long. Click OK to try again.")
    } else if (isNaN(characterLength)){
        window.alert("You must enter a numerical number. Click OK to try again.")
    } else break; 
  }

  while ((specialCharacters !== true) && (numbers !== true) && (lowercase !== true) && (uppercase !== true)){
    var specialCharacters = window.confirm("Click OK to include special characters and Cancel to not include.")
    if (specialCharacters === true){
      console.log("Great")
    } else (console.log ("Not Great"))

    var numbers = window.confirm("Click OK to include numbers and Cancel to not include.")
    if (numbers === true){
      console.log("Great")
    } else (console.log ("Not Great"))

    var lowercase = window.confirm("Click OK to include lowercase letters and Cancel to not include.")
    if (lowercase === true){
      console.log("Great")
    } else (console.log ("Not Great"))

    var uppercase = window.confirm("Click OK to include uppercase letters and Cancel to not include.")
    if (uppercase === true){
      console.log("Great")
    } else (console.log ("Not Great"))

    if ((specialCharacters !== true) && (numbers !== true) && (lowercase !== true) && (uppercase !== true)){
      window.alert("You must select at least one type of character to include in your password. Click OK to see selection options again.")
    }
  }


  
  
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
