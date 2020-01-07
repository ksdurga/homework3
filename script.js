var generateButton = document.querySelector("#generate");
var numbers = document.getElementById("numbers");
var lowerCase = document.getElementById("lowerCase");
var upperCase = document.getElementById("upperCase");
var specialChar = document.getElementById("specialChars");
var passwordDisplay = document.getElementById("passwordDisplay");
var passLength = document.getElementById("length")
var inputLength=0;

// lengthInput(passLength);

var charset = {
   lowerCase: {
      checked: false,
      charset: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   },
   upperCase: {
      checked: false,
      charset: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
   },
   numbers: {
      checked: false,
      charset: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
   },
   specialChar: {
      checked: false,
      charset: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]","^", "_", "`", "{", "|", "}", "~", "\\"]
   }
}

// if (numbers.checked == true) {
//    getChars();
// }
// if (upperCase.checked == true) {
//    getChars();
// }
// if (lowerCase.checked == true) {
//    getChars();
// }
// if (specialChars.checked == true) {
//    getChars();
// }


// password length set
function lengthInput(num) {
   if (num >= 8 && num <= 128) {
      console.log(num)
      return num
   }
   else {
   alert("Please enter a number between 8 and 128")
   return null
   }
}

//create array of all enabled charsets
function getChars () {
   var result = [];
   for (key in charset) {
      if (numbers.checked == true) {
         result = result.concat(charset[key].charset)
      }
      if (upperCase.checked == true) {
         result = result.concat(charset[key].charset)
      }
      if (lowerCase.checked == true) {
         result = result.concat(charset[key].charset)
      }
      if (specialChar.checked == true) {
         result = result.concat(charset[key].charset)
      }
   }
   return result
};

//chooses random integer inside length of charset array
function randomInt(charsetLength) {
	var x = Math.floor(Math.random() * charsetLength);
	if (x < 0 || x >= charsetLength) {
      alert ("Random integer not in index");
      return null;
   }   
	return x;
};


//chooses random char from chaset array for each spot in password
function generatePassword() {
   var result = "";
   var charArray=getChars();
   //if user doesn't choose any charset options
   if (charArray.length) {
       for (var i = 0; i < passLength; i++){
      result += charArray[randomInt(charArray.length)];
      }
      return result
   }
   else {
      alert("Select a character set");
      return null;
   }
}

// generate password and display in box
// passwordFinal = generatePassword();
// passwordDisplay.placeholder = passwordFinal;

function doCopy() {
   navigator.clipboard.writeText(generatedPassword);
}

generateButton.addEventListener("click", function(e){
   e.preventDefault();
   inputLength = passLength.value;
   lengthInput(inputLength);
   console.log(inputLength);

   generatePassword();
});

