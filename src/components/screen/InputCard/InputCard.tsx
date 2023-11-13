import classNames from "classnames";
import { useState } from "react";
import { COLOR } from "../../../constants/color";
import { useUpdate } from "../../../hooks/useFirebase";
import { Button, Flexbox, Form, Image, Input, Typography } from "../../common";
import { Tag } from "../Tag";
import { InputCardProps } from "./InputCard.types";
import styles from "./InputCards.module.scss";

const InputCards = (props: InputCardProps) => {
  const { alt, image, name, value, fieldName } = props;

  // state
  const [stock, setStock] = useState<number | undefined>(value);

  // hooks
  const { updateGram } = useUpdate();

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
        <Flexbox justifyContent="space-between">
          <Image className={styles.img_area} src={image} alt={alt} />
          <Typography fontWeight="bold">{name}</Typography>
        </Flexbox>
        <Flexbox justifyContent="space-between">
          <Tag tagName="A品" bgColor={COLOR.GOLD1} color={COLOR.W1} />
          <Typography fontWeight="bold">変更前：{value}g</Typography>
        </Flexbox>
        <Input
          required
          type="number"
          value={stock}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            // string型で渡されるのでセット関数に渡すときに整数に変換している
            setStock(parseInt(e.target.value, 10));
          }}
        />
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

export default InputCards;
