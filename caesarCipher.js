function caesarCipher(string, shiftAmount) {
  const stringArray = string.split("");
  const shiftedStringArray = stringArray.map((character, index) => {
    let characterCode = string.charCodeAt(index);
    return charCodeLimitCheck(characterCode)
      ? String.fromCharCode(characterCodeWithWrap(characterCode, shiftAmount))
      : String.fromCharCode(characterCode);
  });
  return shiftedStringArray.join("");
}

function charCodeLimitCheck(charcode) {
  if (charcode >= 65 && charcode <= 90) return true;
  else if (charcode >= 97 && charcode <= 122) return true;
  else return false;
}

function characterCodeWithWrap(charcode, shift) {
  if (charcode <= 90 && charcode + shift > 90) return charcode + shift - 26;
  else if (charcode <= 122 && charcode + shift > 122)
    return charcode + shift - 26;
  else return charcode + shift;
}

caesarCipher("AaZz", 0);

module.exports = caesarCipher;
