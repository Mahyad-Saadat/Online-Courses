import boy from "../../assets/icons/Header/boy.png";
import header from "../styles/header.module.scss";
import searchIcon from "../../assets/icons/Header/search.svg";
import facebook from "../../assets/icons/Header/facebook.svg";
import insta from "../../assets/icons/Header/insta.svg";
import linkedIn from "../../assets/icons/Header/linkedIn.svg";
import twitter from "../../assets/icons/Header/twitter.svg";

const Header = () => {
  return (
    <main>
      <div className={header.headerContent}>
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mr-8 sm:mr-10 md:mr-14">
            {" "}
            یادگیری آنلاین
          </h2>
          <p className="text-xs sm:text-sm md:text-base  mr-8 sm:mr-10 md:mr-14">
            دسترسی به بیش از 5000 دوره آموزشی از 300 مدرس و موسسه
          </p>
        </div>
        <div className={header.search}>
          <input type="text" placeholder="جستجو آموزش ..." />
          <img src={searchIcon} />
        </div>
        <div className={header.contacts}>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={insta} alt="" />
          </a>
          <a href="#">
            <img src={linkedIn} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>
      <div className={header.boy}>
        <img src={boy} alt="" />
      </div>
    </main>
  );
};

export default Header;
