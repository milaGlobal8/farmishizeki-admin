import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { LoginProps } from "../../../pages/Login/Login.types";
import { Color } from "../../../types/Color.types";

export type InputProps = {
  className?: string;
  autoComplete?: "email" | "current-password";
  autoFocus?: boolean;
  required?: boolean;
  id?: "email" | "password";
  placeholder?: "メールアドレス" | "パスワード（8文字以上）";
  type?: "email" | "password" | "number";
  value?: string | number;
  register?: UseFormRegister<LoginProps>;
  registerOptions?: RegisterOptions;
  borderWidth?: number;
  borderStyle?: string;
  borderColor?: Color | null;
  borderRadius?: number;
  bgColor?: Color | null;
  color?: Color | null;
  maxHeight?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  width?: number | string;
  padding?: number | "auto";
  margin?: number | "auto";
  textAlign?: "start" | "center" | "end";
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};
