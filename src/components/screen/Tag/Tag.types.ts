import { Color } from "../../../types/Color.types";

export type TagProps = {
  className?: string;
  tagName: string;
  bgColor?: Color | null;
  color?: Color | null;
  margin?: number | "auto";
  marginTop?: number | "auto";
  flexGrow?: number;
  flexShrink?: number;
  border?: string;
};
