import styles from "../../../ui/dashboard/operators/addOperator/addOperator.module.css";

const AddOperator = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="E-mail" name="email" required />
        <input type="password" placeholder="Senha" name="password" required />
        <input type="text" placeholder="Telefone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
            Operator
          </option>
          <option value={true}>Admin</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>
            Ativado
          </option>
          <option value={false}>Desativado</option>
        </select>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddOperator;
