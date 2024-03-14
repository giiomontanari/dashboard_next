import Link from "next/link";
import Search from "../../ui/dashboard/search/search";
import styles from "../../ui/dashboard/users/users.module.css";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Novo Usuário</button>
        </Link>
      </div>
      <table className={styles.table}></table>
    </div>
  );
};

export default UsersPage;
