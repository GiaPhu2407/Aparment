import { FunctionComponent } from "react";

export type ButtonPrimaryWithSmallIconType = {
  className?: string;
};

const ButtonPrimaryWithSmallIcon: FunctionComponent<
  ButtonPrimaryWithSmallIconType
> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-[4.5px] px-[3px] bg-color-3 rounded-8xs flex flex-col items-center justify-center z-[2] ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-[5px]">
        <div className="relative text-xs leading-[21px] font-medium font-regular-13 text-indigo-600 text-right">
          See All Transactions
        </div>
        <div className="flex flex-row items-center justify-end py-[1.5px] pl-[3px] pr-0">
          <img
            className="h-[11px] w-[11px] relative overflow-hidden shrink-0"
            alt=""
            src="/iconoutlinecheveronright.svg"
          />
        </div>
      </div>
    </button>
  );
};

export default ButtonPrimaryWithSmallIcon;