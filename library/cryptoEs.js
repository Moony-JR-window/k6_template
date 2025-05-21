import CryptoJS from "crypto-js";

export function Encrypted(value, value2) {
    return CryptoJS.AES.encrypt(value, value2).toString();
}
