import {Swiper, SwiperSlide} from "swiper/react";
import {Container, Paragraph} from "../../../atoms";
import {EffectCoverflow, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {testimonial} from "../../content";
import {FaStar} from "react-icons/fa";

export const Testimonial2CourseScreen = () => {
  return (
    <Container className="mt-10">
      <Paragraph variant="title">Words</Paragraph>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectCoverflow]}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonial.map((item, index) => (
          <SwiperSlide key={index} className="pb-10">
            <div className="p-5">
              <div className="flex gap-3 items-end mb-5">
                <div className="w-10 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-full"
                  />
                </div>
                <h6 className="text-sm">{item.name}</h6>
              </div>

              <p className="text-[11px] text-gray-500">{item.desk}</p>
              <div className="flex justify-center gap-2 text-primary mt-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
