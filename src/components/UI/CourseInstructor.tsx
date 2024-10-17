import { Course } from "../../pages/SingleProduct";

interface Props {
  course: Course;
}
const CourseInstructor = ({ course }: Props) => {
  return (
    <div className="my-12">
      <h2 className="text-xl font-bold mb-5">مدرس</h2>
      <div className="flex">
        <img
          src={`http://localhost:3030${course.instructor.image}`}
          alt={course.instructor.name}
        />
        <div className="mr-8">
          <h3 className="text-lg font-bold">{course.instructor.name}</h3>
          <span className=" text-gray-500">{course.instructor.job}</span>
          <p className="mt-8">{course.instructor.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
