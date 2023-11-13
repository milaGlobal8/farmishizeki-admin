import { Flexbox } from "../../common";
import { VersionProps } from "./Version.types";

const Version = (props: VersionProps) => {
  const { children } = props;

  return (
    <Flexbox className="version" justifyContent="center" alignItems="center">
      {children}
    </Flexbox>
  );
};

export default Version;
