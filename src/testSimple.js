import http from 'k6/http';
import { check } from 'k6';
import * as encrypted from '../build/cryptoEs.js';
import { config} from '../config/cofig.js';
import { parseCSV } from '../build/csv-loader.js';
import { SharedArray } from 'k6/data';

export default function () {
    const res = http.get(config.baseUrl);
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}

const text = encrypted.Encrypted("Hello", "Hello");

let paymentData =  new SharedArray('payment_data', () => parseCSV(config.payment));

let user = paymentData[__VU % paymentData.length];
console.log(`Using user LOGIN_ID2: ${user.LOGIN_ID2}`);
console.log(`Using user LOGIN_ID3: ${user.LOGIN_ID3}`);

