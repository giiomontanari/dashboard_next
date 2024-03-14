import styles from "../ui/dashboard/dashboard.module.css";
import Board from "../ui/dashboard/board/board";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.boards}>
          <Board titleBoard="EM ABERTO" />
          <Board titleBoard="EM ANDAMENTO" />
          <Board titleBoard="FINALIZADO" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
