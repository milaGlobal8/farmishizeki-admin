import Logo from "../../../assets/logo/logo.jpg";
import { Image } from "../../common";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <Image className={styles.header} src={Logo} alt="ロゴ" />
    </>
  );
};

export default Header;
