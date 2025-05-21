import { generateSummaryReport } from 'k6-html-reporter';

export function htmlReporter(data) {
    return generateSummaryReport(data);
}
