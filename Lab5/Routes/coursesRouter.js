const express = require("express");
const CourseController = require("../Controllers/coursesController");
let router = express.Router();

router.get("/",CourseController.getAllcourses);

router.post("/add",CourseController.addNewCourse);

router.delete("/:id",CourseController.deleteCourseByID);


module.exports = router;