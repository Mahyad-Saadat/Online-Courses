import styles from "../styles/category.module.scss";
import Arrow from "../../assets/icons/category/arrow.svg";
import { Link } from "react-router-dom";

interface CategoriesCardProps {
  title: string;
  icon: string;
  id: number;
}

export default function CategoriesCard({
  title,
  icon,
  id,
}: CategoriesCardProps) {
  return (
    <Link to={`/courses?cat=${id}`}>
      <div className={styles.categoryItems}>
        <div className={styles.item}>
          <div>
            <img alt="category icon" src={icon} />
          </div>
          <span>{title}</span>
        </div>
        <div className={styles.arrow}>
          <img alt="arrow icon" src={Arrow} />
        </div>
      </div>
    </Link>
  );
}
