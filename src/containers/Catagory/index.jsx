import React from "react";
import PropTypes from "prop-types";
import s from "./Catagory.module.scss";
import CardButton from "../../components/CardButton";
import { ReactComponent as Fiction } from "../../Images/Fiction.svg";
import { ReactComponent as Drama } from "../../Images/Drama.svg";
import { ReactComponent as Philosophy } from "../../Images/Philosophy.svg";
import { ReactComponent as History } from "../../Images/History.svg";
import { ReactComponent as Humour } from "../../Images/Humour.svg";
import { ReactComponent as Adventure } from "../../Images/Adventure.svg";
import { ReactComponent as Politics } from "../../Images/Politics.svg";

const propTypes = {
  onClick: PropTypes.func.isRequired
};

const Catagory = ({ onClick }) => {
  return (
    <div className={s.root}>
      <div className={s.head}>
        <h1 className={s.title}>Gutenberg Project</h1>
        <p className={s.desc}>
          A social cataloging website that allows you to freely search its
          database of books, annotations, and reviews.
        </p>
      </div>
      <div className={s.catagoryContainer}>
        <div className={s.catagory}>
          <CardButton
            onClick={() => onClick("Fiction")}
            text="Fiction"
            logo={Fiction}
          />
          <CardButton
            onClick={() => onClick("DRAMA")}
            text="DRAMA"
            logo={Drama}
          />
          <CardButton
            onClick={() => onClick("Philosophy")}
            text="Philosophy"
            logo={Philosophy}
          />
          <CardButton
            onClick={() => onClick("History")}
            text="History"
            logo={History}
          />
          <CardButton
            onClick={() => onClick("Humour")}
            text="Humour"
            logo={Humour}
          />
          <CardButton
            onClick={() => onClick("Adventure")}
            text="Adventure"
            logo={Adventure}
          />
          <CardButton
            onClick={() => onClick("Politics")}
            text="Politics"
            logo={Politics}
          />
        </div>
      </div>
    </div>
  );
};

Catagory.propTypes = propTypes;
export default Catagory;
