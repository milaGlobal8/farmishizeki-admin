export const COLOR = {
  B1: "b1",
  B2: "b2",
  W1: "w1",
  W2: "w2",
  RED1: "red1",
  BLUE1: "blue1",
  GREEN1: "green1",
  GREEN2: "green2",
  GREEN3: "green3",
  ORANGE1: "orange1",
  ORANGE2: "orange2",
  ORANGE3: "orange3",
  ORANGE4: "orange4",
  PINK1: "pink1",
  PINK2: "pink2",
  GOLD1: "gold1",
  SILVER1: "silver1",
  ERROR1: "error1",
  ERROR2: "error2",
  ERROR3: "error3",
  SUCCESS1: "success1",
  SUCCESS2: "success2",
  SUCCESS3: "success3",
} as const;

// as const : const assertionという機能でObjや値をreadonly(再代入不可)にする機能
//「const assertion」はreadonlyにしたい変数の末尾に「as const」をつけることで実現できる
