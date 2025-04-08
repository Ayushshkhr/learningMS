import Course from '../models/Course ';

export const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

export const addCourse = async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.status(201).json(course);
};
