import { BoxProps } from "./Box.types";

const Box = (props: BoxProps) => {
  const {
    children,
    className,
    borderWidth,
    borderStyle,
    borderColor,
    bgColor,
    color,
    textAlign,
    maxHeight,
    maxWidth,
    height,
    width,
    padding,
    paddingX,
    margin,
    marginX,
    marginTop,
  } = props;

  return (
    <div
      className={className}
      style={{
        borderWidth: borderWidth,
        borderStyle: borderStyle,
        borderColor: borderColor ? `--var(${borderColor})` : undefined,
        backgroundColor: bgColor ? `--var(${bgColor})` : undefined,
        color: color ? `--var(${color})` : undefined,
        textAlign: textAlign,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        height: height,
        width: width,
        padding: padding,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        margin: margin,
        marginLeft: marginX,
        marginRight: marginX,
        marginTop: marginTop,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
