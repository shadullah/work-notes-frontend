import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import laptop from "../../assets/Laptop1.jpeg";
import logs from "../../assets/dashboard.webp";
import custom from "../../assets/custom.webp";

const Tips = () => {
  return (
    <div className="w-80 mx-auto">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper3 p-6"
      >
        <SwiperSlide className=" bg-gray-600/60 rounded-lg">
          <img className="rounded-t-lg h-64 w-80" src={laptop} alt="" />
          <h3 className="mb-3 text-xl mt-6 font-bold px-12 text-center">
            Manage Your Daily Task with Work Notes
          </h3>
          <p className="mb-12 px-12 text-sm text-justify">
            Categorizing your task in regular, urgent, important priority. so
            that you dont have to hassle
          </p>
        </SwiperSlide>
        <SwiperSlide className=" bg-gray-600/60 rounded-lg">
          <img
            className="rounded-t-lg h-72 w-80 bg-transparent"
            src={logs}
            alt=""
          />
          <h3 className="mb-3 text-xl mt-6 font-bold px-12 text-center">
            Sign Up to Explore
          </h3>
          <p className="mb-12 px-12 text-sm text-justify">
            Create an account and Manage your works as per your priority. Get
            updates of your progress daily.
          </p>
        </SwiperSlide>
        <SwiperSlide className=" bg-gray-600/60 rounded-lg">
          <img className="rounded-t-lg h-64 w-80" src={custom} alt="" />
          <h3 className="mb-3 text-xl mt-6 font-bold px-12 text-center">
            Customize your Notes as your Want
          </h3>
          <p className="mb-12 px-12 text-sm text-justify">
            You can edit, delete nd add task as per your requirement. your task
            can be sort as Priorities too
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Tips;
