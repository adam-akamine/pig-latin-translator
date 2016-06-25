var chai = require('chai');
var expect = chai.expect;
var translator = require('./Translator');

describe('translator.translateToPigLatin()', function () {
  var word = "smash";
  it('should be a function', function () {
    expect(translator.translateToPigLatin).to.be.a('function');
  });

  it('input should be a non-empty string', function () {
    expect(word).to.be.a('string');
    expect(word).to.not.be.a("");
  });

  var translated = translator.translateToPigLatin(word);
  it('should translate input to Pig Latin', function () {
    expect(translated).to.equal("ash-smay");
  });

  // check for case-sensitive
  it('should accept and work with words with capital letters', function () {
    var word = "SMAsh";
    var translated = translator.translateToPigLatin(word);
    expect(translated).to.equal("ash-smay");
  });

  // check for phrase translation
});