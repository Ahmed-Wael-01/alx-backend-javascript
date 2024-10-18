export default function iterateThroughObject(reportWithIterator) {
  let report = '';
  for (const item of reportWithIterator) {
    report += `${item} | `;
  }
  return report.slice(0, -3);
}
