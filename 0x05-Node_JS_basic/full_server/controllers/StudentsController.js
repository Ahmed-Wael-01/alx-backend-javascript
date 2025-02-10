import readDatabase from '../utils';

class StudentsController{
  static getAllStudents(request, response){
    const path = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(path).then((studentGroups) => {
      let page = 'This is the list of our students';
      const comp = (a, b) => {
        if (a[0].toLowerCase() < b[0].toLowerCase()) {
	  return -1;
	}
        if (a[0].toLowerCase() < b[0].toLowerCase()) {
	  return 1;
	}
        return 0;
      };

      for (const [field, group] of Object.entries(studentGroups).sort(comp)) {
        page = page + `\nNumber of students in ${field}: ${group.length}. `;
        page = page + `List: `;
        page = page + group.map((student) => student.firstname).join(', ')
      }
      response.status(200).send(page);
    }).catch((err) => {
      response.status(500)
	      .send(err instanceof Error ? err.message : err.toString())
    });
    
  }

  static getAllStudentsByMajor(request, response){
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (major != 'CS' && major != 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    realDatabase(path).then((studentGroups) => {
      if (Object.keys(studentGroups).includes(major)) {
        const group = studentGroups[major];
        const text = `List: ${group.map((student) => student.firstname).join(', ')}`;
      }
      else {
        const text = '';
      }
      response.status(200).send(text);
    }).catvh((err) => {
      response.status(500)
              .send(err instanceof Error ? err.message : err.toString());
    })
  }
}

module.exports = StudentsController;
