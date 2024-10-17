import newCourses from "../components/styles/newCourses.module.scss";
import { useEffect, useState } from "react";
import CourseCard from "../components/UI/CourseCard";
import { useSearchParams } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  price: number;
  image: string;
  instructor: {
    name: string;
  };
}

interface Category {
  id: number;
  title: string;
  icon: string;
}

const ProductList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [urlQueries] = useSearchParams();
  const [categoryTitle, setCategoryTitle] = useState<string>("دوره‌های آنلاین");

  // Fetch categories from the API
  async function fetchCategories() {
    const response = await fetch("http://localhost:3030/categories");
    const data: Category[] = await response.json();
    setCategories(data);
  }

  // Function to fetch all courses
  async function fetchCourses() {
    const response = await fetch("http://localhost:3030/courses");
    const data: Course[] = await response.json();
    setCourses(data);
  }

  // Function to fetch courses based on category
  async function fetchCoursesByCat(cat: string) {
    const response = await fetch(`http://localhost:3030/courses?cat=${cat}`);
    const data: Course[] = await response.json();
    setCourses(data);
  }

  // useEffect to handle data fetching based on query parameters
  useEffect(() => {
    // Fetch the categories on component mount
    fetchCategories();

    const category = urlQueries.get("cat");

    // If there's a category query, fetch filtered courses
    if (category) {
      fetchCoursesByCat(category);

      // Find the corresponding category title
      const matchedCategory = categories.find(
        (catObj) => catObj.id === Number(category)
      );
      if (matchedCategory) {
        setCategoryTitle(matchedCategory.title);
      }
    } else {
      // Otherwise, fetch all courses and set default title
      fetchCourses();
      setCategoryTitle("دوره‌های آنلاین");
    }
  }, [urlQueries, categories]);

  return (
    <div className={newCourses.container}>
      {/* Render the dynamic or default title */}
      <h2>{categoryTitle}</h2>

      {/* Conditional Rendering for no courses */}
      {courses.length === 0 ? (
        <div className="flex items-center justify-center h-96">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-bold text-center">
            {` هیچ دوره ای در دسته بندی  ${categoryTitle} یافت نشد`}
          </p>
        </div>
      ) : (
        <div className={newCourses.cardsContainer}>
          {courses.map((course) => (
            <CourseCard
              id={course.id}
              key={course.id}
              title={course.title}
              tName={course.instructor.name}
              image={`http://localhost:3030${course.image}`}
              price={course.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
