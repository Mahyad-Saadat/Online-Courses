import footer from "../../components/styles/Footer.module.scss";
import logo from "../../assets/icons/Header/Logo.svg";
import facebook from "../../assets/icons/Header/facebook.svg";
import insta from "../../assets/icons/Header/insta.svg";
import linkedIn from "../../assets/icons/Header/linkedIn.svg";
import twitter from "../../assets/icons/Header/twitter.svg";
import { NavLink } from "./NavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  links: NavLink[];
}

interface Category {
  id: number;
  title: string;
  icon: string;
}

export default function Footer({ links }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories from the API
  async function fetchCategories() {
    const response = await fetch("http://localhost:3030/categories");
    const data: Category[] = await response.json();
    setCategories(data.slice(0, 7)); // Get the first 7 categories
  }

  // useEffect to fetch categories when component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <footer>
        <div className={footer.container}>
          <div className={footer.column1}>
            <div className={footer.logo}>
              <span>LOGO</span>
              <img src={logo} alt="Logo" />
            </div>
            <div className={footer.content}>
              <div>
                <h2>تماس با ما</h2>
              </div>
              <div className={footer.p}>
                <p>آموزش مجازی با کیفیت برای همه؛ بدون مرز، همیشه، همه‌جا</p>
                <p>شماره تماس: ۰۹۱۲۳۴۵۶۷۸۹</p>
                <p>Email: example@mail.com</p>
              </div>
            </div>
            <div className={footer.contactsContainer}>
              <div className={footer.contacts}>
                <a href="#">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={linkedIn} alt="LinkedIn" />
                </a>
                <a href="#">
                  <img src={insta} alt="Instagram" />
                </a>
                <a href="#">
                  <img src={twitter} alt="Twitter" />
                </a>
              </div>
            </div>
          </div>

          <div className={footer.column2}>
            <div className={footer.rightColumn}>
              <h2>لینک‌ها</h2>
              <div className={footer.contacts}>
                {links.map((link, index) => (
                  <Link key={index} to={link.url}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className={footer.leftColumn}>
              <h2>دسته‌بندی</h2>
              <div className={footer.contacts}>
                {categories.map((category) => (
                  <Link key={category.id} to={`/courses?cat=${category.id}`}>
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className={footer.column3}>
            <div className={footer.top}>
              <h2>مشترک شدن</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
            <div className={footer.bottom}>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="ایمیل را وارد کنید"
              />
              <button>مشترک شدن</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
