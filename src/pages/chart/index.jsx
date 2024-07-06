// rafce リアクトの雛形が作れるショートカットです🤗

import React from "react";
// cssを紐づける
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";

const Chart = () => {
  return (
    <>
      <Header />
      <div className={styles.chart}>
        {/*  */}
        <SideBar />
        {/*  */}
      </div>
    </>
  );
};

export default Chart;