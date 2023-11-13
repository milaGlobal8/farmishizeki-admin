import { Flexbox } from "../../common";
import InputCards from "../InputCard/InputCard";
import styles from "./GramCards.module.scss";
import { GramCardsProps } from "./GramCards.types";

const GramCards = (props: GramCardsProps) => {
  const { vegs } = props;

  return (
    <Flexbox className={styles.gramCards} flexDirection="column" gap={50}>
      {vegs.map((veg) => (
        <Flexbox key={veg.id} className="box" flexDirection="column" gap={40}>
          {/* A品 */}
          <InputCards
            alt={veg.name}
            image={veg.image}
            name={veg.name}
            value={veg.aGramStock}
            fieldName="aGramStock"
          />
          {/* B品 */}
          <InputCards
            alt={veg.name}
            image={veg.image}
            name={veg.name}
            value={veg.bGramStock}
            fieldName="bGramStock"
          />
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default GramCards;
