import React from "react";
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';
import "./Button.scss";
import classNames from "classnames";

const Button = ({
  value,
  name,
  type,
  isDisabled,
  onButtonClick,
  onButtonSubmit,
  isHidden,
  customClass,
  isLoading
}) => {

  const classes = classNames({
    "button": true,
    "button--loading": isLoading,
  });

  return (
    <button
      className={`${classes} ${customClass}`}
      type={type}
      name={name}
      onClick={onButtonClick}
      onSubmit={onButtonSubmit}
      disabled={isDisabled}
      hidden={isHidden}
    >
      {isLoading ? <ReactLoading width={20} height={20} color="#89d0df" type="spin" /> : value}
    </button>
  );
};

Button.propTypes = {
  /** Button label string */
  value: PropTypes.node,

  /** Button type string */
  type: PropTypes.oneOf(["button", "submit"]),

  /** Button name */
  name: PropTypes.string,

  /** Disabling button */
  isDisabled: PropTypes.bool,

  /** Prop for on click function */
  onButtonClick: PropTypes.func,

  /** Prop for a submit function */
  onButtonSubmit: PropTypes.func,

  /** Custom button class */
  customClass: PropTypes.string,

  /** is button loading then show loader */
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  value: "Submit",
  type: "button",
  name: "button",
  isDisabled: false,
  onButtonClick: () => {},
  onButtonSubmit: () => {},
  customClass: '',
  isLoading: false,
};

export default Button;
