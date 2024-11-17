export default function updateStudentGradeByCity(stdn, city, grads) {
  return stdn.filter((x) => x.location === city).map((student) => {
    for (const grade of grads) {
      if (student.id === grade.studentId) {
        student.grade = grade.grade; // eslint-disable-line no-param-reassign
      }
    }
    if (student.grade === undefined) {
      student.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return student;
  });
}
