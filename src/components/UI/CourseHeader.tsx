import { LuClock10 } from "react-icons/lu";
import { Course } from "../../pages/SingleProduct";
import { BsTranslate } from "react-icons/bs";
import { IoIosHeartEmpty, IoIosPeople } from "react-icons/io";
import { IoCardOutline } from "react-icons/io5";

interface Props {
  course: Course;
}
const CourseHeader = ({ course }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      <div className="flex justify-center">
        <img
          className="h-96"
          src={`http://localhost:3030${course.image}`}
          alt={course.title}
        />
      </div>
      <div className=" p-4 rounded-lg">
        <div className="grid grid-cols-2 w-full">
          <div className="flex justify-start">
            <span className="flex-1 px-2 py-2 mx-3 bg-orange-500 rounded-md font-semibold text-center text-white">
              {`${course.likes} لایک`}
            </span>
            <span className="flex-1 px-1 py-2 bg-customGreen rounded-md font-semibold text-center text-white">
              {`${course.visited} بازدید`}
            </span>
          </div>
        </div>
        <div className="my-3">
          <h2 className="text-xl font-bold">{course.description}</h2>
          <p className="py-3 text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
        <div>
          <div className="flex justify-between py-2">
            <span className="flex items-center">
              <LuClock10 size={23} color="orange" />
              <h3 className="mr-2 ">مدت زمان :</h3>
            </span>
            <span className="font-light">{course.duration}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="flex items-center">
              <BsTranslate size={23} color="orange" />
              <h3 className="mr-2 ">زبان :</h3>
            </span>
            <span className="font-light">{course.language}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="flex items-center">
              <IoIosPeople size={23} color="orange" />
              <h3 className="mr-2 ">تعداد دانشجو :</h3>
            </span>
            <span className="font-light">{`${course.participants} نفر`}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="flex items-center">
              <IoCardOutline size={23} color="orange" />
              <h3 className="mr-2 font-semibold">هزینه آموزش :</h3>
            </span>
            <span className="font-semibold text-orange-600">{`${course.price} تومان`}</span>
          </div>
        </div>
        <div className="flex items-center">
          {/* Icon */}

          {/* Button */}
          <button className="flex-grow bg-customGreen text-white py-2 px-4 rounded mr-4 font-semibold">
            افزودن به سبد خرید
          </button>
          <IoIosHeartEmpty size={30} className="mr-5" />
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
