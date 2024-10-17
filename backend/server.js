

const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3030;


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Middleware to parse JSON data
app.use(express.json());

// Serve static images
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Load data from data.json
const dataFilePath = path.join(__dirname, "data.json");
let data = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

// Get all courses or filter by category
app.get("/courses", (req, res) => {
  const categoryId = req.query.cat;
  if (categoryId) {
    const filteredCourses = data.courses.filter(
      (course) => course.category === parseInt(categoryId),
    );
    res.json(filteredCourses);
  } else {
    res.json(data.courses);
  }
});

// Get a single course by id
app.get("/course/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = data.courses.find((course) => course.id === courseId);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

// Get favorite courses
app.get("/favs", (req, res) => {
  const favoriteCourses = data.courses.filter((course) => course.isFavorite);
  res.json(favoriteCourses);
});

// Get all instructors
app.get("/instructors", (req, res) => {
  res.json(data.instructors);
});

// Get a single instructor by id
app.get("/instructor/:id", (req, res) => {
  const instructorId = parseInt(req.params.id);
  const instructor = data.instructors.find(
    (instr) => instr.id === instructorId,
  );
  if (instructor) {
    res.json(instructor);
  } else {
    res.status(404).json({ message: "Instructor not found" });
  }
});

// Get all categories
app.get("/categories", (req, res) => {
  res.json(data.categories);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
