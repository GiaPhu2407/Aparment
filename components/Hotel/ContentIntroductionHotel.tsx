import Image from "next/image";
import React from "react";

const ContentIntroductionHotel = () => {
  return (
    <div>
      <p className="text-center text-3xl uppercase mb-8">Introduction Hotel</p>
      <div className="flex justify-center items-center h-screen  mb-24">
        {/* Container bao quanh các hình ảnh */}
        <div className="relative flex justify-center items-center">
          <Image
            src="https://pistachiohotel.com/UploadFile/Gallery/Overview/a3.jpg"
            alt="Image 1"
            className="w-[300px] h-[250px] relative rounded-lg shadow-lg m-4 -top-[60px] -left-[420px] transform -translate-x-4 -translate-y-4"
          />
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZRvBV8hgfHjlSBNCxMai2u13ttcdi9Lacw&s"
            alt="Image 2"
            className="w-[300px] h-[250px] absolute rounded-lg shadow-lg m-4 -top-[60px] left-[500px] transform -translate-x-4 -translate-y-4"
          />
          <Image
            src="https://static-images.vnncdn.net/files/publish/2023/5/24/348559308-3784185538484345-527454361338992790-n-544.jpg?width=0&s=IR47bZ3bhKxRZ4vporJXnw"
            alt="Image 3"
            className="w-[300px] h-[250px] absolute rounded-lg shadow-lg m-4 right-[150px]"
          />
          <Image
            src="https://acihome.vn/uploads/15/mau-thiet-ke-khach-san-hien-dai-19-tang-dang-cap-4-sao-dep-lung-linh-ben-cau-wonderful-hotel-1.jpg"
            alt="Image 4"
            className="w-[300px] h-[250px] absolute rounded-lg shadow-lg m-4 left-[200px]"
          />
          <Image
            src="https://dulichkhampha24.com/wp-content/uploads/2020/06/vi-tri-khach-san-5-sao.jpg"
            alt="Image 5"
            className="w-[300px] h-[250px]  absolute rounded-lg shadow-lg m-4 top-[250px] left-[50px] transform -translate-x-4 -translate-y-4"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentIntroductionHotel;
