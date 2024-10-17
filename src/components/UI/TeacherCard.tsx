import ourTeachers from "../styles/ourTeachers.module.scss";
import React from "react";

// Define props interface for TeacherCard
interface TeacherCardProps {
  title: string;
  img: string;
  name: string;
  description: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  title,
  img,
  name,
  description,
}) => {
  return (
    <div className={ourTeachers.cards}>
      <img src={img} alt={name} />
      <div className={ourTeachers.content}>
        <h3>{name}</h3>
        <h6>{title}</h6>
        <p>{description}</p>
        <span>Professor@Tracy D. Wright</span>
      </div>
    </div>
  );
};

export default TeacherCard;
