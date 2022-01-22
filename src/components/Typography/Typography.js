import "./Typography.css";

export const Typography = (props) => {
  const {
    variant = "body1",
    display = "block",
    align = "inherit",
    children,
    ...rest
  } = props;
  return (
    {
      h1: (
        <h1
          className="ar-h1"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </h1>
      ),
      h2: (
        <h2
          className="ar-h2"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </h2>
      ),
      h3: (
        <h3
          className="ar-h3"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </h3>
      ),
      h4: (
        <h4
          className="ar-h4"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </h4>
      ),
      h5: (
        <h5
          className="ar-h5"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </h5>
      ),
      h6: (
        <h6
          className="ar-h6"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </h6>
      ),
      body1: (
        <p
          className="ar-body1"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </p>
      ),
      body2: (
        <p
          className="ar-body2"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </p>
      ),
      subtitle1: (
        <h6
          className="ar-subtitle1"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </h6>
      ),
      subtitle2: (
        <h6
          className="ar-subtitle2"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </h6>
      ),
      "button-text": (
        <span
          className="ar-button-text"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </span>
      ),
      "caption-text": (
        <span
          className="ar-caption-text"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </span>
      ),
      "overline-text": (
        <span
          className="ar-overline-text"
          style={{ display: `${display}`, textAlign: `${align}` }}
          {...rest}
        >
          {children}
        </span>
      ),
    }[variant] || (
      <p
        className="ar-body1"
        style={{ display: `${display}`, textAlign: `${align}` }}
        {...rest}
      >
        {children}
      </p>
    )
  );
};
