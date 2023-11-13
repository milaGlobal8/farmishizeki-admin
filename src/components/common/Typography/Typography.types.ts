import { ReactNode } from "react";
import { Color } from "../../../types/Color.types";

export type TypographyProps = {
  children?: ReactNode;
  className?: string;
  family?:
    | "Hiragino Sans"
    | "Hiragino Kaku Gothic Pro"
    | "sans-serif"
    | "serif";
  fontSize?: "small" | "medium" | "large" | "x-large" | number;
  bgColor?: Color | null;
  color?: Color | null;
  textAlign?: "start" | "center" | "end" | "justify";
  textDecoration?: "underline #fba30c" | "none";
  textShadow?: string;
  fontWeight?: "normal" | "bold" | "lighter" | "bolder";
  display?: "flex";
  justifyContent?:
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "end";
  alignItems?: "start" | "center" | "end";
  gap?: number;
  height?: number | "auto" | "100%";
  width?: number | "auto" | "100%";
  padding?: number | "auto" | "100%";
  paddingX?: number | "auto";
  paddingY?: number | "auto";
  margin?: number | "auto" | "100%";
  borderRadius?: number;
};
