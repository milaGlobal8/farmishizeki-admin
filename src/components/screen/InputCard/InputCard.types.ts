import { Color } from "../../../types/Color.types";

export type InputCardProps = {
  alt?: string;
  fieldName?: string;
  image?: string;
  name?: string;
  value?: number;
  tagName: string;
  tagBgColor?: Color | null;
  tagColor?: Color | null;
};

export type Dictionary = {
  [key: string]: string;
};
