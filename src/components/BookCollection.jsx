import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const BookCollection = () => {
  return (
    <>
      <div className="py-10">
        <div className="grid place-items-center gap-5">
          <span className="text-blue tracking-widest text-sm">
            Book Collection
          </span>
          <h3 className="font-primaryfont text-2xl 2xl:text-5xl">
            Other Publications
          </h3>
          <button className="px-4 py-2 bg-black text-white text-sm duration-200 hover:bg-blue 2xl:px-10">
            Learn More
          </button>
        </div>
      </div>
      <div className="px-3">
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-10 py-10 relative">
              <img src="/Images/6.png" alt="" className="w-44" />
              <div className="flex flex-col gap-5 items-center justify-between text-center">
                <div className="flex justify-between w-full">
                  <span className="text-blue tracking-widest">
                    Kindle edition
                  </span>
                  <div className="flex items-center justify-between gap-5 ">
                    <img src="/Images/Star 5.svg" alt="" className="w-4" />
                    <span>5.0</span>
                  </div>
                </div>
                <h1 className="text-2xl px-5 font-primaryfont">
                  The Australian Wager
                </h1>
                <p className="text-gray">
                  Read with Kindle Unlimited to also enjoy access to over 4
                  million more titles
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-10 py-10">
              <img src="/Images/7.png" alt="" className="w-44" />
              <div className="flex flex-col gap-5 items-center justify-between text-center">
                <div className="flex justify-between w-full ">
                  <span className="text-blue tracking-widest">
                    Kindle edition
                  </span>
                  <div className="flex items-center justify-between gap-5 ">
                    <img src="/Images/Star 5.svg" alt="" className="w-4" />
                    <span>5.0</span>
                  </div>
                </div>
                <h1 className="text-2xl px-5 font-primaryfont">
                  Late Night Visit from the Boys and Girl in Blue
                </h1>
                <p className="text-gray">
                  Read with Kindle Unlimited to also enjoy access to over 4
                  million more titles
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-10 py-10">
              <img src="/Images/8.png" alt="" className="w-44" />
              <div className="flex flex-col gap-5 items-center justify-between text-center">
                <div className="flex justify-between w-full ">
                  <span className="text-blue tracking-widest">
                    Kindle edition
                  </span>
                  <div className="flex items-center justify-between gap-5 ">
                    <img src="/Images/Star 5.svg" alt="" className="w-4" />
                    <span>5.0</span>
                  </div>
                </div>
                <h1 className="text-2xl px-5 font-primaryfont">
                  The Piano Is Your B.F.F.
                </h1>
                <p className="text-gray">
                  Read with Kindle Unlimited to also enjoy access to over 4
                  million more titles
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-10 py-10">
              <img src="/Images/9.png" alt="" className="w-44" />
              <div className="flex flex-col gap-5 items-center justify-between text-center">
                <div className="flex justify-between w-full ">
                  <span className="text-blue tracking-widest">
                    Kindle edition
                  </span>
                  <div className="flex items-center justify-between gap-5 ">
                    <img src="/Images/Star 5.svg" alt="" className="w-4" />
                    <span>5.0</span>
                  </div>
                </div>
                <h1 className="text-2xl px-5 font-primaryfont">
                  Full Moon Chess with a Romanian
                </h1>
                <p className="text-gray">
                  Read with Kindle Unlimited to also enjoy access to over 4
                  million more titles
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-10 py-10">
              <img src="/Images/11.png" alt="" className="w-44" />
              <div className="flex flex-col gap-5 items-center justify-between text-center">
                <div className="flex justify-between w-full ">
                  <span className="text-blue tracking-widest">
                    Kindle edition
                  </span>
                  <div className="flex items-center justify-between gap-5 ">
                    <img src="/Images/Star 5.svg" alt="" className="w-4" />
                    <span>5.0</span>
                  </div>
                </div>
                <h1 className="text-2xl px-5 font-primaryfont">
                  A Case Study of the Facilitators and Inhibitors of Mass
                  Shootings
                </h1>
                <p className="text-gray">
                  Read with Kindle Unlimited to also enjoy access to over 4
                  million more titles
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center gap-10 py-10">
              <img src="/Images/10.png" alt="" className="w-44" />
              <div className="flex flex-col gap-5 items-center justify-between text-center">
                <div className="flex justify-between w-full ">
                  <span className="text-blue tracking-widest">
                    Kindle edition
                  </span>
                  <div className="flex items-center justify-between gap-5 ">
                    <img src="/Images/Star 5.svg" alt="" className="w-4" />
                    <span>5.0</span>
                  </div>
                </div>
                <h1 className="text-2xl px-5 font-primaryfont">
                  Bliss + Blues = Bipolar
                </h1>
                <p className="text-gray">
                  Read with Kindle Unlimited to also enjoy access to over 4
                  million more titles
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BookCollection;
