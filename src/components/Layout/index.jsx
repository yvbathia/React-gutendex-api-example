import React from "react";
// import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import s from "./Layout.module.scss";
import Helmet from "react-helmet";

const propType = {
  children: PropTypes.node.isRequired,
  setSearch: PropTypes.func
};

const Layout = ({ children, setSearch }) => {
  return (
    <div className={s.root}>
      <Helmet defer={false} htmlAttributes={{ lang: "en-US" }}>
        <title>Gutendex</title>
        <link rel="stylesheet" href={`/styles/fonts/fonts.css`} />
        <meta name="description" content="Gutendex api example in react" />
        <meta name="title" content="Gutendex" />
      </Helmet>
      <div className={s.child}>{children}</div>
    </div>
  );
};

Layout.propType = propType;
export default Layout;
