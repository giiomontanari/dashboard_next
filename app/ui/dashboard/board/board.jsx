import styles from "./board.module.css";
import Card from "../card/card";

const Board = () => {
  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <p>EM ABERTO</p>
      </div>
      <Card />
      <Card />
    </div>
  );
};

export default Board;
