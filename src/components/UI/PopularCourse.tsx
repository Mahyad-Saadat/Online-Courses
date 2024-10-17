import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../styles/customSwiper.scss";
import PopularCard from "./PopularCard";
import styles from "../styles/popular.module.scss";
import { useEffect, useState } from "react";

// Define the structure of a popular course
interface PopularCourseItem {
  id: number;
  title: string;
  image: string;
  price: number;
  participants: number;
}

const PopularCourse: React.FC = () => {
  const [populars, setPopulars] = useState<PopularCourseItem[]>([]);

  async function fetchPopular() {
    const response = await fetch("http://localhost:3030/favs");
    const data: PopularCourseItem[] = await response.json();
    setPopulars(data);
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className={`${styles.containers} px-6`}>
      <h2>محبوب ترین ها</h2>
      <div className={styles.cardsContainer}>
        <Swiper
          className="p-10 md:p-10 xl:p-16"
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {populars.map((popularItem) => (
            <SwiperSlide key={popularItem.id}>
              <PopularCard
                id={popularItem.id}
                title={popularItem.title}
                image={`http://localhost:3030${popularItem.image}`}
                price={popularItem.price}
                vote={popularItem.participants}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCourse;
