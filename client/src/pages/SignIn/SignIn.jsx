import styles from './SignIn.module.scss';

const SignIn = () => {
  return (
    <main className="bg-dark">
      <section className={styles.content}>
        <i className={`fa fa-user-circle ${styles.icon}`}></i>
        <h1>Sign In</h1>
        <form>
          <div className={styles.input}>
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={styles.input}>
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={styles.remember}>
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <a href="/user" className={styles.button}>
            Sign In
          </a>
          {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
        </form>
      </section>
    </main>
  );
};

export default SignIn;
