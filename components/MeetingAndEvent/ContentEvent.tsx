import React from "react";
import Image from "next/image";
const ContentEvent = () => {
  return (
    <div>
      <div className="text-center font-serif mt-20">
        <p className="text-[40px] uppercase">Make your events do more</p>
        <p className="text-xl w-[70%] text-center mx-auto mt-16">
          Get the most out of every meeting and group travel when you join our
          rewards programmes. Plus, business meetings have an edge with curated
          business content and more.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 mt-28">
        <Image
          src="https://digital.ihg.com/is/image/ihg/ihg-meetings-events-lp-offer-4column-tile-1-usen-svp-1280x1081"
          alt=""
          className="w-[250px]"
        />
        <Image
          src="https://digital.ihg.com/is/image/ihg/ihg-meetings-events-lp-offer-4column-tile-2-usen-svp-1280x1081"
          alt=""
          className="w-[250px]"
        />
        <Image
          src="https://digital.ihg.com/is/image/ihg/ihg-meetings-events-lp-offer-4column-tile-3-usen-svp-1280x1081"
          alt=""
          className="w-[250px]"
        />
        <Image
          src="https://digital.ihg.com/is/image/ihg/ihg-meetings-events-lp-offer-4column-tile-4-usen-svp-1280x1081"
          alt=""
          className="w-[250px]"
        />
      </div>
    </div>
  );
};

export default ContentEvent;
