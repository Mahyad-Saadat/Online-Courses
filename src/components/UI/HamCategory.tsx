import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenuContext from "../../store/BurgerMenuContext";
import "../styles/hamCategory.scss";
import arrow from "../../assets/icons/hamCategory/arrow.svg";
import arrows from "../../assets/icons/hamCategory/arrows.svg";
import longArrow from "../../assets/icons/hamCategory/longArrow.svg";
import search from "../../assets/icons/hamCategory/search.svg";

interface Category {
  id: number;
  title: string;
  icon: string;
}

export default function HamCategory() {
  const { onReturn } = useContext(BurgerMenuContext); // Access onClose
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories from the API
  async function fetchCategories() {
    const response = await fetch("http://localhost:3030/categories");
    const data: Category[] = await response.json();
    setCategories(data);
  }

  // useEffect to fetch categories when component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="hamCategory h-full w-64 md:w-2/4 bg-white absolute z-50 left-0 opacity-100">
        <div
          onClick={onReturn}
          className="flex gap-10 items-center mt-10 mr-10 justify-center md:gap-20"
        >
          <span className="text-lg font-bold md:text-xl text-green-950">
            دسته بندی ها
          </span>
          <img className="w-5 h-5 md:w-6 md:h-4" src={arrow} alt="arrow" />
        </div>
        <hr className="mt-2" />
        <div className="relative">
          <img
            className="w-5 h-5 absolute right-12 top-5 md:right-14 md:w-7 md:h-7 md:top-6"
            src={search}
            alt="search"
          />
          <input
            className="w-44 h-8 rounded-xl bg-slate-100 mt-4 mr-10 pr-8 text-sm font-medium md:w-72 md:mr-12 md:h-12 md:pr-10"
            type="search"
            placeholder="جستجوی دسته بندی"
          />

          {/* "همه آموزش ها" Link */}
          <Link
            to="/courses"
            className="flex gap-4 mt-6 justify-center items-center"
          >
            <span className="text-gray-500">همه آموزش ها</span>
            <img src={longArrow} alt="long arrow" />
          </Link>

          {/* Render categories dynamically with links */}
          {categories.map((category) => (
            <div
              key={category.id}
              className="group"
              onClick={onReturn} // Close menu when a category is clicked
            >
              <Link
                to={`/courses?cat=${category.id}`}
                className="flex mt-5 mr-10 justify-between w-44 md:w-72"
              >
                <span className="text-green-950 group-hover:scale-105 transition-transform duration-200 ease-in-out">
                  {category.title}
                </span>
                <img
                  src={arrows}
                  alt="arrows"
                  className="mr-7 group-hover:animate-moveLeftRight transition-transform duration-200 ease-in-out"
                />
              </Link>
              <hr className="mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
