"use client";
import React, { useEffect } from "react";
import { FaCompass } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
const ContentImage = () => {
  return (
    <div className="mt-20">
      <div>
        <p className="text-center uppercase font-serif text-[40px] mt-10">
          Kết nối. Hợp tác. Ăn mừng.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 mt-2 mb-5">
        {/* First Room Section */}

        <div>
          <div className="w-full md:w-[500px]">
            <div className="carousel h-[300px] w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://digital.ihg.com/is/image/ihg/ihg-meetings-events-lp-offer-2column-tile-1-usen-svp-1280x722"
                  className="w-full"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide6" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Rooms_30-scaled-510x360.jpg"
                  className="w-full"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_32-scaled-510x360.jpg"
                  className="w-full"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_33-scaled-510x360.jpg"
                  className="w-full"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide5" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide5" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_31-scaled-510x360.jpg"
                  className="w-full"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide6" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide6" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Rooms_12-scaled-510x360.jpg"
                  className="w-full"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide5" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              {/* Other slides */}
            </div>
            <div className="pl-4 mt-4">
              <Link
                href={"/ShowContentRoom"}
                className="text-black hover:text-amber-800 text-[28px] md:text-[35px]"
              >
                Superior Room
              </Link>
              <div className="flex flex-wrap gap-5 mt-4">
                <div className="flex items-center">
                  <FaCompass className="text-xl" />
                  <p className="pl-2 text-base">23m²</p>
                </div>
                <div className="flex items-center">
                  <IoBedOutline className="text-2xl" />
                  <p className="pl-2 text-base">2 beds</p>
                </div>
                <div className="flex items-center">
                  <GiBathtub className="text-xl" />
                  <p className="pl-2 text-base">1 bathroom</p>
                </div>
              </div>
              <p className="text-base break-words max-w-full md:max-w-[88%] mt-4 opacity-70">
                Nếu bạn có một phòng ngủ ấm cúng, tiện nghi và hợp túi tiền,
                phòng Superior Room là sự...
              </p>
            </div>
          </div>

          {/* Second Room Section */}
          <div className="w-full md:w-[500px]">
            <div className="carousel h-[300px] w-full">
              <div id="slide1_2" className="carousel-item relative w-full">
                <img
                  src="https://digital.ihg.com/is/image/ihg/ihg-meetings-events-lp-offer-2column-tile-2-usen-svp-1280x722"
                  className="w-full"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide6_2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2_2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2_2" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810696769_564a7fec7bd12ad33518c13eb621431c-510x360.jpg"
                  className="w-full"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide1_2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3_2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3_2" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810674619_5e060452b26f7d90cc8f67cccdc6b014-510x360.jpg"
                  className="w-full"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide2_2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4_2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4_2" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810650920_2c47d0c9e65e8bbb1b23f7f8aea00d9a-510x360.jpg"
                  className="w-full"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide3_2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide5_2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide5_2" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810648780_4fd7c64cccbc8e2c096445c023faf13f-510x360.jpg"
                  className="w-full"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide4_2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide6_2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide6_2" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810650920_2c47d0c9e65e8bbb1b23f7f8aea00d9a-510x360.jpg"
                  className="w-full"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide5_2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1_2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              {/* Other slides */}
            </div>
            <div className="pl-4 mt-4">
              <Link
                href={"/ShowCR2"}
                className="text-black hover:text-amber-800 text-[28px] md:text-[35px]"
              >
                Connecting Room
              </Link>
              <div className="flex flex-wrap gap-5 mt-4">
                <div className="flex items-center">
                  <FaCompass className="text-xl" />
                  <p className="pl-2 text-base">53m²</p>
                </div>
                <div className="flex items-center">
                  <IoBedOutline className="text-2xl" />
                  <p className="pl-2 text-base">3 beds</p>
                </div>
                <div className="flex items-center">
                  <GiBathtub className="text-xl" />
                  <p className="pl-2 text-base">2 bathrooms</p>
                </div>
              </div>
              <p className="text-base break-words max-w-full md:max-w-[88%] mt-4 opacity-70">
                Phòng Connecting Room là lựa chọn lý tưởng cho gia đình hoặc
                nhóm bạn khi đến với Amazing Hotel Sapa...
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full md:w-[500px]">
            <div className="carousel h-[300px] w-full">
              <div id="slide1_3" className="carousel-item relative w-full">
                <img
                  src="https://digital.ihg.com/is/image/ihg/ihg-meetings-events-lp-offer-2column-tile-3-usen-svp-1280x722-1"
                  className="w-full"
                  alt="Room 1"
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide6_3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2_3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2_3" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Rooms_29-scaled-510x360.jpg"
                  className="w-full"
                  alt="Room 1"
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide3_3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1_3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3_3" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Rooms_28-scaled-510x360.jpg"
                  className="w-full"
                  alt="Room 1"
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide2_3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1_3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              {/* Other slides */}
            </div>
            <div className="pl-4 mt-4">
              <Link
                href={"/ShowCR3"}
                className="text-black hover:text-amber-800 text-[28px] md:text-[35px]"
              >
                Deluxe Family
              </Link>
              <div className="flex flex-wrap gap-5 mt-4">
                <div className="flex items-center">
                  <FaCompass className="text-xl" />
                  <p className="pl-2 text-base">32m²</p>
                </div>
                <div className="flex items-center">
                  <IoBedOutline className="text-2xl" />
                  <p className="pl-2 text-base">2 beds</p>
                </div>
                <div className="flex items-center">
                  <GiBathtub className="text-xl" />
                  <p className="pl-2 text-base">1 bathroom</p>
                </div>
              </div>
              <p className="text-base break-words max-w-full md:max-w-[88%] mt-4 opacity-70">
                Phòng Deluxe Family là lựa chọn hoàn hảo cho gia đình có trẻ nhỏ
                khi đến với Amazing Hotel Sapa....
              </p>
            </div>
          </div>

          {/* Second Room Section */}
          <div className="w-full md:w-[500px]">
            <div className="carousel h-[300px] w-full">
              <div id="slide1_4" className="carousel-item relative w-full">
                <img
                  src="https://digital.ihg.com/is/image/ihg/ihg-meetings-events-lp-offer-2column-tile-4-usen-svp-1280x722"
                  className="w-full"
                  alt="Room 2"
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide6_4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2_4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slid2_4" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_38-scaled-510x360.jpg"
                  className="w-full"
                  alt="Room 2"
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide1_4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3_4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3_4" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_36-scaled-510x360.jpg"
                  className="w-full"
                  alt="Room 2"
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide2_4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4_4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4_4" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810650920_2c47d0c9e65e8bbb1b23f7f8aea00d9a-510x360.jpg"
                  className="w-full"
                  alt="Room 2"
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide3_4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide5_4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide5_4" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_37-scaled-510x360.jpg"
                  className="w-full"
                  alt="Room 2"
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide4_4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide6_4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide6_4" className="carousel-item relative w-full">
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_35-scaled-510x360.jpg"
                  className="w-full"
                  alt="Room 2"
                />
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <a href="#slide5_4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1_4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              {/* Other slides */}
            </div>
            <div className="pl-4 mt-4">
              <Link
                href={"/ShowCR4"}
                className="text-black hover:text-amber-800 text-[28px] md:text-[35px]"
              >
                Deluxe Room
              </Link>
              <div className="flex flex-wrap gap-5 mt-4">
                <div className="flex items-center">
                  <FaCompass className="text-xl" />
                  <p className="pl-2 text-base">25m²</p>
                </div>
                <div className="flex items-center">
                  <IoBedOutline className="text-2xl" />
                  <p className="pl-2 text-base">2 beds</p>
                </div>
                <div className="flex items-center">
                  <GiBathtub className="text-xl" />
                  <p className="pl-2 text-base">1 bathrooms</p>
                </div>
              </div>
              <p className="text-base break-words max-w-full md:max-w-[88%] mt-4 opacity-70">
                Phòng Deluxe Room là lựa chọn tuyệt vời cho du khách muốn tận
                hưởng khung cảnh núi non hùng vĩ...
              </p>
            </div>
          </div>
        </div>

        {/* Add more sections similarly */}
      </div>
    </div>
  );
};

export default ContentImage;
