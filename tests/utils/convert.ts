const convert = (from, to) => (str) => Buffer.from(str, from).toString(to);

export const utf8ToHex = convert("utf8", "hex");

const genRandonHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

export const parseHex = (arg) => {
  var hex = arg.toString();
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
};
