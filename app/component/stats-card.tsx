import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type StatsCardType = {
  className?: string;
  todaysSale?: string;
  prop?: string;
  prop1?: string;
  iconOutlinearrowUp?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
};

const StatsCard: FunctionComponent<StatsCardType> = ({
  className = "",
  todaysSale,
  prop,
  prop1,
  iconOutlinearrowUp,
  propColor,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`flex-1 rounded-3xs bg-color-3 border-gray-200 border-[1px] border-solid box-border flex flex-row items-start justify-start py-0 pl-0.5 pr-px min-w-[261px] max-w-[284px] text-left text-2xs text-gray-500 font-regular-13 ${className}`}
    >
      <div className="flex-1 rounded-3xs flex flex-col items-start justify-start p-[15px] gap-[11px]">
        <a className="[text-decoration:none] relative tracking-[1px] leading-[18px] uppercase font-medium text-[inherit]">
          {todaysSale}
        </a>
        <div className="self-stretch flex flex-row items-end justify-between gap-5 text-2xl text-gray-900">
          <div className="flex flex-row items-end justify-start">
            <b className="relative leading-[32px] mq450:text-mid mq450:leading-[26px]">
              {prop}
            </b>
          </div>
          <div className="flex flex-row items-center justify-end gap-1 text-right text-smi text-green-500">
            <div
              className="relative leading-[21px] font-medium"
              style={divStyle}
            >
              {prop1}
            </div>
            <img
              className="h-2.5 w-2.5 relative overflow-hidden shrink-0"
              alt=""
              src={iconOutlinearrowUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;