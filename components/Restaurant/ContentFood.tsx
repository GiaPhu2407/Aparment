import React from "react";

const ContentFood = () => {
  return (
    <div>
      <div className="text-center uppercase text-[60px] font-serif ">
        <p>Ẩm Thực</p>
      </div>
      <div className="flex justify-center items-center mx-auto w-[70%] mt-20">
        <div>
          <p className="font-serif">
            Một trải nghiệm trọn vẹn, đãi ngộ mọi giác quan, một khám phá ẩm
            thực kỳ thú và duy nhất ven Thái Bình Dương.
          </p>
        </div>
        <div>
          <img
            src="https://www.mo-residencesdanang.com/image/restaurant2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 gap-5">
        <img
          src="https://www.mo-residencesdanang.com/image/restaurant6.jpg"
          alt=""
          className="w-[40%] mb-[170px] "
        />
        <img
          src="https://www.mo-residencesdanang.com/image/restaurant7.jpg"
          alt=""
          className="w-[60%]"
        />
      </div>
      <div className="text-center mx-auto w-[70%] mt-5 ">
        <p className="font-serif">
          Ta có thể thưởng thức những kiệt tác ẩm thực ngay tại biệt thự tráng
          lệ và riêng tư, hoặc tản bộ với người của mình dưới ánh trăng, đến cụm
          các nhà hàng lãng mạn, quán rượu chủ đề, sôi động tràn trề năng lượng
          không ngủ trong miên man của sóng biển sáng bạc.
        </p>
      </div>
      <div className="mx-auto w-[90%]">
        <img
          src="https://www.mo-residencesdanang.com/image/restaurant3.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ContentFood;
