import { COLOR } from "../../../constants/color";
import { Flexbox } from "../../common";
import InputCard from "../InputCard/InputCard";
import styles from "./PriceCards.module.scss";
import { PriceCardsProps } from "./PriceCards.types";

const PriceCards = (props: PriceCardsProps) => {
  const { vegs } = props;

  return (
    <Flexbox className={styles.priceCards} flexDirection="column" gap={50}>
      {vegs.map((veg) => (
        // 品種ごとに展開する
        <Flexbox key={veg.id} className="box" flexDirection="column" gap={40}>
          {/* A品 */}
          {/* 袋 */}
          <InputCard
            alt={veg.name}
            image={veg.image}
            name={veg.name}
            value={veg.aBagPrice}
            fieldName="aBagPrice"
            tagName="A品"
            tagBgColor={COLOR.GOLD1}
            tagColor={COLOR.W1}
          />
          {/* 箱 */}
          <InputCard
            alt={veg.name}
            image={veg.image}
            name={veg.name}
            value={veg.aBoxPrice}
            fieldName="aBoxPrice"
            tagName="A品"
            tagBgColor={COLOR.GOLD1}
            tagColor={COLOR.W1}
          />
          {/* 量り売り */}
          <InputCard
            alt={veg.name}
            image={veg.image}
            name={veg.name}
            value={veg.aGramPrice}
            fieldName="aGramPrice"
            tagName="A品"
            tagBgColor={COLOR.GOLD1}
            tagColor={COLOR.W1}
          />
          {/* B品 */}
          {/* 袋 */}
          <InputCard
            alt={veg.name}
            image={veg.image}
            name={veg.name}
            value={veg.bBagPrice}
            fieldName="bBagPrice"
            tagName="B品"
            tagBgColor={COLOR.SILVER1}
            tagColor={COLOR.W1}
          />
          {/* 箱 */}
          <InputCard
            alt={veg.name}
            image={veg.image}
            name={veg.name}
            value={veg.bBoxPrice}
            fieldName="bBoxPrice"
            tagName="B品"
            tagBgColor={COLOR.SILVER1}
            tagColor={COLOR.W1}
          />
          {/* 量り売り */}
          <InputCard
            alt={veg.name}
            image={veg.image}
            name={veg.name}
            value={veg.bGramPrice}
            fieldName="bGramPrice"
            tagName="B品"
            tagBgColor={COLOR.SILVER1}
            tagColor={COLOR.W1}
          />
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default PriceCards;
