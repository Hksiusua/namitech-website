import React from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import styles from "./index.module.css";
import Contact from '../../components/contact';

function OverView() {
  return (
    <div className={styles["overview-container"]}>
      <Contact/>
      <div className={styles["header-wrapper"]}>
        <Header />
      </div>
      <Banner />
    </div>
  );
}

export default OverView;
