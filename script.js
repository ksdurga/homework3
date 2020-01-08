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
      charset: ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]","^", "_", "`", "{", "|", "}", "~"]
   }
};

//grabs user input, verifies length requirement
generateButton.addEventListener("click", function(e){
   e.preventDefault();
   //grabs form value for password length
   inputLength = passLength.value;
   //passes length through function to verify meeets requirements
   lengthInput(inputLength);
   console.log(inputLength);
   passwordDisplay.placeholder=generatePassword();
});


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

//create array of all enabled charset

var result = [];

var numEnabled = $("#numbers").on("click", function(){
   // var result = [];
   result += result.concat(charset.numbers.charset);
});
var upperEnabled = $("#upperCase").on("click", function(){
   // var result = [];
   result += result.concat(charset.upperCase.charset);
});
var lowerEnabled = $("#lowerCase").on("click", function(){
   // var result = [];
   result += result.concat(charset.lowerCase.charset);
});
var specCharEnabled = $("#specialChars").on("click", function(){
   // var result = [];
   result += result.concat(charset.specialChar.charset);
});


function getChars() {
   // var result = [];
   result += result.concat(numEnabled, upperEnabled, lowerEnabled, specCharEnabled);
   return result;
};

// function getChars () {
//    var result = [];
//    for (key in charset) {
//       // if (numbers.checked == true) {
//       //    result += result.concat(charset[key].charset);
//       //    console.log(result);
//       // }
//       // if (upperCase.checked == true) {
//       //    result += result.concat(charset[key].charset);
//       //    console.log(result);
//       // }
//       // if (lowerCase.checked == true) {
//       //    result += result.concat(charset[key].charset);
//       //    console.log(result);
//       // }
//       // if (specialChar.checked == true) {
//       //    result += result.concat(charset[key].charset);
//       //    console.log(result);
//       // }
      
//    }
//    return result
// };

// function getChars () {
//    var result = [];
//    for (key in charset) {
//       if (numbers.checked == true) {
//          charset[key].checked == true;
//       }
//       if (lowerCase.checked == true) {
//          charset[key].checked == true;
//       }
//       if (upperCase.checked == true) {
//          charset[key].checked == true;
//       }
//       if (specialChar.checked == true) {
//          charset[key].checked == true;
//       }
//       if (charset[key].checked == true) {
//          result += result.concat(charset[key].charset);
//          console.log(result);
//       }
//    }
//    return result
// };

// function getChars () {
//    var result = [];
//    charset.key.charset.forEach(function(charsetType) {
//      let charset = charset[charsetType];
//      if(charset.checked) {
//        result = result.concat(charset.charset);
//      }
//    });
//    return result
// };

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
   var password = "";
   var charArray=getChars();
   //if user doesn't choose any charset options
   if (charArray.length) {
      for (var i = 0; i < passLength.value; i++){
      password += charArray[randomInt(charArray.length)];
      }
      console.log(password);
      return password;
      
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



