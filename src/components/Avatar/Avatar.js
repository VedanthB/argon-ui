import "./Avatar.css";

export const Image = ({ src, username }) => {
  return <img className="ar-avatar-image" src={src} alt={username} />;
};

export const Text = ({ username }) => {
  return <div className="ar-avatar-text"> {username.substring(0, 1)}</div>;
};

export const Avatar = (props) => {
  const {
    badgeColor,
    variant = "text",
    src,
    username,
    size = "md",
    ...rest
  } = props;

  return (
    <div className={`ar-avatar ar-avatar-${size}`} {...rest}>
      {{
        image: <Image src={src} username={username} />,
        text: <Text username={username} />,
      }[variant] || <Text username={username} />}

      {typeof badge !== "undefined" ? (
        <div
          style={{ backgroundColor: `${badgeColor}` }}
          className="ar-avatar-badge na-badge-animate"
        ></div>
      ) : (
        ""
      )}
    </div>
  );
};
