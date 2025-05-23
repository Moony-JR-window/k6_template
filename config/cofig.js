
import { parseCSV } from '../build/csv-loader.js';
import { SharedArray } from 'k6/data';

export const config = {
  baseUrl: 'https://test.k6.io',
  acc: open('../data/acc.csv'), // Parsed structured data
  wingUrl:'https://gwtest.wingmoney.com:4447/WingPayGW'
};

// const paymentData = new SharedArray('acc_data', () => parseCSV(open('../data/acc.csv')));

export async function callCvsfile(paymentFile) {
  const paymentData = new SharedArray('acc_data', () => parseCSV(paymentFile));
  console.log("==================", paymentData);
  let data = paymentData[__VU % paymentData.length];
  console.log(data);
  
  return data;
}
