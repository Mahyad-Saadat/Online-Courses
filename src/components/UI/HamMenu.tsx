import hamMenu from "../../assets/icons/hamMenu/hamMenu.png";
import category from "../../assets/icons/hamMenu/category.svg";
import arrow from "../../assets/icons/hamMenu/arrow.svg";
import profile from "../../assets/icons/hamMenu/profile.svg";
import "../styles/hamMenu.scss";
import { useContext } from "react";
import BurgerMenuContext from "../../store/BurgerMenuContext";

export default function HamMenu() {
  const { onClose, onCategory } = useContext(BurgerMenuContext);

  return (
    <div>
      <div
        className="bg-gray-500 absolute z-40 h-full opacity-50 w-full"
        onClick={onClose} // Close the menu when the overlay is clicked
      ></div>
      <div className="hamMenu h-full w-64 md:w-2/4 bg-white absolute z-50 left-0 opacity-100">
        <img
          onClick={onClose}
          src={hamMenu}
          className="mt-14 mr-10"
          alt="ham menu"
        />
        <div className="flex gap-2 items-center mr-9 mt-4 hover:bg-gray-100">
          <img src={profile} alt="profile" />
          <span className="text-green-950">ورود / ثبت نام</span>
        </div>
        <div
          onClick={onCategory}
          className="flex justify-between mt-8 mr-10 hover:bg-gray-100"
        >
          <div className="flex gap-2">
            <img src={category} alt="category" />
            <span className="w-full text-green-950">دسته بندی ها</span>
          </div>
          <div className="ml-7">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
