import { Typography } from "../Typography/Typography";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = (props) => {
  const {
    icon,
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
  ) : icon ? (
    <button
      {...rest}
      className={`ar-button .ar-button-icon  ar-button-icon-${size}  ar-button-${variant} ar-button-${kind}`}
    >
      <FontAwesomeIcon icon={icon} />
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
