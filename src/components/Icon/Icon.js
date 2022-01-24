import "./Icon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = (props) => {
  const { size = "md", icon, ...rest } = props;
  return (
    <FontAwesomeIcon className={`ar-icon-${size}`} icon={icon} {...rest} />
  );
};
