class CreaserCipher {
  constructor(data, inputFileName = null, outputFileName = null) {}
  isLowerCase = (char) => {
    return char.toLowerCase() == char;
  };

  asciToChar = (char) => {
    return String.fromCharCode(char);
  };

  encrypt = (char) => {
    getAsci = getAsciCode(char);
    if (IsAlphaChar(getAsci)) {
      newCharAsciCode = asciToChar(swap(getAsciCode(char.toLowerCase())));
      return isLowerCase(char)
        ? newCharAsciCode
        : newCharAsciCode.toUpperCase();
    } else {
      return char;
    }
  };
}
