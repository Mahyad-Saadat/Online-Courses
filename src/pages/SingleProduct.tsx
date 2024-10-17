import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/styles/customSwiper.scss";

import CourseHeader from "../components/UI/CourseHeader";
import CourseContent from "../components/UI/CourseContent";
import CourseSeasons from "../components/UI/CourseSeasons";
import CourseInstructor from "../components/UI/CourseInstructor";
import CourseComments from "../components/UI/CourseComments";
import RelatedCourses from "../components/UI/RelatedCourses";

export interface Instructor {
  id: number;
  name: string;
  job: string;
  description: string;
  image: string;
}

export interface Comment {
  name: string;
  description: string;
}

export interface Course {
  id: number;
  title: string;
  image: string;
  likes: number;
  visited: number;
  description: string;
  duration: string;
  language: string;
  participants: number;
  price: number;
  contents: string[];
  instructor: Instructor;
  comments: Comment[];
  stars: number;
  isFavorite: boolean;
  relatedCourses: number[]; // Array of related course IDs
}

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [relatedCourse, setRelatedCourse] = useState<Course[]>([]);
  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await fetch(`http://localhost:3030/course/${id}`);
        const data = await response.json();
        setCourse(data);
        // setRelatedCourses(course?.relatedCourses);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch course data:", error);
        setLoading(false);
      }
    }

    fetchCourse();
  }, [id]);
  useEffect(() => {
    // Define the function to fetch a single related course by ID
    const fetchRelatedCourse = async (courseId: number) => {
      try {
        const response = await fetch(
          `http://localhost:3030/course/${courseId}`
        );
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          console.error(`Failed to fetch course with ID: ${courseId}`);
          return null;
        }
      } catch (error) {
        console.error(`Error fetching course with ID: ${courseId}`, error);
        return null;
      }
    };

    // Fetch all related courses when course.relatedCourses exists
    if (course?.relatedCourses?.length) {
      const fetchAllRelatedCourses = async () => {
        try {
          // Use Promise.all to fetch all related courses in parallel
          const fetchedCourses = await Promise.all(
            course.relatedCourses.map((courseId) =>
              fetchRelatedCourse(courseId)
            )
          );

          // Filter out any null values in case a fetch failed
          const validCourses = fetchedCourses.filter(
            (course) => course !== null
          );

          // Log the fetched related courses array
          console.log("Fetched related courses:", validCourses);

          // Update the relatedCourse state with the valid course objects
          setRelatedCourse(validCourses as Course[]);
        } catch (error) {
          console.error("Error fetching related courses:", error);
        }
      };

      fetchAllRelatedCourses();
    }
  }, [course]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>No course found.</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <CourseHeader course={course} />
        <CourseContent course={course} />
        <CourseSeasons course={course} />
        <CourseInstructor course={course} />
        <CourseComments course={course} />
        <RelatedCourses relatedCourse={relatedCourse} />
      </div>
    </>
  );
};

export default SingleProduct;
