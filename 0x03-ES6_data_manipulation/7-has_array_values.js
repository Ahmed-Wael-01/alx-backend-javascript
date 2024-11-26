export default function hasValuesFromArray(st, arr) {
  return arr.every((elm) => st.has(elm));
}
