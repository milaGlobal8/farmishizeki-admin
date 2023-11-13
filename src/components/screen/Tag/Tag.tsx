import classNames from "classnames";
import { Flexbox, Typography } from "../../common";
import styles from "./Tag.module.scss";
import { TagProps } from "./Tag.types";

const Tag = (props: TagProps) => {
  const {
    className,
    tagName,
    bgColor,
    color,
    margin,
    marginTop,
    flexGrow,
    flexShrink,
    border,
  } = props;

  return (
    <Flexbox
      className={classNames(styles.tag, className)}
      justifyContent="center"
      alignItems="center"
      bgColor={bgColor}
      borderRadius={4}
      maxWidth={50}
      margin={margin}
      marginTop={marginTop}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      border={border}
    >
      <Typography color={color} fontWeight="bold" textShadow="1px 1px 1px #000">
        {tagName}
      </Typography>
    </Flexbox>
  );
};

export default Tag;
