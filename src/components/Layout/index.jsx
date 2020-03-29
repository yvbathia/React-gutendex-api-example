import React from "react";
// import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import s from "./Layout.module.scss";

const propType = {
  children: PropTypes.node.isRequired,
  setSearch: PropTypes.func
};

const Layout = ({ children, setSearch }) => {
  return (
    <div className={s.root}>
      {/* <Helmet>
        <link rel="stylesheet" href={`/fonts/fonts.css`} />
      </Helmet> */}
      <div className={s.child}>{children}</div>
    </div>
  );
};

Layout.propType = propType;
export default Layout;
