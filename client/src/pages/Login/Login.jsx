import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useLoginMutation } from '../../app/api/apiSlice';
import { setCredentials } from '../../features/authSlice';

import styles from './Login.module.scss';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const { email, password } = formState;
  const [login, { data, isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const canSave = [email, password].every(Boolean) && !isLoading;

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
    // console.log(formState);
  };

  const handleSubmit = async (e) => {
    console.log('CanSave:', canSave);
    e.preventDefault();
    if (email && password && !isLoading) {
      try {
        const result = await login(formState); //.unwrap(); // ???
        // console.log(result);
        // console.log(data); // ?? pourquoi on ne voit pas de data
        if (result.data.body.token) {
          dispatch(
            setCredentials({
              token: result.data.body.token,
              user: formState,
            })
          );
          navigate('/profile', { replace: true }); //?? replace
        }
      } catch (err) {
        console.error('Failed to login: ', err);
      } finally {
        e.target.reset();
      }
    }
  };

  return (
    <main className="bg-dark">
      <section className={styles.content}>
        <i className={`fa fa-user-circle ${styles.icon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={handleChange} />
          </div>
          <div className={styles.input}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChange} />
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
