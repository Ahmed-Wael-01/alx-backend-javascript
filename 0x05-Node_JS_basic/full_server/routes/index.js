import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const express = require("express");
const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', studentsController.getAllStudents);
router.get('/students/:major', studentsController.getAllStudentsByMajor);

module.exports = router;
