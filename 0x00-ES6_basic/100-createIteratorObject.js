export default function createIteratorObject(report) {
  const arr = [];
  const keys = Object.keys(report.allEmployees);
  for (const name of keys) {
    arr.push(...report.allEmployees[name]);
  }
  return arr;
}
