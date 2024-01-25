import classNames from "classnames";
import { useEffect, useState } from "react";
import { COLOR } from "../../../constants/color";
import { useUpdate } from "../../../hooks/useFirebase";
import { Button, Flexbox, Form, Image, Input, Typography } from "../../common";
import { Tag } from "../Tag";
import { Dictionary, InputCardProps } from "./InputCard.types";
import styles from "./InputCards.module.scss";

const InputCard = (props: InputCardProps) => {
  const { alt, image, name, value, fieldName, tagName, tagBgColor, tagColor } =
    props;

  // state
  const [stock, setStock] = useState<number | undefined>(value);
  const [salesMethod, setSalesMethod] = useState<string | undefined>("");

  // hooks
  const { updateGram } = useUpdate();

  // fieldNameが「販売形態＋Price」の場合のみ、販売形態を日本語に変更
  useEffect(() => {
    if (fieldName?.indexOf("Price") !== -1) {
      // fieldNameのインデックス1からPのインデックスまでを切り取り変数に格納
      // なお元の文字列は破壊しない
      let method: string | undefined = fieldName?.substring(
        1,
        fieldName?.indexOf("P")
      );
      // methodの中身に応じて日本語訳に変更
      // 辞書
      const dictionary: Dictionary = {
        Bag: "袋",
        Box: "箱",
        Gram: "グラム",
      };
      // プロパティに合致した値を返す
      if (method && method in dictionary) {
        // 日本語を再代入
        setSalesMethod(dictionary[method]);
      }
    }
  }, []);

  return (
    <Form
      className={classNames(styles.form, fieldName)}
      onSubmit={(e) => updateGram(e, stock, name)}
    >
      <Flexbox
        className={styles.card}
        flexDirection="column"
        gap={10}
        bgColor={COLOR.W1}
      >
        {/* 画像と品種名 */}
        <Flexbox justifyContent="space-between">
          <Image className={styles.img_area} src={image} alt={alt} />
          <Typography fontWeight="bold">{name}</Typography>
        </Flexbox>
        {/* fieldNameにPriceが含まれていた場合、「販売形態」を表示する */}
        <Flexbox justifyContent="end">
          <Typography fontWeight="bolder" fontSize="large" color={COLOR.ORANGE1}>{salesMethod}</Typography>
        </Flexbox>
        {/* 変更前の「値段」or「グラム」 */}
        <Flexbox justifyContent="space-between">
          <Tag tagName={tagName} bgColor={tagBgColor} color={tagColor} />
          <Typography fontWeight="bold">
            変更前：{value}
            {/* fieldNameにPriceが含まれていた場合、単位は「円」falseなら「g」を表示 */}
            {fieldName?.indexOf("Price") !== -1 ? "円" : "g"}
          </Typography>
        </Flexbox>
        {/* 入力欄 */}
        <Input
          required
          type="number"
          value={stock}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            // string型で渡されるのでセット関数に渡すときに整数に変換している
            setStock(parseInt(e.target.value, 10));
          }}
        />
        {/* 更新ボタン */}
        <Button
          className={styles.btn}
          type="submit"
          bgColor={COLOR.ORANGE3}
          color={COLOR.ORANGE4}
          height={30}
          padding={1}
          textAlign="center"
        >
          更新
        </Button>
      </Flexbox>
    </Form>
  );
};

export default InputCard;
