const Encoding = require('./encoding');
const Decoding = require('./decoding');
const BitsToEncrypt = require('./bitsToEncrypt');

let encoding = Encoding.encode;
let decoding = Decoding.decode;
let bitsToEncrpyt = BitsToEncrypt.bitsToEncrpyt;

// TIP : More than 4 is strongly affects the image
let howManyBitsUse = 2;

// TIP : max. length of text to encoding = 500 x 400 (landscape.bmp size) x 1 = 200 000 / 8 (bits for 1 sign) = 25 000 characters
// todo: resolve problem with spacem number and part of characters - saved on 6 bits
let textToEncrypt = "1234567890";

// path to the file where the message will be saved 
let pathImageToEncrypt = "landscape.bmp";

// text/numbers/signs convert to bits
let bitsFromText = bitsToEncrpyt(textToEncrypt);

// encrpyt image - save message on the picture; returns path to this image
let pathImageToDecrypt = encoding(howManyBitsUse, pathImageToEncrypt, bitsFromText);

// decrypt image - read message hidden on the picture; returns the read message 
let decodeMessage = decoding(howManyBitsUse, bitsFromText.length, pathImageToDecrypt);

// writing decoded message in the console
console.log(decodeMessage);