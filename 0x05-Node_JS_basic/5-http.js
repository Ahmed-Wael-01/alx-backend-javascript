const http = require('http');
const fs = require('fs');

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPropNames.map(
          (propName, idx) => [propName, studentPropValues[idx]],
        );
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }
      const totalStudents = Object.values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      let rtrn;
      rtrn = `Number of students: ${totalStudents}\n`;
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        rtrn += `Number of students in ${field}: ${group.length}. List: ${studentNames}\n`;
      }
      resolve(rtrn.slice(0, -1));
    }
  });
});

const port = 1245;
const app = http.createServer((req, res) => {
  switch (req.url) {
    case '/students':
      countStudents(process.argv[2])
        .then((txt) => {
          res.write('This is the list of our students\n');
          res.write(txt);
          res.end();
        });
      break;
    default:
      res.end('Hello Holberton School!');
  }
}).listen(port);

module.exports = app;
