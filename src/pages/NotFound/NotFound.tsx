import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={`${styles.neoText} ${styles.pulsate}`}>404</h1>
      <h2 className={`${styles.neoText} ${styles.pulsate}`}>Page Not Found</h2>
      <button
        className={`${styles.neoText} ${styles.pulsate} ${styles.btn}`}
        onClick={() => navigate("/")}
      >
        ホームへ戻る
      </button>
    </div>
  );
};

export default NotFound;
