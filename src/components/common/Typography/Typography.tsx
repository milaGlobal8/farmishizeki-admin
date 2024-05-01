import classNames from "classnames";
import { COLOR } from "../../../constants/color";
import styles from "./Typography.module.scss";
import { TypographyProps } from "./Typography.types";

const Typography = (props: TypographyProps) => {
  const {
    children,
    className,
    family = "Hiragino Sans",
    fontSize = "medium",
    bgColor,
    color = COLOR.B1,
    textAlign,
    textDecoration,
    textShadow,
    fontWeight,
    display,
    justifyContent,
    alignItems,
    gap,
    height,
    width,
    padding,
    paddingX,
    paddingY,
    margin,
    marginTop,
    borderRadius,
    lineHeight
  } = props;
  return (
    <span
      className={classNames(styles.typography, className)}
      style={{
        backgroundColor: bgColor ? `var(--${bgColor})` : undefined,
        color: color ? `var(--${color})` : undefined,
        textAlign: textAlign,
        textDecoration: textDecoration,
        textShadow: textShadow,
        fontFamily: family,
        fontSize: fontSize,
        fontWeight: fontWeight,
        display: display,
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: gap,
        height: height,
        width: width,
        padding: padding,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        margin: margin,
        marginTop: marginTop,
        borderRadius: borderRadius,
        lineHeight: lineHeight,
      }}
    >
      {children}
    </span>
  );
};

export default Typography;
