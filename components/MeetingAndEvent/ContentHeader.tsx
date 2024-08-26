import React from "react";

const ContentHeader = () => {
  return (
    <div className="text-center">
      <p className="text-[40px] leading-1 uppercase font-sans">Mỗi sự kiện đều đáng nhớ</p>
      <p className="text-xl mt-2 ">
        Bất kể dịp nào hay quy mô nào, từ 5 đến 500 người, việc kinh doanh của
        bạn có nghĩa là chúng tôi ở đây để chăm sóc các chi tiết để bạn có thể
        tập trung vào mục tiêu của nhóm mình. Với các thương hiệu như
        InterContinental Hotels & Resorts, Kimpton Hotels & Restaurants, Crowne
        Plaza Hotels & Resorts và Holiday Inn Hotels, chúng tôi có hơn 6.000
        điểm đến trên toàn cầu với không gian để biến mọi cuộc họp hoặc sự kiện
        trở nên đáng nhớ.
      </p>
      <button className="btn bg-orange-600 px-10 mt-10 text-white">GET STARTED</button>
    </div>
  );
};

export default ContentHeader;
