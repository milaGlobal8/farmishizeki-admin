import { ReactNode } from "react";
import { Color } from "../../../types/Color.types";

export type BoxProps = {
  children?: ReactNode;
  className?: string;
  borderWidth?: number;
  borderStyle?: string;
  borderColor?: Color | null;
  bgColor?: Color | null;
  color?: Color | null;
  textAlign?: "start" | "center" | "end";
  maxHeight?: number | "auto" | "100%";
  maxWidth?: number | "auto" | "100%";
  height?: number | "auto" | "100%";
  width?: number | "auto" | "100%";
  padding?: number;
  paddingX?: number | "auto";
  margin?: number;
  marginX?: number | "auto";
  marginTop?: number | "auto";
};
