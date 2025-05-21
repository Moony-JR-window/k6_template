import http from 'k6/http';
import { check } from 'k6';
import * as encrypted from '../build/cryptoEs.js';
import { config } from '../config/cofig.js';

export default function () {
    const res = http.get(config.baseUrl);
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}
let text = encrypted.Encrypted("Hello", "Hello")
console.log("================================ text", text)
