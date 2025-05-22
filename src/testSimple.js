import http from 'k6/http';
import { check } from 'k6';
import * as encrypted from '../build/cryptoEs.js';
import { config,callCvsfile} from '../config/cofig.js';


export default function () {
    const res = http.get(config.baseUrl);
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}

const phoneNumber = encrypted.encrypt("2008");
const DecryptPhoneNumber = encrypted.decrypt(phoneNumber);

console.log(phoneNumber,"======Encrypt ");
console.log(DecryptPhoneNumber," =======Decryptiono");


const user = callCvsfile(config.payment)
console.log(`Using user LOGIN_ID2: ${user.LOGIN_ID2}`);
console.log(`Using user LOGIN_ID3: ${user.LOGIN_ID3}`);

