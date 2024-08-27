import React from "react";

const ContentSale = () => {
  return (
    <div>
      <p className="text-center uppercase text-[40px] font-serif mt-20">
        Khuyến mãi và ưu đãi đặc biệt
      </p>
      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col items-center mx-5">
          <img
            src="https://digital.ihg.com/is/image/ihg/ihgor-biz-rewards-h1-24-homepg-hero-usen-lvp-1440x617?wid=1320&hei=744&fit=crop,1&resMode=sharp2&op_usm=0.9,1.0,8,0"
            alt=""
            className="w-[500px]"
          />
          <a href="" className="text-orange-500 mt-4 font-extrabold">
            LEARN MORE {">"}
          </a>
        </div>
        <div className="flex flex-col items-center mx-5">
          <img
            src="https://digital.ihg.com/is/image/ihg/Kimpton_NOA_1320x744_V4"
            alt=""
            className="w-[500px]"
          />
          <a href="" className="text-orange-500 font-extrabold mt-4">
            LEARN MORE {">"}
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-10">
        <img
          src="https://digital.ihg.com/is/image/ihg/ihg-mhym-lp-offer-mod-gben-lvp-1170x500"
          alt=""
          className="w-[700px] flex items-center justify-center"
        />
        <p>Offer available in select regions</p>
        <a href="" className="text-orange-500 mt-4 font-extrabold text-start">
          LEARN MORE {">"}
        </a>
      </div>
    </div>
  );
};

export default ContentSale;
