import CryptoJS from "crypto-js";

export function Encrypted1 (value,value2){
const encrypted = CryptoJS.AES.encrypt(value, value2).toString();
console.log("Encrypted:===========",value+value2, encrypted);

}
