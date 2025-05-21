
import { parseCSV } from '../build/csv-loader.js';
import { SharedArray } from 'k6/data';

export const config = {
  baseUrl: 'https://test.k6.io',
  payment: open('../data/payment_data.csv'), // Parsed structured data
};



export function callCvsfile(fileName) {
  let paymentData = new SharedArray('payment_data', () => parseCSV(fileName));

  let data = paymentData[__VU % paymentData.length];
  return data;
}
