const arr = ["a", "b", "c", "d", "e", "f", "g"];

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
console.log(AsciToChar(122));
const s = (char) => {
  const getAsci = getAsciCode(char);
  if (IsAlphaChar(getAsci)) {
    console.log(getAsci);
    const newCharAsciCode = swap(getAsciCode(char.toLowerCase()));
    // return newCharAsciCode;
    return isLowerCase(char) ? newCharAsciCode : newCharAsciCode.toUperCase();
  } else {
    return char;
  }
};
// console.log(s("w"));
// console.log(s("x"));
// console.log(s("y"));
// console.log(s("z"));
// console.log(s("2"));
const main = (word) => {};

const charMainType = (char) => {
  if (isLowerCase(char)) {
    return char;
  } else {
    return char.toUperCase();
  }
};

// const alpha = "A";
// console.log(alpha.charCodeAt(0));
// const alphaLength = alpha.length - 4;

// console.log((8 % alpha.length) + 4);

// for (let i = 65; i < 123; i++) {
//   console.log(`i : ${i},Value = ${IsAlphaChar(i)}`);
// }
// const fs = require("fs");
// let data ;
// try {
//     data = fs.readFileSync("./file.txt", "utf-8");
//   console.log(data.length);
// } catch (err) {
//   console.error(err); // Handle any errors
// }
// console.log(data);
