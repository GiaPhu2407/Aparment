"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContentNewandEvent = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className="bg-white dark:bg-gray-400 ">
      <div className="text-center mt-10 text-3x uppercase">
        <p>Tin Tức và sự kiện</p>
      </div>
      <div className="flex flex-col items-center pl-2 mt-14">
        <div className="flex justify-center space-x-5">
          <div className="flex flex-col items-center" data-aos="fade-right">
            <div className="relative overflow-hidden w-[400px] h-auto">
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2023/07/Optimized-khach-san-5-sao-sapa-370x420.jpg"
                alt="Khách sạn 5 sao Sapa"
                className="transition-transform duration-1000 ease-in-out transform hover:scale-110 object-cover w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <a href="" className="block pl-5">
                Tin tức
              </a>
              <a
                href=""
                className="block pl-5 text-2xl font-semibold mt-2 w-[80%]"
              >
                Top 10 khách sạn 5 sao Sapa cho kỳ nghỉ sang trọng, thư giãn
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center" data-aos="fade-up">
            <div className="relative overflow-hidden w-[400px] h-auto">
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2023/07/Optimized-Thang-7-370x420.jpg"
                alt="Khách sạn 5 sao Sapa"
                className="transition-transform duration-1000 ease-in-out transform hover:scale-110 object-cover w-full h-auto"
              />
            </div>
            <div className=" mt-2 ml-3">
              <a href="" className="block pl-5">
                Tin tức
              </a>
              <a href="" className="block pl-5 text-2xl font-semibold ">
                Nên đi Sapa vào tháng mấy? Gợi ý thời gian lý tưởng để khám Sapa
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center" data-aos="fade-left">
            <div className="relative overflow-hidden w-[400px] h-auto">
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2023/07/Optimized-quang-truong-sapa-370x420.jpg"
                alt="Khách sạn 5 sao Sapa"
                className="transition-transform duration-1000 ease-in-out transform hover:scale-110 object-cover w-full h-auto"
              />
            </div>
            <div className=" mt-2 ml-4">
              <a href="" className="block ">
                Những địa điểm nên đến ở SaPa
              </a>
              <a href="" className="block text-2xl font-semibold">
                Quảng trường Sapa – Nơi giao thoa giữa truyền thống và hiện đại
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Event 2
       */}
      <div className="flex flex-col items-center mt-5">
        <div className="flex justify-center space-x-5">
          <div className="flex flex-col items-center" data-aos="fade-up">
            <div className="relative overflow-hidden w-[400px] h-auto">
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2023/07/Optimized-an-sang-o-sapa-370x420.jpg"
                alt="Khách sạn 5 sao Sapa"
                className="transition-transform duration-1000 ease-in-out transform hover:scale-110 object-cover w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <a href="" className="block pl-6">
                Những địa điểm nên đến ở SaPa
              </a>
              <a href="" className="block pl-6 text-2xl font-semibold mt-2">
                Ăn sáng ở Sapa – 10 Quán ăn sáng không thể bỏ qua tại Sapa
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center" data-aos="fade-down">
            <div className="relative overflow-hidden w-[400px] h-auto">
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2023/07/Optimized-chup-anh-sapa-370x420.jpg"
                alt="Khách sạn 5 sao Sapa"
                className="transition-transform duration-1000 ease-in-out transform hover:scale-110 object-cover w-full h-auto"
              />
            </div>
            <div className=" mt-2">
              <a href="" className="block pl-6">
                Những địa điểm nên đến ở SaPa
              </a>
              <a href="" className="block pl-6 text-2xl font-semibold mt-2 ">
                Chụp ảnh Sapa – 12 Điểm check in không thể bỏ qua tại Sapa
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center pr-6" data-aos="fade-up">
            <div className="relative overflow-hidden w-[400px] h-auto">
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2023/07/Optimized-gia-ve-cao-toc-ha-noi-lao-cai-370x420.jpg"
                alt="Khách sạn 5 sao Sapa"
                className="transition-transform duration-1000 ease-in-out transform hover:scale-110 object-cover w-full h-auto"
              />
            </div>
            <div className=" mt-2">
              <a href="" className="block">
                Tin tức
              </a>
              <a href="" className="block text-2xl font-semibold mt-2">
                Giá vé cao tốc Hà Nội Lào Cai: Thông tin cập nhật 2023
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewandEvent;
