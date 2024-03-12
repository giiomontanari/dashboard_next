import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span className={styles.span}>Nome:</span>
        <p className={styles.name}>Rosa</p>
      </div>
      <div className={styles.mid}></div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Card;
