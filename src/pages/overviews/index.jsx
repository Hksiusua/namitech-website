import React from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import styles from "./index.module.css";

function OverView() {
  return (
    <div className={styles["overview-container"]}>
      <div className={styles["header-wrapper"]}>
        <Header />
      </div>
      <Banner />
    </div>
  );
}

export default OverView;
