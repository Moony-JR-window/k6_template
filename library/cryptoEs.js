import CryptoJS from 'crypto-js';

const AES_KEY = "HG58YZ3CR9";
export function encrypt(text) {
    const key = CryptoJS.SHA256(AES_KEY);
    const iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');

    const encrypted = CryptoJS.AES.encrypt(text, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    return encrypted.toString(); // base64 format
}

export function decrypt(cipherText) {
    const key = CryptoJS.SHA256(AES_KEY);
    const iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');

    const decrypted = CryptoJS.AES.decrypt(cipherText, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
}
