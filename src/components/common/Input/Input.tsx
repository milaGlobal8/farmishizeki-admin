import { forwardRef } from "react";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

// refを受け取るためにforwardRefで囲んでいる
const Input = forwardRef((props: InputProps, ref) => {
  const {
    className,
    autoComplete,
    autoFocus,
    required = true,
    id,
    placeholder,
    type,
    value,
    register,
    registerOptions,
    borderWidth,
    borderStyle,
    borderColor,
    borderRadius,
    bgColor,
    color,
    maxHeight = 56,
    maxWidth = 396,
    height,
    width,
    padding = 5,
    margin,
    textAlign,
    onChange,
  } = props;

  return (
    <div className={styles.input_box}>
      <input
        className={className}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        required={required}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        {...(id && register && { ...register(id, registerOptions) })}
        onChange={onChange}
        style={{
          borderWidth: borderWidth,
          borderStyle: borderStyle,
          borderColor: borderColor ? `var(--${borderColor})` : undefined,
          borderRadius: borderRadius,
          backgroundColor: bgColor ? `var(--${bgColor})` : undefined,
          color: color ? `var(--${color})` : undefined,
          maxHeight: maxHeight,
          maxWidth: maxWidth,
          height: height,
          width: width,
          padding: padding,
          margin: margin,
          textAlign: textAlign,
        }}
      />
    </div>
  );
});

export default Input;
