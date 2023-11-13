import ReactLoading from "react-loading";
import { COLOR } from "../../../constants/color";
import { Flexbox, Typography } from "../../common";
import { LoadingProps } from "./Loading.types";

const Loading = (props: LoadingProps) => {
  const { loadingMsg } = props;

  return (
    <Flexbox flexDirection="column" alignItems="center" gap={30}>
      <ReactLoading
        type="spin"
        color="#eaa31a"
        height="80px"
        width="80px"
        // className="mx-auto"
      />
      <Typography color={COLOR.ORANGE1}>{loadingMsg}</Typography>
    </Flexbox>
  );
};

export default Loading;
