import Link from "next/link";
import Image from "next/image";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import styles from "../../ui/dashboard/operators/operators.module.css";

const OperatorsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/operators/add">
          <button className={styles.addButton}>Novo Operador</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>E-mail</td>
            <td>Criado em</td>
            <td>Tipo</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                <p>Giovanni Montanari</p>
              </div>
            </td>
            <td>giovanni@giovanni.com</td>
            <td>13/03/2014</td>
            <td>Admin</td>
            <td>Ativo</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default OperatorsPage;
