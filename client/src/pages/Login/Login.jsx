import LoginForm from './LoginForm/LoginForm';
import styles from './Login.module.scss';

/**
 *
 * The Login page is a simple container of the LoginForm component
 */
const Login = () => {
  return (
    <main className="bg-dark">
      <section className={styles.content}>
        <i className={`fa fa-user-circle ${styles.icon}`}></i>
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </main>
  );
};

export default Login;
