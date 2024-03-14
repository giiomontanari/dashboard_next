import styles from "./card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.description}>
          <span className={styles.title}>Nome:</span>
          <p className={styles.name}>Rosa</p>
        </div>
        <div className={styles.operator}>
          <Image
            className={styles.userImage}
            src="/noavatar.png"
            alt=""
            width="25"
            height="25"
          />
        </div>
      </div>
      <div className={styles.mid}>
        <span className={styles.title}>occorrência:</span>
        <p className={styles.name}>Agressão física</p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.time}>há 1 min</p>
      </div>
    </div>
  );
};

export default Card;
