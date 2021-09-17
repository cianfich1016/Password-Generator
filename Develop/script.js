// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return password;
}
var specialCharactersArray = [' ','!','#','$','%','&',',','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@',"\\",']','^','_','`','{','|','}','~','"'];
var numbersArray = ["0","1","2","3","4","5","6","7","8","9"]
var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var passwordArray = []


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
      
    }  
  }

  while ((specialCharacters !== true) && (numbers !== true) && (lowercase !== true) && (uppercase !== true)){
    var specialCharacters = window.confirm("Click OK to include special characters and Cancel to not include.");
    
    var numbers = window.confirm("Click OK to include numbers and Cancel to not include.");
    
    var lowercase = window.confirm("Click OK to include lowercase letters and Cancel to not include.");
    
    var uppercase = window.confirm("Click OK to include uppercase letters and Cancel to not include.");
    
    if ((specialCharacters !== true) && (numbers !== true) && (lowercase !== true) && (uppercase !== true)){
      window.alert("You must select at least one type of character to include in your password. Click OK to see selection options again.")
    }
  }

  characterLength = parseInt(characterLength);

  for(var i=0; i < characterLength; i++){
    if (specialCharacters === true){
      passwordArray.push(specialCharactersArray[Math.floor(Math.random()*specialCharactersArray.length)])
    }
    if (numbers === true){
      passwordArray.push(numbersArray[Math.floor(Math.random()*numbersArray.length)])
    } 
    if (lowercase === true){
      passwordArray.push(lowercaseArray[Math.floor(Math.random()*lowercaseArray.length)])
    } 
    if (uppercase === true){
      passwordArray.push(uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)])
    } 
  }
  return passwordArray.slice(0, characterLength).join("")
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
