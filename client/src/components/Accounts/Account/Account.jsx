import styles from './Account.module.scss';

const Account = ({ title, amount, balance }) => {
  return (
    <section className={styles.account}>
      <div className={styles.content}>
        <h3 className={styles.title}>Argent Bank {title}</h3>
        <p className={styles.amount}>${amount}</p>
        <p>{balance} Balance</p>
      </div>
      <div className={`${styles.content} ${styles.cta}`}>
        <button className={styles.button}>View transactions</button>
      </div>
    </section>
  );
};

export default Account;
