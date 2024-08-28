import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TransactionType = {
  className?: string;
  completed?: string;
  mastercard6442?: string;
  cardPayment?: string;
  day?: string;
  facebook?: string;
  iconOutlinedotsHorizontal?: string;

  /** Style props */
  propBoxShadow?: CSSProperties["boxShadow"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propBoxShadow1?: CSSProperties["boxShadow"];
  propBorderRadius1?: CSSProperties["borderRadius"];
  propWidth?: CSSProperties["width"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propWidth2?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propWidth3?: CSSProperties["width"];
};

const Transaction: FunctionComponent<TransactionType> = ({
  className = "",
  completed,
  mastercard6442,
  cardPayment,
  day,
  facebook,
  iconOutlinedotsHorizontal,
  propBoxShadow,
  propBorderRadius,
  propBoxShadow1,
  propBorderRadius1,
  propWidth,
  propBackgroundColor,
  propAlignSelf,
  propWidth1,
  propBackgroundColor1,
  propBackgroundColor2,
  propColor,
  propWidth2,
  propPadding,
  propWidth3,
}) => {
  const transactionStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      borderRadius: propBorderRadius,
    };
  }, [propBoxShadow, propBorderRadius]);

  const bGStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: propBoxShadow1,
      borderRadius: propBorderRadius1,
    };
  }, [propBoxShadow1, propBorderRadius1]);

  const transactionInfoStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const statusIconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
    };
  }, [propBackgroundColor, propAlignSelf]);

  const bG1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      backgroundColor: propBackgroundColor1,
    };
  }, [propWidth1, propBackgroundColor1]);

  const statusStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const completedStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const paymentStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const dateStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const platformStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  return (
    <div
      className={`self-stretch shadow-[0px_4px_30px_rgba(0,_0,_0,_0.05)] bg-color-3 border-gray-200 border-[1px] border-solid box-border flex flex-row items-start justify-between py-[18px] pl-6 pr-[26px] shrink-0 max-w-full gap-5 z-[2] mt-[-1px] text-left text-smi text-gray-900 font-regular-13 mq725:flex-wrap ${className}`}
      style={transactionStyle}
    >
      <div
        className="h-[86px] w-[798px] relative shadow-[0px_4px_30px_rgba(0,_0,_0,_0.05)] bg-color-3 border-gray-200 border-[1px] border-solid box-border hidden max-w-full"
        style={bGStyle}
      />
      <div
        className="flex flex-col items-start justify-start pt-2.5 pb-0 pl-0 pr-[21px] text-xs text-green-900"
        style={transactionInfoStyle}
      >
        <div
          className="rounded-21xl bg-green-100 flex flex-row items-start justify-start pt-0.5 pb-1 pl-[9px] pr-2 gap-2 z-[1]"
          style={statusIconStyle}
        >
          <div
            className="h-[26px] w-[100px] relative rounded-21xl bg-green-100 hidden"
            style={bG1Style}
          />
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <div
              className="w-2 h-2 relative rounded-[50%] bg-green-500 z-[1]"
              style={statusStyle}
            />
          </div>
          <div
            className="relative leading-[20px] font-medium z-[1]"
            style={completedStyle}
          >
            {completed}
          </div>
        </div>
      </div>
      <div
        className="w-[190px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[3px]"
        style={paymentStyle}
      >
        <b className="relative leading-[22px] whitespace-pre-wrap z-[1]">
          {mastercard6442}
        </b>
        <div className="relative leading-[21px] font-medium text-gray-500 z-[1]">
          {cardPayment}
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-start gap-[3px]"
        style={dateStyle}
      >
        <b className="relative leading-[22px] whitespace-nowrap z-[1]">{day}</b>
        <div className="relative leading-[21px] font-medium text-gray-500 z-[1]">
          Jan 17, 2022
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-start pt-[13px] pb-0 pl-0 pr-5 text-gray-500"
        style={platformStyle}
      >
        <div className="relative leading-[21px] font-medium z-[1]">
          {facebook}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
        <img
          className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src={iconOutlinedotsHorizontal}
        />
      </div>
    </div>
  );
};

export default Transaction;