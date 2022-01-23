import { Typography } from "../Typography/Typography";
import "./Button.css";

export const Button = (props) => {
  const {
    variant = "default",
    children,
    kind = "filled",
    square = true,
    size = "md",
    ...rest
  } = props;
  return square ? (
    <button
      className={`ar-button ar-button-${size} ar-button-square ar-button-${variant} ar-button-${kind}`}
      {...rest}
    >
      <Typography variant="button-text">{children} </Typography>
    </button>
  ) : (
    <button
      {...rest}
      className={`ar-button ar-button-${size}  ar-button-${variant} ar-button-${kind}`}
    >
      <Typography variant="button-text">{children} </Typography>
    </button>
  );
};
