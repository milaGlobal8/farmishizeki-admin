import { COLOR } from "../constants/color";

export type Color = (typeof COLOR)[keyof typeof COLOR];

// ex)
// const Color = {
//   Red: "red",
//   Green: "green",
//   Blue: "blue",
// } as const;

// type Color = (typeof Color)[keyof typeof Color];
// 上のコードは以下のように評価される
// type Color = "red" | "green" | "blue"

// type X = (typeof X)[keyof typeof X]
// オブジェクトXのプロパティの型をUnion型（type X = "a" | "b"...）で表現する記法
