const Jimp = require('jimp');

function encode(howManyBitsUse, pathImageToEncrypt, bitsToEncrypt){
    let pathToTheEncodeImage = "encodeLandcape.bmp";

    // read image and create new encode image
    Jimp.read(pathImageToEncrypt).then( (image) => {
        console.log('image ' + pathImageToEncrypt + ' was read property.')
        let imageWidth = image.bitmap.width;
        let imageHeight = image.bitmap.height;

            // empty canvas which will be used to save image with encoded message
        let encodeLandscape = new Jimp(imageWidth, imageHeight, (err, image) => {
            if(err){
                console.log("Something goes wrong - create canvas encodeLandscape, error: " + err);
            }
            else{
                console.log("encodeLanscape (canvas) without text was create.");
            }
        });
        
        let indexOfSubstring = 0;
        let pixelColor;
        let colorToBinary;
        let lengthOfColorBinary;
        let binaryColorToHex;
        for(let i = 0; i < imageWidth; i++){
            for(let j = 0; j < imageHeight; j++){
                if(indexOfSubstring < bitsToEncrypt.length){
                    pixelColor = image.getPixelColor(i,j);
                    colorToBinary = pixelColor.toString(2);
                    lengthOfColorBinary = colorToBinary.length;
                    for(let h = 0; h < howManyBitsUse; h++){
                        colorToBinary[lengthOfColorBinary - h - 1] = bitsToEncrypt[indexOfSubstring];
                        indexOfSubstring++;
                    }
                    binaryColorToHex = parseInt((parseInt(colorToBinary,2)).toString(16).replace((/^#/, ''), 16));
                    encodeLandscape.setPixelColor(binaryColorToHex, i, j);
                }
                else{
                    encodeLandscape.setPixelColor(pixelColor, i, j);
                }
            }
        }

        encodeLandscape.write("encodeLandscape.bmp");
        }).catch((err => {
        console.log("Something goes wrong - read image " + pathImageToEncrypt + ", error : " + err);
    }));
    return pathToTheEncodeImage;
}

module.exports = {encode};