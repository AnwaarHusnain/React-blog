import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import starImg from "/Images/Star 5.svg";
import colon from "/Images/colon.svg";
import testimonial from "/Images/testimonial.svg";

const Testimonial = () => {
  return (
    <div className="py-10 grid grid-cols-1 gap-10 relative">
      <div className="flex flex-col gap-5 text-center px-20">
        <span className="text-sm tracking-widest text-blue">Testimonial</span>
        <h3 className="text-2xl font-primaryfont 2xl:text-5xl">Sweet Words From Readers</h3>
      </div>
      <div className="">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            668: {
              slidesPerView:2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col 2xl: gap-5 px-3">
              <div className="flex gap-5 items-center justify-between">
                <img src={colon} alt="cool" className="w-10"/>
                <div className="flex items-center gap-5">
                  <img src={starImg} alt="" className="w-4" />
                  <span>4.5</span>
                </div>
              </div>
              <p className=" text-gray">
                I really enjoyed reading this short story. I was actually hoping
                that it was longer because I enjoyed it so much. I love the way
                the author develops his characters and makes the audience buy
                it!
              </p>
              <div className="flex gap-5 mb-20">
                <img src={testimonial} alt=""  />
                <div className="flex flex-col">
                    <h3>Sundoc</h3>
                    <span className="text-gray text-sm">Reader</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-5 px-3">
              <div className="flex gap-5 items-center justify-between">
                <img src={colon} alt="cool" className="w-10"/>
                <div className="flex items-center gap-5">
                  <img src={starImg} alt="" className="w-4" />
                  <span>4.5</span>
                </div>
              </div>
              <p className=" text-gray">
                I really enjoyed reading this short story. I was actually hoping
                that it was longer because I enjoyed it so much. I love the way
                the author develops his characters and makes the audience buy
                it!
              </p>
              <div className="flex gap-5">
                <img src={testimonial} alt=""  />
                <div className="flex flex-col">
                    <h3>Sundoc</h3>
                    <span className="text-gray text-sm">Reader</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-5 px-3">
              <div className="flex gap-5 items-center justify-between">
                <img src={colon} alt="cool" className="w-10"/>
                <div className="flex items-center gap-5">
                  <img src={starImg} alt="" className="w-4" />
                  <span>4.5</span>
                </div>
              </div>
              <p className=" text-gray">
                I really enjoyed reading this short story. I was actually hoping
                that it was longer because I enjoyed it so much. I love the way
                the author develops his characters and makes the audience buy
                it!
              </p>
              <div className="flex gap-5">
                <img src={testimonial} alt=""  />
                <div className="flex flex-col">
                    <h3>Sundoc</h3>
                    <span className="text-gray text-sm">Reader</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-5 px-3">
              <div className="flex gap-5 items-center justify-between">
                <img src={colon} alt="cool" className="w-10"/>
                <div className="flex items-center gap-5">
                  <img src={starImg} alt="" className="w-4" />
                  <span>4.5</span>
                </div>
              </div>
              <p className=" text-gray">
                I really enjoyed reading this short story. I was actually hoping
                that it was longer because I enjoyed it so much. I love the way
                the author develops his characters and makes the audience buy
                it!
              </p>
              <div className="flex gap-5">
                <img src={testimonial} alt=""  />
                <div className="flex flex-col">
                    <h3>Sundoc</h3>
                    <span className="text-gray text-sm">Reader</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-5 px-3">
              <div className="flex gap-5 items-center justify-between">
                <img src={colon} alt="cool" className="w-10"/>
                <div className="flex items-center gap-5">
                  <img src={starImg} alt="" className="w-4" />
                  <span>4.5</span>
                </div>
              </div>
              <p className=" text-gray">
                I really enjoyed reading this short story. I was actually hoping
                that it was longer because I enjoyed it so much. I love the way
                the author develops his characters and makes the audience buy
                it!
              </p>
              <div className="flex gap-5">
                <img src={testimonial} alt=""  />
                <div className="flex flex-col">
                    <h3>Sundoc</h3>
                    <span className="text-gray text-sm">Reader</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-5 px-3">
              <div className="flex gap-5 items-center justify-between">
                <img src={colon} alt="cool" className="w-10"/>
                <div className="flex items-center gap-5">
                  <img src={starImg} alt="" className="w-4" />
                  <span>4.5</span>
                </div>
              </div>
              <p className=" text-gray">
                I really enjoyed reading this short story. I was actually hoping
                that it was longer because I enjoyed it so much. I love the way
                the author develops his characters and makes the audience buy
                it!
              </p>
              <div className="flex gap-5">
                <img src={testimonial} alt=""  />
                <div className="flex flex-col">
                    <h3>Sundoc</h3>
                    <span className="text-gray text-sm">Reader</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
