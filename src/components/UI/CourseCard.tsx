import styles from "./../styles/newCourses.module.scss";
import user from "./../../assets/icons/newCourses/user.svg";
import time from "./../../assets/icons/newCourses/time.svg";
import popularArrow from "./../../assets/icons/Popular/popular-arrow.svg";
import { Link } from "react-router-dom";

// Define the props type
interface CourseCardProps {
  title: string;
  id: number;
  tName: string;
  price: number | string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  id,
  tName,
  price,
  image,
}) => {
  return (
    <Link to={`/course/${id}`}>
      <div className={styles.card}>
        <img className={styles.mainHeader} src={image} alt="course" />
        <div className={styles.content}>
          <h4>{title}</h4>
          <div className={styles.teacher}>
            <img src={user} alt="user icon" />
            <p>
              مدرس:
              <span className={styles.teacherTheme}> {tName}</span>
            </p>
          </div>
          <div className={styles.date}>
            <img src={time} alt="time icon" />
            <p>
              شروع دوره: <strong>۵ اسفند ۱۴۰۲</strong>
            </p>
          </div>
        </div>
        <hr />
        <div className={styles.price}>
          <span>{`${price} تومان`}</span>
          <img src={popularArrow} alt="arrow icon" />
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
