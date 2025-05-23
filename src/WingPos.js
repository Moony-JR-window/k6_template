import http from 'k6/http';
import { check } from 'k6';
import * as encrypted from '../build/cryptoEs.js';
import { config, callCvsfile } from '../config/cofig.js';


export default function AccessToken() {
    let csv = callCvsfile('accounts');
    console.log("========== this is round fun", csv.round);
    let phoneNumber = encrypted.encrypt(csv.acc)
    const data = {
        username: csv.acc,
        password: phoneNumber,
        client_id: 'mobileapps_test',
        client_secret: '202122232425262728292a2b2c2d2e2f',
        device_id: 'd473f4aa-ebca-4106-a659-8deb4a7216f8',
        grant_type: 'password',
        application_id: 'WINGPAY',
    };
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    console.log(data);
    
    const res = http.post(config.wingUrl + "/oauth/token", data, { headers });
    let responseBody = JSON.parse(res.body);
    console.log('Response body:', responseBody.access_token);
}
