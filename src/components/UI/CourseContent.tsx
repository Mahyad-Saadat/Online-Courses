import { AiTwotoneVideoCamera } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FaRegFileLines, FaRegFilePdf } from "react-icons/fa6";
import { IoFolderOpenOutline } from "react-icons/io5";
import { Course } from "./../../pages/SingleProduct";
interface Props {
  course: Course;
}
const CourseContent = ({ course: { duration } }: Props) => {
  return (
    <div className="my-12">
      <h2 className="text-xl font-bold mb-5">محتوای این آموزش</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className=" p-4 flex">
          <span className="bg-gray-200 w-7 h-7 ml-3 p-1 rounded-full">
            <AiTwotoneVideoCamera size={20} color="white" />
          </span>
          <p>{`${duration} آموزش ویدئویی `}</p>
        </div>
        <div className=" p-4 flex">
          <span className="bg-gray-200 w-7 h-7 ml-3 p-1 rounded-full">
            <FaRegFileLines size={20} color="white" />
          </span>
          <p> ۹۸ سوال سنجش یادگیری</p>
        </div>
        <div className=" p-4 flex">
          <span className="bg-gray-200 w-7 h-7 ml-3 p-1 rounded-full">
            <IoFolderOpenOutline size={20} color="white" />
          </span>
          <p>فایل برنامه ها و پروژه ها</p>
        </div>
        <div className=" p-4 flex">
          <span className="bg-gray-200 w-7 h-7 ml-3 p-1 rounded-full">
            <FaRegFilePdf size={20} color="white" />
          </span>
          <p>فایل PDF یادداشت ها و اسلایدها</p>
        </div>
        <div className=" p-4 flex">
          <span className="bg-gray-200 w-7 h-7 ml-3 p-1 rounded-full">
            <BiMessageDetail size={20} color="white" />
          </span>
          <p>تالار پرسش و پاسخ</p>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
