import styles from './Login.module.scss';
import { useLoginMutation } from '../../app/services/api';
import { setCredentials } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  const [login, { data, isLoading, error, isError, isSuccess }] =
    useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ email: '', password: '' });

  const submitLogin = async (e) => {
    try {
      e.preventDefault();
      const d = await login({
        email: 'tony@stark.com',
        password: 'password123',
      }).unwrap();
      console.log(d);
      dispatch(setCredentials({ token: d.body.token, name: 'tony' }));
      //dispatch(setCredentials(user));
      navigate('/');
      //console.log('RESPONS: ', response.data);
    } catch (err) {
      console.error('Failed to login: ', err);
    } finally {
      e.target.reset();
    }
  };

  return (
    <main className="bg-dark">
      <section className={styles.content}>
        <i className={`fa fa-user-circle ${styles.icon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => submitLogin(e)}>
          <div className={styles.input}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={styles.input}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={styles.remember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
