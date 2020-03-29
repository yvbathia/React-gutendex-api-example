import React from "react";
import Layout from "../../components/Layout";
import { useState } from "react";
import s from "./Home.module.scss";
import Books from "../Books";
import Catagory from "../Catagory";

const Home = () => {
  const [catagory, setCatagory] = useState("");

  const handleOnClick = name => {
    setCatagory(name);
  };

  return (
    <Layout>
      <div className={s.root}>
        {catagory !== "" ? (
          <Books catagory={catagory} onClick={() => setCatagory("")} />
        ) : (
          <Catagory onClick={name => handleOnClick(name)} />
        )}
      </div>
    </Layout>
  );
};

export default Home;
