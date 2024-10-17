import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { Course } from "../../pages/SingleProduct";

interface Props {
  course: Course;
}
const CourseSeasons = ({ course }: Props) => {
  return (
    <div className="my-12">
      <h2 className="text-xl font-bold mb-5">سرفصل ها</h2>
      <div className="flex justify-between my-2">
        <p>{` ${course.contents.length * 8} درس در قالب ${
          course.contents.length
        } فصل`}</p>
        <Link to={"/"} className="text-blue-600 font-medium">
          بستن همه فصل ها
        </Link>
      </div>
      <div className="border-2 rounded border-green-200">
        {course.contents.map((season, index) => (
          <div
            className={` flex justify-between items-center py-3 bg-green-50 border-green-200 ${
              index === 0
                ? "border-b"
                : index === course.contents.length - 1
                ? "border-t"
                : "border-y"
            }`}
            key={index}
          >
            {`فصل ${index + 1}.    ${season} `}
            <IoIosArrowDown size={20} className="ml-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSeasons;
