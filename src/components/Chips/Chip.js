import "./Chip.css";

export const Chip = (props) => {
  const {
    size = "md",
    kind = "outline",
    variant = "primary",
    children,
    ...rest
  } = props;
  return (
    <div
      className={`ar-chip ar-chip-${size} ar-chip-${kind} ar-chip-${variant}`}
      {...rest}
    >
      {children}
    </div>
  );
};
