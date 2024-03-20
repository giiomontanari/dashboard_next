import styles from "../../../ui/dashboard/operators/addOperator/addOperator.module.css";

const AddOperator = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Nome" name="name" required />
        <input type="email" placeholder="E-mail" name="email" required />
        <input type="password" placeholder="Senha" name="password" required />
        <input type="text" placeholder="Telefone" name="phone" required />
        <select name="type" id="type">
          <option value="operator">Operator</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddOperator;
