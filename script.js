alert("You're here to create a new password!");

var passLength=prompt("Please enter your desired password length (must be between 8 and 128 characters).");

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
lengthInput(passLength);

var charset = {
   lowerCase: {
      enabled: false,
      charset: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   },
   upperCase: {
      enabled: false,
      charset: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
   },
   numbers: {
      enabled: false,
      charset: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
   },
   specialChar: {
      enabled: false,
      charset: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]","^", "_", "`", "{", "|", "}", "~", "\\"]
   }
}

function getChars () {
   var result = [];
   for (key in charset) {
      if (charset[key].enabled) {
         result = result.concat(charset[key].charset)
      }
   }
   return result
}

function randomInt(charsetLength) {
	var x = Math.floor(Math.random() * charsetLength);
	if (x < 0 || x >= charsetLength) {
      alert ("Random integer not in index");
      return null;
   }   
	return x;
}

function generatePassword() {
   var result = "";
   var charArray = getChars ();
   if (charArray.length == 0) {
      alert("Select a character set");
      return null;
   }
   for (var i = 0; i < passLength; i++){
    result += charArray[randomInt(charArray.length)];
   }
   return result
}

console.log(generatePassword())