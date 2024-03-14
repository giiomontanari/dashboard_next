import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menulink";
import Image from "next/image";
import { MdDashboard, MdLogout, MdOutlineHelpOutline } from "react-icons/md";
import { IoMdSettings, IoIosHelpCircleOutline } from "react-icons/io";
import { FaUsers } from "react-icons/fa";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <FaUsers />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/settings",
        icon: <IoMdSettings />,
      },
      {
        title: "Help",
        path: "/help",
        icon: <MdOutlineHelpOutline />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetails}>
          <span className={styles.username}>Giovanni</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span className={styles.category}>{category.title}</span>
            {category.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
