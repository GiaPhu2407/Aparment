import { FunctionComponent } from "react";

export type InputTextStyleType = {
  className?: string;
};

const InputTextStyle: FunctionComponent<InputTextStyleType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[910px] flex flex-col items-start justify-center gap-2.5 max-w-full z-[1] text-left text-base text-base-black font-semi-bold-16 ${className}`}
    >
      <div className="w-[85px] relative leading-[24px] font-medium hidden whitespace-nowrap">
        Input Label
      </div>
      <div className="self-stretch rounded-3xs bg-color-3 border-gray-200 border-[1px] border-solid flex flex-row items-center justify-start py-2 pl-[15px] pr-[638px] gap-2.5 mq450:pr-[159px] mq450:box-border mq975:pr-[319px] mq975:box-border">
        <div className="flex flex-row items-center justify-center">
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
            alt=""
            src="/iconoutlinesearch.svg"
          />
        </div>
        <input
          className="w-[calc(100%_-_671px)] [border:none] [outline:none] font-medium font-regular-13 text-xs bg-[transparent] h-5 flex-1 relative leading-[20px] text-gray-400 text-left flex items-center min-w-[136px] whitespace-nowrap p-0"
          placeholder="Type to search"
          type="text"
        />
      </div>
    </div>
  );
};

export default InputTextStyle;
