import { Vegs } from "../../../types/Vegs.types";
import { Box, Flexbox } from "../../common";
import { Card } from "../Card";
import { Loading } from "../Loading";
import { BagCardsProps } from "./BagCards.types";

const BagCards = (props: BagCardsProps) => {
  const { vegs } = props;

  return (
    <Flexbox
      className="bagCards"
      flexDirection="column"
      flexGrow={1}
      gap={30}
      alignItems="center"
      borderRadius={4}
      minHeight="100vh"
    >
      {vegs.length === 0 ? (
        <Box textAlign="center" marginTop={100}>
          <Loading loadingMsg="取得中です。しばらくお待ちください。" />
        </Box>
      ) : (
        vegs.map((veg: Vegs) => (
          <Card
            key={veg.id}
            src={veg.image}
            alt={veg.alt}
            name={veg.name}
            stockA={veg.aBagStock}
            stockB={veg.bBagStock}
            fieldNameA="aBagStock"
            fieldNameB="bBagStock"
          />
        ))
      )}
    </Flexbox>
  );
};

export default BagCards;
