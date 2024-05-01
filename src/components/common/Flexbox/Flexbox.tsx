import classNames from "classnames";
import styles from "./Flexbox.module.scss";
import { FlexboxProps } from "./Flexbox.types";

const Flexbox = (props: FlexboxProps) => {
  const {
    children,
    className,
    justifyContent,
    alignItems,
    flexDirection,
    gap,
    flexWrap,
    flexGrow,
    flexShrink,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    height,
    width,
    padding,
    paddingTop,
    paddingRight,
    margin,
    marginTop,
    marginLeft,
    marginRight,
    border,
    borderWidth,
    borderStyle,
    borderColor,
    borderLeftWidth,
    borderLeftColor,
    borderRadius,
    bgColor,
    color,
    opacity,
    lineHeight,
  } = props;
  return (
    <div
      className={classNames(styles.flex, className)}
      style={{
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexDirection: flexDirection,
        gap: gap,
        flexWrap: flexWrap,
        flexGrow: flexGrow,
        flexShrink: flexShrink,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        minHeight: minHeight,
        minWidth: minWidth,
        height: height,
        width: width,
        padding: padding,
        paddingTop: paddingTop,
        paddingRight: paddingRight,
        margin: margin,
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginRight: marginRight,
        border: border,
        borderWidth: borderWidth,
        borderStyle: borderStyle,
        borderColor: borderColor ? `var(--${borderColor})` : undefined,
        borderLeftWidth: borderLeftWidth,
        borderLeftColor: borderLeftColor
          ? `var(--${borderLeftColor})`
          : undefined,
        borderRadius: borderRadius,
        background: bgColor ? `var(--${bgColor})` : undefined,
        color: color ? `var(--${color})` : undefined,
        opacity: opacity,
        lineHeight: lineHeight,
      }}
    >
      {children}
    </div>
  );
};

export default Flexbox;
