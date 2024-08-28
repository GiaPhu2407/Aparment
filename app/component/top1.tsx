import { FunctionComponent } from "react";
import InputTextStyle from "./input-text-style";

export type Top1Type = {
  className?: string;
};

const Top1: FunctionComponent<Top1Type> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch shadow-[0px_1px_0px_rgba(18,_32,_59,_0.09)] bg-color-3 flex flex-row items-start justify-between pt-[11px] pb-2.5 pl-[42px] pr-[66px] box-border top-[0] z-[99] sticky gap-5 max-w-full text-center text-2xs text-color-3 font-regular-13 mq975:pl-[21px] mq975:pr-[33px] mq975:box-border ${className}`}
    >
      <div className="h-[61px] w-[1600px] relative shadow-[0px_1px_0px_rgba(18,_32,_59,_0.09)] bg-color-3 hidden max-w-full" />
      <div className="w-[109px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
        <img
          className="self-stretch h-[30px] relative max-w-full overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/logooriginal.svg"
        />
      </div>
      <div className="h-[18px] w-[17px] relative hidden">
        <div className="absolute top-[1px] left-[0px] rounded-[50%] bg-indigo-600 w-[17px] h-[17px]" />
        <b className="absolute top-[0px] left-[5px] leading-[18px]">6</b>
      </div>
      <InputTextStyle />
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-5">
          <div className="w-[17px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <div className="self-stretch h-[18px] relative">
              <div className="absolute top-[1px] left-[0px] rounded-[50%] bg-indigo-600 w-[17px] h-[17px] z-[2]" />
              <div className="absolute top-[0px] left-[5px] flex flex-row items-start justify-start">
                <img
                  className="h-[25px] w-[25px] absolute !m-[0] bottom-[-10px] left-[-18px] overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/iconoutlinemail.svg"
                />
                <a className="[text-decoration:none] relative leading-[18px] font-bold text-[inherit] z-[3]">
                  2
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pl-0 pr-2.5">
            <img
              className="w-[25px] h-[25px] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/iconoutlinebell.svg"
            />
          </div>
          <img
            className="h-9 w-9 relative rounded-[50%] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/ellipse-6@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Top1;
