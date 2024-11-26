export default function cleanSet(set, startString) {
  const candidates = [];

  if (startString === '') {
    return '';
  }
  set.forEach((elm) => {
    if (elm.startsWith(startString)) {
      candidates.push(elm.substring(startString.length));
    }
  });
  return candidates.join('-');
}
