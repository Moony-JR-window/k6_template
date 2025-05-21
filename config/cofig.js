

export function parseCSV(data) {
  const rows = data.trim().split('\n'); // Split by line
  const headers = rows.shift().split(','); // Extract column headers

  return rows.map(row => {
    const values = row.split(',');
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {});
  });
}

export const config = {
  baseUrl: 'https://test.k6.io',
  payment: open('../data/payment_data.csv'), // Parsed structured data
};
