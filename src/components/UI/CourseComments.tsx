import { IoIosArrowDown } from "react-icons/io";
import { Course } from "../../pages/SingleProduct";
import profileFeedback from "../../assets/icons/feedback/profile.svg";
import profileFeedback2 from "../../assets/icons/feedback/profile2.svg";
interface Person {
  [key: string]: "male" | "female";
}
interface Props {
  course: Course;
}
const people: Person[] = [
  { مریم: "female" },
  { حسن: "male" },
  { علی: "male" },
  { ندا: "female" },
  { فاطمه: "female" },
  { محمد: "male" },
  { سارا: "female" },
  { امیر: "male" },
  { پریسا: "female" },
  { رضا: "male" },
  { فریبا: "female" },
  { نسرین: "female" },
  { سینا: "male" },
  { الهام: "female" },
  { آرزو: "female" },
  { کیوان: "male" },
  { بابک: "male" },
];

const CourseComments = ({ course }: Props) => {
  return (
    <div className="my-12">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-5">نظرات</h2>
        <div className="flex">
          <span className="ml-3 text-xs mt-1">{`${course.comments.length} نظر `}</span>
          <button
            type="button"
            className="h-7 font-medium flex items-center justify-between w-20 rounded-xl text-white bg-customGreen"
          >
            <span className="mr-3 text-sm">اخیرا</span>
            <IoIosArrowDown size={16} className="ml-2 mt-1" />
          </button>
        </div>
      </div>
      {course.comments.map((comment, index) => {
        // Find the person from the people array
        const person = people.find((p) => Object.keys(p)[0] === comment.name);
        const gender = person ? Object.values(person)[0] : null;

        return (
          <div className="flex border-b-2 p-3" key={index}>
            <img
              className="ml-4"
              src={gender === "female" ? profileFeedback : profileFeedback2}
              alt="Profile"
            />

            <div>
              <span className="text-lg font-bold">{comment.name}</span>
              <p className="mt-1">{comment.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseComments;
