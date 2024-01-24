import { COLOR } from "../../../constants/color";
import { Flexbox } from "../../common";
import InputCard from "../InputCard/InputCard";
import styles from "./GramCards.module.scss";
import { GramCardsProps } from "./GramCards.types";

const GramCards = (props: GramCardsProps) => {
  const { vegs } = props;

  return (
    <Flexbox className={styles.gramCards} flexDirection="column" gap={50}>
      {vegs.map((veg) => (
        <Flexbox key={veg.id} className="box" flexDirection="column" gap={40}>
          {/* A品 */}
          <InputCard
            alt={veg.name}
            image={veg.image}
            name={veg.name}
            value={veg.aGramStock}
            fieldName="aGramStock"
            tagName="A品"
            tagBgColor={COLOR.GOLD1}
            tagColor={COLOR.W1}
          />
          {/* B品 */}
          <InputCard
            alt={veg.name}
            image={veg.image}
            name={veg.name}
            value={veg.bGramStock}
            fieldName="bGramStock"
            tagName="B品"
            tagBgColor={COLOR.SILVER1}
            tagColor={COLOR.W1}
          />
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default GramCards;
