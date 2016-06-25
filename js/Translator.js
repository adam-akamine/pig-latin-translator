var translate = {
  translateToPigLatin: translateToPigLatin
};

module.exports = translate;
var util = require('util')

function translateToPigLatin(normalWord) {
  var input = normalWord.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelFirst = false;
  var translated;
  var consonantsRemoved = "";
  var remainingWord = "";
  var vowelFound = false;

  // Error checking
  // check for string type
  if(typeof input != 'string') {
    throw new TypeError("Not a valid string");
  }
  // check for empty string
  else if(input === "") {
    throw new Errror("String value cannot be empty.");
  }
  // end of Error checking

  // check for vowel-first word
  for(var i = 0; i < vowels.length; i++) {
    if(input.substring(0, 1) === vowels[i]) {
      vowelFirst = true;
    }
  }

  if(vowelFirst) {
    translated = input + "ay";
  }
  else {
    for(var j = 0; j < input.length && vowelFound === false; j++) {
      consonantsRemoved += input.charAt(j);
      for(var k = 0; k < vowels.length; k++) {
        if(input.charAt(j) === vowels[k]) {
          vowelFound = true;
          remainingWord = input.substring(j);
          consonantsRemoved = consonantsRemoved.substring(0, consonantsRemoved.length - 1);
          console.log("remainingWord: " + remainingWord);
          console.log("consonantsRemoved: " + consonantsRemoved);
          break;
        }
      }
    }
    translated = remainingWord + "-" + consonantsRemoved + "ay";
  }
  return translated;
}