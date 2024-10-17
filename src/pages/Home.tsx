import Category from "../components/UI/Category";
import Feedback from "../components/UI/Feedback";
import Header from "../components/UI/Header";
import Information from "../components/UI/Information";
import NewCourses from "../components/UI/NewCourses";
import OurTeachers from "../components/UI/OurTeachers";
import PopularCourse from "../components/UI/PopularCourse";

const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <PopularCourse />
      <NewCourses />
      <OurTeachers />
      <Information />
      <Feedback />
    </div>
  );
};

export default Home;
