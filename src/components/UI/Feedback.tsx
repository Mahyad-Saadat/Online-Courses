import feedback from "../../components/styles/feedback.module.scss";
import iconFeedback from "../../assets/icons/feedback/iconFeedback.svg";
import profileFeedback from "../../assets/icons/feedback/profile.svg";
import profileFeedback2 from "../../assets/icons/feedback/profile2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import "./../styles/customSwiper.scss";

const Feedback: React.FC = () => {
  return (
    <>
      <section className={feedback.container}>
        <h2>از زبان شما</h2>
        <div className={feedback.cardsContainer}>
          <Swiper
            className="pb-12 md:p-14 xl:px-24 xl:pt-14"
            modules={[Navigation, Pagination]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className={feedback.cards}>
                <div className={feedback.content}>
                  <div className={feedback.header}>
                    <div className={feedback.imgContainer}>
                      <img src={profileFeedback} alt="Profile 1" />
                    </div>
                    <div className={feedback.title}>
                      <h4>جنی ویلسون</h4>
                      <span> طراح UI/UX</span>
                    </div>
                  </div>
                  <div className={feedback.headerImg}>
                    <img src={iconFeedback} alt="Feedback Icon" />
                  </div>
                </div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={feedback.cards}>
                <div className={feedback.content}>
                  <div className={feedback.header}>
                    <div className={feedback.imgContainer}>
                      <img src={profileFeedback2} alt="Profile 2" />
                    </div>
                    <div className={feedback.title}>
                      <h4>جنی ویلسون</h4>
                      <span> طراح UI/UX</span>
                    </div>
                  </div>
                  <div className={feedback.headerImg}>
                    <img src={iconFeedback} alt="Feedback Icon" />
                  </div>
                </div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlide components as needed */}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Feedback;
