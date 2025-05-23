import { parseCSV } from '../build/csv-loader.js';
import { SharedArray } from 'k6/data';

export const config = {
  baseUrl: 'https://test.k6.io',
  csvFiles: {
    accounts: '../data/acc.csv',
    payments: '../data/payments.csv',
    // users: '../data/users.csv'
    // Add more files as needed
  },
  wingUrl: 'https://gwtest.wingmoney.com:4447/WingPayGW'
};

const csvData = {};
Object.entries(config.csvFiles).forEach(([name, path]) => {
  csvData[name] = new SharedArray(`${name}_data`, () => {
    return parseCSV(open(path));
  });
});

// 3. Unified accessor function
export function callCvsfile(fileKey) {
  if (!csvData[fileKey]) {
    throw new Error(`Unknown file key: ${fileKey}. Available: ${Object.keys(csvData).join(', ')}`);
  }
  
  const data = csvData[fileKey][__VU % csvData[fileKey].length];
  console.log(`Using ${fileKey} data:`, data);
  return data;
}

