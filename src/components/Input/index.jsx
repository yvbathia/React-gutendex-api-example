import React, { useState } from "react";
import s from "./Input.module.scss";
import PropTypes from "prop-types";
import { ReactComponent as SearchIcon } from "../../Images/Search.svg";
import { ReactComponent as Cross } from "../../Images/Cancel.svg";

const propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const Input = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const handleOnChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <div className={s.root}>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.container}>
          <button className={s.search}>
            <SearchIcon />
          </button>
          <input onChange={handleOnChange} value={value} placeholder="Search" />
          <button
            onClick={() => {
              setValue("");
            }}
            className={s.cross}
          >
            <Cross />
          </button>
        </div>
      </form>
    </div>
  );
};

Input.propTypes = propTypes;
export default Input;
