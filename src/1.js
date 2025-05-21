import http from 'k6/http';
import { check } from 'k6';
import * as encrypted from '../build/cryptoEs.js';
import { config, parseCSV } from '../config/cofig.js';

export default function () {
    const res = http.get(config.baseUrl);
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}
let text = encrypted.Encrypted("Hello", "Hello")
  let  vuIndex = parseCSV(config.payment)
  if (vuIndex[0] < config.payment.length) {
    const userLogin = config.payment[vuIndex].LOGIN_ID2;
    console.log(userLogin);
    
  }
console.log("================================ text", text)
