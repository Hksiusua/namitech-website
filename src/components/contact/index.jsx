import React from "react";
import { LeftCircleOutlined } from "@ant-design/icons";
import styles from "./index.module.css";

function Contact() {
  return (
    <div className={styles["contact-container"]}>
      <div className={`${styles["contact-icon"]} pb-5 `}>
        <LeftCircleOutlined style={{ fontSize: "1rem" }} />
      </div>
      <div className={`${styles["contact-text"]} `}>Contact</div>
    </div>
  );
}

export default Contact;
