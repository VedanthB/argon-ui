/* eslint-disable react/no-children-prop */
import React from "react";
import PropTypes from "prop-types";

import "./Paper.css";

const Outlined = ({ children, square, ...rest }) => {
  return square ? (
    <div className="ar-paper ar-paper-square ar-paper-outlined" {...rest}>
      {children}
    </div>
  ) : (
    <div className="ar-paper ar-paper-outlined" {...rest}>
      {children}
    </div>
  );
};
const Shadow = ({ children, shadow, square, ...rest }) => {
  return square ? (
    <div
      className={`ar-paper ar-paper-square ar-paper-shadow-${shadow}`}
      {...rest}
    >
      {children}
    </div>
  ) : (
    <div className={`ar-paper  ar-paper-shadow-${shadow}`} {...rest}>
      {children}
    </div>
  );
};

export const Paper = ({
  shadow = 2,
  variant = "shadow",
  square = false,
  children,
  ...rest
}) => {
  //   const  = props;
  return (
    {
      outlined: <Outlined children={children} square={square} {...rest} />,
      shadow: (
        <Shadow shadow={shadow} children={children} square={square} {...rest} />
      ),
    }[variant] || (
      <Shadow shadow={shadow} children={children} square={square} {...rest} />
    )
  );
};

Paper.propTypes = {
  variant: PropTypes.string,
  square: PropTypes.bool,
  children: PropTypes.element,
  shadow: PropTypes.number,
};
