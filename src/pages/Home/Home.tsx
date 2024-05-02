import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import { Button, Flexbox, Image, Typography } from "../../components/common";
import {
  BagCards,
  BoxCards,
  GramCards,
  Header,
  PriceCards,
  Version,
} from "../../components/screen";
import { COLOR } from "../../constants/color";
import { firebaseApp } from "../../firebase/firebaseConfig";
import { useLogout } from "../../hooks/useAuth";
import { useFetch } from "../../hooks/useFirebase";
import { useNav } from "../../hooks/useNav";
import styles from "./Home.module.scss";

const Home = () => {
  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    // ログインしていない場合は、ログインページへリダイレクトする
    firebaseApp.fireauth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);

  // カスタムフック
  const { logout } = useLogout();
  const { vegs } = useFetch("Vegs");
  const { target, navigateHooks } = useNav();

  const handleLogout = () => {
    logout();
  };

  return (
    <Flexbox
      className="home_page"
      flexDirection="column"
      minHeight="100vh"
      gap={30}
    >
      {/* ロゴ */}
      <Header />
      {/* ログアウトボタン */}
      <Button
        onClick={handleLogout}
        height={30}
        width="auto"
        bgColor={COLOR.W2}
      >
        <Image
          className={styles.icon_container}
          src={LogoutIcon}
          alt="ログアウトアイコン"
        />
      </Button>
      {/* ナビゲーションバー */}
      {/* <Navbar /> */}
      <Flexbox
        justifyContent="space-evenly"
        alignItems="center"
        bgColor={COLOR.W1}
        height={60}
      >
        <Button
          bgColor={COLOR.W1}
          color={target === "袋" ? COLOR.ORANGE4 : COLOR.B1}
          fontWeight="bold"
          height={30}
          width={60}
          textAlign="center"
          opacity={target === "袋" ? 1 : 0.3}
          onClick={(e) => navigateHooks(e)}
        >
          袋
        </Button>
        <Button
          bgColor={COLOR.W1}
          color={target === "箱" ? COLOR.ORANGE4 : COLOR.B1}
          fontWeight="bold"
          height={30}
          width={60}
          textAlign="center"
          opacity={target === "箱" ? 1 : 0.3}
          onClick={(e) => navigateHooks(e)}
        >
          箱
        </Button>
        <Button
          bgColor={COLOR.W1}
          color={target === "g" ? COLOR.ORANGE4 : COLOR.B1}
          fontWeight="bold"
          height={30}
          width={60}
          textAlign="center"
          opacity={target === "g" ? 1 : 0.3}
          onClick={(e) => navigateHooks(e)}
        >
          g
        </Button>
        <Button
          bgColor={COLOR.W1}
          color={target === "値段" ? COLOR.ORANGE4 : COLOR.B1}
          fontWeight="bold"
          height={30}
          width={60}
          textAlign="center"
          opacity={target === "値段" ? 1 : 0.3}
          onClick={(e) => navigateHooks(e)}
        >
          値段
        </Button>
      </Flexbox>
      {/* カード一覧 */}
      {target === "袋" && <BagCards vegs={vegs} />}
      {target === "箱" && <BoxCards vegs={vegs} />}
      {target === "g" && <GramCards vegs={vegs} />}
      {target === "値段" && <PriceCards vegs={vegs} />}
      {/* アプリバージョン情報 */}
      <Version>
        <Typography>Version 1.1.0</Typography>
      </Version>
    </Flexbox>
  );
};

export default Home;
