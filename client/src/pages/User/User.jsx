import Accounts from '../../components/Accounts/Accounts';
import styles from './User.module.scss';

const User = () => {
  return (
    <main className="bg-dark">
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className={styles.button}>Edit Name</button>
      </div>
      <Accounts />
    </main>
  );
};

export default User;
