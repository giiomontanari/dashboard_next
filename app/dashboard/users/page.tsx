import Link from "next/link";
import Image from "next/image";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import styles from "../../ui/dashboard/users/users.module.css";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user" />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>E-mail</td>
            <td>Tipo</td>
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
            <td>Admin</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
