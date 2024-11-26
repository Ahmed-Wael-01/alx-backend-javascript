export default function cleanSet(set, startString = '') {
  const candidates = [];

  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  set.forEach((elm) => {
    if (elm && elm.startsWith(startString)) {
      candidates.push(elm.substring(startString.length));
    }
  });
  return candidates.join('-');
}
