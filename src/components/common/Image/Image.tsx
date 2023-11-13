import styles from "./Image.module.scss";
import { ImageProps } from "./Image.types";

const Image = (props: ImageProps) => {
  const { alt, className, src } = props;

  return (
    <div className={className}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
};

export default Image;
