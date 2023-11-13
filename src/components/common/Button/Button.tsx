import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const {
    children,
    id,
    className,
    type,
    disabled,
    bgColor,
    color,
    height,
    width,
    padding,
    margin,
    marginTop,
    textAlign,
    fontWeight,
    border,
    borderRadius,
    opacity,
    onClick,
  } = props;

  return (
    <button
      id={id}
      className={className}
      type={type}
      disabled={disabled}
      style={{
        backgroundColor: !disabled && bgColor ? `var(--${bgColor})` : "#828282",
        color: color ? `var(--${color})` : undefined,
        height: height,
        width: width,
        padding: padding,
        margin: margin,
        marginTop: marginTop,
        textAlign: textAlign,
        fontWeight: fontWeight,
        border: border,
        borderRadius: borderRadius,
        opacity: opacity,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
