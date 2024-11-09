export default function guardrail(mathFunction) {
  const arr = [];
  try {
    arr.push(mathFunction());
  } catch (err) {
    arr.push(String(err));
  } finally {
    arr.push('Guardrail was processed');
  }
  return arr;
}
