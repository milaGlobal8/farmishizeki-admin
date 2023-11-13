import { ReactNode } from "react";
import { Color } from "../../../types/Color.types";

export type ButtonProps = {
  children?: ReactNode;
  id?: string;
  className?: string;
  type?: "submit";
  disabled?: boolean;
  bgColor?: Color | null;
  color?: Color | null;
  height?: number | "auto" | "100%";
  width?: number | "auto" | "100%";
  padding?: number | "auto";
  margin?: number | "auto";
  marginTop?: number | "auto";
  textAlign?: "start" | "center" | "end";
  fontWeight?: "normal" | "bold" | "lighter" | "bolder";
  border?: string;
  borderRadius?: number;
  opacity?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
