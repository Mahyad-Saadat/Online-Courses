import newCourses from "../../components/styles/newCourses.module.scss";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

// Define the course structure
interface Course {
  id: number;
  title: string;
  price: number;
  image: string;
  instructor: {
    name: string;
  };
}

const NewCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  async function fetchCourses() {
    const response = await fetch("http://localhost:3030/courses");
    const data: Course[] = await response.json();
    setCourses(data);
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className={newCourses.container}>
      <h2>جدیدترین دوره‌های آنلاین</h2>
      <div className={newCourses.cardsContainer}>
        {courses.map((course, key) => {
          if (key <= 5) {
            return (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                tName={course.instructor.name}
                image={`http://localhost:3030${course.image}`}
                price={course.price}
              />
            );
          }
          return null;
        })}
      </div>
      <div className={newCourses.btnContainer}>
        <Link to={"/courses"}>
          <button className={newCourses.button}>بیشتر</button>
        </Link>
      </div>
    </div>
  );
};

export default NewCourses;
