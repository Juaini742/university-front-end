import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {Link} from "react-router-dom";
import {news} from "../../content";
import {Container, Paragraph} from "../../../atoms";

export const RecommendNewDetailScreen = () => {
  return (
    <Container>
      <Paragraph variant="title" className="mt-10">
        Top News For You
      </Paragraph>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectCoverflow]}
        loop={true}
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
        {news.map((item, index) => (
          <Link key={index} to={`/news/${index}`}>
            <SwiperSlide className="pb-10">
              <div className="p-3 rounded-lg hover:bg-yellow-100 trans-300">
                <div className="rounded-lg overflow-hidden">
                  <img src={item.img} alt="" />
                </div>
                <span className="text-gray-400 text-[10px]">
                  12, Januari 2024
                </span>
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className=" text-[11px]">{item.slug}</p>
              </div>
            </SwiperSlide>
          </Link>
        ))}
        {/* </div> */}
      </Swiper>
    </Container>
  );
};
