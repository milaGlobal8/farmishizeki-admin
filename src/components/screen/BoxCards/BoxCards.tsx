import { Vegs } from "../../../types/Vegs.types";
import { Box, Flexbox } from "../../common";
import { Card } from "../Card";
import { Loading } from "../Loading";
import { BoxCardsProps } from "./BoxCards.types";

const BoxCards = (props: BoxCardsProps) => {
  const { vegs } = props;

  return (
    <Flexbox
      className="BoxCards"
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
            stockA={veg.aBoxStock}
            stockB={veg.bBoxStock}
            fieldNameA="aBoxStock"
            fieldNameB="bBoxStock"
          />
        ))
      )}
    </Flexbox>
  );
};

export default BoxCards;
