import styles from "./board.module.css";
import Card from "../card/card";

const Board = ({ titleBoard }) => {
  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <p>{titleBoard}</p>
      </div>
      <Card />
      <Card />
    </div>
  );
};

export default Board;
