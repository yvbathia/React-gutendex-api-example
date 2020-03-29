import React from "react";
import s from "./CardButton.module.scss";
import PropTypes from "prop-types";
import { ReactComponent as Next } from "../../Images/Next.svg";

const propTypes = {
  text: PropTypes.string.isRequired,
  logo: PropTypes.any.isRequired,
  onClick: PropTypes.func
};

const defaultProps = {
  onClick: () => {}
};

const CardButton = ({ text, logo: Logo, onClick }) => {
  return (
    <div className={s.root} onClick={onClick}>
      <div className={s.text}>
        <Logo />
        <span>{text}</span>
      </div>
      <Next />
    </div>
  );
};

CardButton.defaultProps = defaultProps;
CardButton.propTypes = propTypes;
export default CardButton;
