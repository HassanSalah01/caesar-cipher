const getAsciCode = (char) => {
  return char.charCodeAt(0);
};

const IsAlphaChar = (char) => {
  return (char >= 65 && char <= 90) || (char >= 97 && char <= 122);
};

const swap = (charCode) => {
  if (charCode >= 97 && charCode < 119) {
    return charCode + 4;
  } else {
    return 97 + (4 - (123 - charCode));
  }
};

const isLowerCase = (char) => {
  return char.toLowerCase() == char;
};

const asciToChar = (char) => {
  return String.fromCharCode(char);
};

const encrypt = (char) => {
  const getAsci = getAsciCode(char);
  if (IsAlphaChar(getAsci)) {
    const newCharAsciCode = asciToChar(swap(getAsciCode(char.toLowerCase())));
    return isLowerCase(char) ? newCharAsciCode : newCharAsciCode.toUpperCase();
  } else {
    return char;
  }
};

module.exports = {
  encrypt,
};


