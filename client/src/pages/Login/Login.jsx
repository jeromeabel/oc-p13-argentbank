import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useLoginMutation } from '../../app/apiSlice';
import { setToken } from '../../features/authSlice';

import styles from './Login.module.scss';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const { email, password } = formState;
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const canSave = [email, password].every(Boolean) && !isLoading;

  const handleChangeInput = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        const result = await login(formState); //?? .unwrap()
        if (result.data) {
          dispatch(setToken({ token: result.data.body.token, rememberMe }));
          navigate('/profile', { replace: true }); // ?? replace
          toast.success('You are successfully connected');
          e.target.reset();
        } else {
          toast.error(`${result.error.data.message}`);
        }
      } catch (err) {
        console.error('Failed to login: ', err);
      }
    } else {
      toast.error('Please write a correct email and password');
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
            <input type="text" id="email" onChange={handleChangeInput} />
          </div>
          <div className={styles.input}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChangeInput} />
          </div>
          <div className={styles.remember}>
            <input
              type="checkbox"
              id="remember-me"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
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
