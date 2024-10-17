import React, { useContext } from "react";
import vector from "./../../assets/Navbar/Vector.png";
import logoPic from "./../../assets/Navbar/Logo.png";
import styles from "./../styles/Navbar.module.scss";
import Button from "./Buuton";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenuContext from "../../store/BurgerMenuContext";
import { Link } from "react-router-dom";

export interface NavLink {
  name: string;
  url: string;
}

interface NavBarProps {
  logoText: string;
  links: NavLink[];
}

const NavBar: React.FC<NavBarProps> = ({ logoText, links }) => {
  const { onOpen } = useContext(BurgerMenuContext);

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navGraphics}>
          <img className={styles.vector} src={vector} alt="" />
          <Link to={"/"}>
            <div className={styles.logo}>
              <h1>{logoText}</h1>
              <img src={logoPic} alt="" />
            </div>
          </Link>
        </div>
        <nav>
          <div className="hidden mdC:block">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.logInContainer}>
            <Button classes="btnIcon">
              {" "}
              <AiOutlineShoppingCart className="mr-2" size={27} />
            </Button>

            <Button classes="btn">ورود</Button>
            <Button classes="btnOrange">ثبت نام</Button>
          </div>
          <div className={styles.burgerMenuMD}>
            <Button classes="btnIcon">
              {" "}
              <AiOutlineShoppingCart className="mr-2" size={27} />
            </Button>
            <Button classes="btnBurger" onClick={onOpen}>
              {" "}
              <RxHamburgerMenu size={35} color="#28422c" />
            </Button>
          </div>
          <div className={styles.burgerMenuSM}>
            <Button classes="btnIcon">
              {" "}
              <AiOutlineShoppingCart className="mr-1" size={17} />
            </Button>
            <Button classes="btnBurger" onClick={onOpen}>
              {" "}
              <RxHamburgerMenu size={20} color="#28422c" />
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
