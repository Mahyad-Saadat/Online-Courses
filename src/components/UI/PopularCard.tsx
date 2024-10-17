import popular from "../styles/popular.module.scss";
import rating from "../../assets/icons/Popular/rating.svg";
import popularArrow from "../../assets/icons/Popular/popular-arrow.svg";
import React from "react";
import { Link } from "react-router-dom";

// Define the props interface
interface PopularCardProps {
  id: number;
  title: string;
  image: string;
  price: number | string;
  vote: number;
}

const PopularCard: React.FC<PopularCardProps> = ({
  id,
  title,
  image,
  price,
  vote,
}) => {
  return (
    <Link to={`http://localhost:5173/course/${id}`}>
      <div className={popular.cards}>
        <img src={image} alt="Course" />
        <div className={popular.content}>
          <span className={popular.title}>{title}</span>
          <div className={popular.rating}>
            <img src={rating} alt="Rating" />
            <span className={popular.rate}>({vote})</span>
          </div>
        </div>
        <hr />
        <div className={popular.price}>
          <span>{`${price} تومان`}</span>
          <img src={popularArrow} alt="Arrow Icon" />
        </div>
      </div>
    </Link>
  );
};

export default PopularCard;
