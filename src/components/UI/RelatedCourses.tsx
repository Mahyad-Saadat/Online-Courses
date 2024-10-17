import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import PopularCard from "./PopularCard";
import styles from "../styles/popular.module.scss";
import { Course } from "../../pages/SingleProduct";
interface Props {
  relatedCourse: Course[];
}
const RelatedCourses = ({ relatedCourse }: Props) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-5 text-center">آموزش‌های مرتبط</h2>
      <div className={`${styles.containers} px-6`}>
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
            {relatedCourse.map((popularItem) => (
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
    </div>
  );
};

export default RelatedCourses;
