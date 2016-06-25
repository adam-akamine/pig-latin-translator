var translate = {
  translateToPigLatin: translateToPigLatin
};

module.exports = translate;
var util = require('util');

function translateToPigLatin(normalWord) {
  var input = normalWord.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelFirst = false;
  var translated = "";
  var consonantsRemoved = "";
  var remainingWord = "";
  var vowelFound = false;
  var strArray = input.split(" ");
  console.log(strArray);
  var translatedArray = [];
  var word;
  var translatedWord;
  var wordCount = 0;
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
  function checkVowel (word) {
    for(var i = 0; i < vowels.length; i++) {
      if(word[0] === vowels[i]) {
        vowelFirst = true;
      }
    }
    return vowelFirst;
  }


for(var i = 0; i < strArray.length; i++) {
  word = strArray[i];
  if(checkVowel(word)) {
    console.log("Found vowel-first word: " + word);
    translatedWord = word + "-ay";
    vowelFirst = false;
  }
  else {
    for(var j = 0; j < word.length && vowelFound === false; j++) {
      consonantsRemoved += word[j];
      for(var k = 0; k < vowels.length; k++) {
        if(word[j] === vowels[k]) {
          vowelFound = true;
          remainingWord = word.substring(j);
          consonantsRemoved = consonantsRemoved.substring(0, consonantsRemoved.length - 1);
          console.log("remainingWord: " + remainingWord);
          console.log("consonantsRemoved: " + consonantsRemoved);
          break;
        }
      }
    }
    vowelFound = false;
    // console.log("remainingWord: " + remainingWord);
    translatedWord = remainingWord + "-" + consonantsRemoved + "ay";
    consonantsRemoved = "";
    remainingWord = "";
  }
  translated = translated + " " + translatedWord;
  translatedWord = "";
}
translated = translated.substring(1);
return translated;
}