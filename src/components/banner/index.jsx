import styles from "./index.module.css";

function Banner() {
  return (
    <div className={styles["banner"]}>
      <div className={styles["banner-content"]}>
        <h1 className={styles["banner-heading"]}>We are pioneers of </h1>
        <h1 className={styles["banner-heading"]}>AI solutions</h1>
        <p className={styles["banner-text"]}>
          We build AI-driven solutions that power business growth and transform strategies into success.
        </p>
      </div>
    </div>
  );
}

export default Banner;
