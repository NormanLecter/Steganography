function bitsToEncrpyt(textToEncrpyt){
    let bitsToEncrypt = "";
    for(let i = 0; i < textToEncrpyt.length; i++){
        if((textToEncrpyt[i].charCodeAt(0).toString(2)).length < 7 ){
            bitsToEncrypt += '0';
            bitsToEncrypt += textToEncrpyt[i].charCodeAt(0).toString(2);   
        }
        else{
            bitsToEncrypt += textToEncrpyt[i].charCodeAt(0).toString(2);
        }
    }
    return bitsToEncrypt;
}

module.exports = {bitsToEncrpyt};