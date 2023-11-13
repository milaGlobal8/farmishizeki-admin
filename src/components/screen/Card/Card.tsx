import { useState } from "react";
import { COLOR } from "../../../constants/color";
import { useUpdate } from "../../../hooks/useFirebase";
import { Button, Flexbox, Image, Typography } from "../../common";
import { Tag } from "../Tag";
import styles from "./Card.module.scss";
import { CardProps } from "./Card.types";

const Card = (props: CardProps) => {
  const { alt, src, name, stockA, stockB, fieldNameA, fieldNameB } = props;

  // state
  const [error, setError] = useState(false);

  // hooks
  const { updateByClick } = useUpdate();

  return (
    <Flexbox
      className={styles.card}
      flexDirection="column"
      gap={10}
      bgColor={COLOR.W1}
    >
      {error && (
        <Typography color={COLOR.ERROR3}>個数の変更に失敗しました</Typography>
      )}
      <Flexbox className="img_name" justifyContent="space-between">
        {/* 画像 */}
        <Image className={styles.img_area} src={src} alt={alt} />
        {/* 名前 */}
        <Typography className="name" fontWeight="bolder" fontSize={20}>
          {name}
        </Typography>
      </Flexbox>
      {/* タグとカウンター */}
      <Flexbox
        className="name_counter"
        flexDirection="column"
        gap={10}
        flexGrow={1}
      >
        {/* A品 */}
        {/* カウンター */}
        <Flexbox className="tagA_counter" justifyContent="space-around">
          <Tag tagName="A品" bgColor={COLOR.GOLD1} color={COLOR.W1} />
          <Flexbox
            className="counter_area"
            justifyContent="center"
            alignItems="center"
            gap={10}
          >
            <Button
              id={fieldNameA + "_minus"}
              className={styles.minus}
              type="submit"
              disabled={stockA && stockA > 0 ? false : true}
              bgColor={COLOR.ORANGE3}
              color={COLOR.ORANGE4}
              height={30}
              width={30}
              textAlign="center"
              fontWeight="bolder"
              borderRadius={4}
              onClick={(e) =>
                updateByClick(
                  e,
                  setError,
                  fieldNameA,
                  fieldNameB,
                  stockA,
                  stockB,
                  name
                )
              }
            >
              －
            </Button>
            <Typography className="stock" width={20}>
              {stockA}
            </Typography>
            <Button
              id={fieldNameA + "_plus"}
              className={styles.plus}
              type="submit"
              bgColor={COLOR.ORANGE3}
              color={COLOR.ORANGE4}
              height={30}
              width={30}
              textAlign="center"
              fontWeight="bolder"
              borderRadius={4}
              onClick={(e) =>
                updateByClick(
                  e,
                  setError,
                  fieldNameA,
                  fieldNameB,
                  stockA,
                  stockB,
                  name
                )
              }
            >
              +
            </Button>
          </Flexbox>
        </Flexbox>
        {/* B品 */}
        {/* カウンター */}
        <Flexbox className="tagB_counter" justifyContent="space-around">
          <Tag
            tagName="B品"
            bgColor={COLOR.SILVER1}
            color={COLOR.W1}
            marginTop={16}
          />
          <Flexbox
            className="counter_area"
            justifyContent="center"
            alignItems="center"
            gap={10}
          >
            <Button
              id={fieldNameB + "_minus"}
              className={styles.minus}
              type="submit"
              disabled={stockB && stockB > 0 ? false : true}
              bgColor={COLOR.ORANGE3}
              color={COLOR.ORANGE4}
              height={30}
              width={30}
              textAlign="center"
              fontWeight="bolder"
              borderRadius={4}
              onClick={(e) =>
                updateByClick(
                  e,
                  setError,
                  fieldNameA,
                  fieldNameB,
                  stockA,
                  stockB,
                  name
                )
              }
            >
              －
            </Button>
            <Typography className="stock" width={20} textAlign="center">
              {stockB}
            </Typography>
            <Button
              id={fieldNameB + "_plus"}
              className={styles.plus}
              type="submit"
              bgColor={COLOR.ORANGE3}
              color={COLOR.ORANGE4}
              height={30}
              width={30}
              textAlign="center"
              fontWeight="bolder"
              borderRadius={4}
              onClick={(e) =>
                updateByClick(
                  e,
                  setError,
                  fieldNameA,
                  fieldNameB,
                  stockA,
                  stockB,
                  name
                )
              }
            >
              +
            </Button>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
};

export default Card;
