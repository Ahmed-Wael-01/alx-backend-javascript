export default function getStudentsByLocation(arr, city) {
  return arr.filter((x) => x.location === city);
}
