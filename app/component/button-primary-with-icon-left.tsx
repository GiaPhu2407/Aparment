import { CSSProperties, FunctionComponent, useMemo } from "react";



export type ButtonPrimaryWithIconLeftType = {
  className?: string;
  iconOutlineplus?: string;
  buttonName?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propFontWeight?: CSSProperties["fontWeight"];
  propColor?: CSSProperties["color"];
};

const ButtonPrimaryWithIconLeft: FunctionComponent<
  ButtonPrimaryWithIconLeftType
> = ({
  className = "",
  iconOutlineplus,
  buttonName,
  propBorder,
  propTextDecoration,
  propFontWeight,
  propColor,
}) => {
  const buttonPrimaryWithIconLeftStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const buttonNameStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      fontWeight: propFontWeight,
      color: propColor,
    };
  }, [propTextDecoration, propFontWeight, propColor]);

  return (
    <div
      className={`w-[76px] rounded-8xs bg-color-3 flex flex-row items-start justify-start py-1.5 px-0 box-border text-right text-2xs text-gray-500 font-regular-13 ${className}`}
      style={buttonPrimaryWithIconLeftStyle}
    >
      <div className="ml-[-25px] flex flex-row items-start justify-start py-0 px-[45px] gap-[15px] shrink-0">
        <div className="hidden flex-row items-center justify-center">
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
            alt=""
            src={iconOutlineplus}
          />
        </div>
        <a
          className="[text-decoration:none] relative leading-[18px] font-bold text-[inherit]"
          style={buttonNameStyle}
        >
          {buttonName}
        </a>
      </div>
    </div>
  );
};

export default ButtonPrimaryWithIconLeft;
