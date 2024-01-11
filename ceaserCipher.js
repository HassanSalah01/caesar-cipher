const arr = ["a", "b", "c", "d", "e", "f", "g"];

const getAsciCode = (char) => {
  return char.charCodeAt(0);
};
const s = (char)=>{
  const getAsciCode = getAsciCode();
  if(IsAlphaChar(getAsciCode) && (isLowerCase(getAsciCode))&&){

  }
}
console.log(swap("a"));
const main=(word)=>{

}
const IsAlphaChar = (char) => {
  return (char >= 65 && char <= 90) || (char >= 97 && char <= 122);
};
const isLowerCase = (char) => {
  return char.toLowerCase() == char;
};
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
