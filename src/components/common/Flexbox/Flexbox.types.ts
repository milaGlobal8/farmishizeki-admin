import { ReactNode } from "react";
import { Color } from "../../../types/Color.types";

export type FlexboxProps = {
  children?: ReactNode;
  className?: string;
  justifyContent?:
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "end";
  alignItems?: "start" | "center" | "end";
  flexDirection?: "column";
  gap?: number;
  flexWrap?: "wrap";
  flexGrow?: number;
  flexShrink?: number;
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number | "100vh";
  minWidth?: number;
  height?: number | "auto" | "100%";
  width?: number | "auto" | "100%";
  padding?: number | "auto";
  paddingTop?: number | "auto";
  paddingRight?: number | "auto";
  margin?: number | "auto";
  marginTop?: number | "auto";
  marginLeft?: number | "auto";
  marginRight?: number | "auto";
  border?: string;
  borderWidth?: number;
  borderStyle?: "solid";
  borderColor?: Color | null;
  borderLeftWidth?: number;
  borderLeftColor?: Color | null;
  borderRadius?: number;
  bgColor?: Color | null;
  color?: Color | null;
  opacity?: number;
};
