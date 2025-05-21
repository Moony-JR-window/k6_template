import Papa from 'papaparse';

export function parseCSV(raw) {
  const parsed = Papa.parse(raw, {
    header: true,
    skipEmptyLines: true,
  });
  return parsed.data;
}
