import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import laptop from "../../assets/Laptop1.jpeg";
import logs from "../../assets/dashboard.webp";
import custom from "../../assets/custom.webp";
import {
  IoMdCheckmarkCircle,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
// import { useState } from "react";
import useTasks from "../../hooks/useTasks";

const Tips = () => {
  // const [setSearchVal] = useState("");
  const [setTasks] = useTasks();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.search.value;
    console.log(searchInput);
    fetchSearch(searchInput);
  };

  const fetchSearch = async (searchVal) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/todo/list/?search=${searchVal}`
      );
      const data = res.json();
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full md:w-80 mx-auto">
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
        className="mySwiper3 p-2 md:p-6"
      >
        <SwiperSlide className=" bg-gray-600/60 rounded-lg">
          <img
            className="rounded-t-lg h-64 w-64 md:h-64 md:w-80"
            src={laptop}
            alt=""
          />
          <h3 className="mb-3 text-sm md:text-xl mt-6 font-bold px-6 md:px-12 text-center">
            Manage Your Daily Task with Work Notes
          </h3>
          <p className="mb-12 px-6 md:px-12 text-xs md:text-sm text-justify">
            Categorizing your task in regular, urgent, important priority. so
            that you dont have to hassle
          </p>
        </SwiperSlide>
        <SwiperSlide className=" bg-gray-600/60 rounded-lg">
          <img
            className="rounded-t-lg h-64 w-64 md:h-72 md:w-80 bg-transparent"
            src={logs}
            alt=""
          />
          <h3 className="mb-3 text-sm md:text-xl mt-6 font-bold px-6 md:px-12 text-center">
            Sign Up to Explore
          </h3>
          <p className="mb-12 px-6 md:px-12 text-xs md:text-sm text-justify">
            Create an account and Manage your works as per your priority. Get
            updates of your progress daily.
          </p>
        </SwiperSlide>
        <SwiperSlide className=" bg-gray-600/60 rounded-lg">
          <img
            className="rounded-t-lg h-64 w-64 md:h-64 md:w-80"
            src={custom}
            alt=""
          />
          <h3 className="mb-3 text-sm md:text-xl mt-6 font-bold px-6 md:px-12 text-center">
            Customize your Notes as your Want
          </h3>
          <p className="mb-12 px-6 md:px-12 text-xs md:text-sm text-justify">
            You can edit, delete nd add task as per your requirement. your task
            can be sort as Priorities too
          </p>
        </SwiperSlide>
      </Swiper>
      <div>
        <form onSubmit={handleSearch} className="">
          <div className="flex items-center px-6 py-3 rounded-lg mt-6">
            <input
              type="text"
              className="bg-transparent border-b-2 bg-gray-300 p-[2.5px] outline-none w-full"
              placeholder="Search Here..."
              name="search"
            />
            <button type="submit" className="">
              <BiSearchAlt2 className="text-3xl border-b-2 p-1 " />
            </button>
          </div>
        </form>
      </div>
      <div className="p-6">
        <h1 className="text-xl mb-6">Filter by:</h1>
        <div className="block md:flex items-center justify-between">
          {/* <p className=`{hover: <RiCompass2Fill />}`>Completed</p>
           */}
          <p className="bg-gray-600 px-2 py-2 rounded-lg my-2">
            Completed{" "}
            <IoMdCheckmarkCircle className="inline ml-2 text-green-600" />
          </p>
          <p className="bg-gray-600 px-2 py-2 rounded-lg my-2">
            Incompleted{" "}
            <IoMdCheckmarkCircleOutline className="inline ml-2 text-red-600" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tips;
