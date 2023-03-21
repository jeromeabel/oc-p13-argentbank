import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Slices
import { useLoginMutation } from '../../../app/apiSlice';
import { setToken } from '../../../features/authSlice';

// Form components
import TextInput from './TextInput/TextInput';
import Checkbox from './CheckBox/CheckBox';

import styles from './LoginForm.module.scss';

/**
 * LoginForm component validates user data with Formik/Yup
 * It stores the token with the help of an API call (useLoginMutation) and RTK actions
 * The user is redirected to the "/profile" page once this process is successful
 *
 * Additional : some visual feedbacks are provided with Toast library
 */
const LoginForm = () => {
  const [login] = useLoginMutation(); // RTK-Query API Call
  const dispatch = useDispatch(); // RTK action
  const navigate = useNavigate();

  // Form setup /1 : validation
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email addresss').required('Required'),
    password: Yup.string()
      .min(8, 'Must be 8 characters or more')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    rememberMe: Yup.boolean().default(false),
  });

  // Form setup /2 : init
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  /**
   * handleSubmit handles all the login process :
   * get token, store it and redirect user
   */
  const handleSubmit = async (values) => {
    try {
      const result = await login(values); // API Call
      if (result.data && result.data.status === 200) {
        // Store the token
        dispatch(
          setToken({
            token: result.data.body.token,
            rememberMe: values.rememberMe,
          })
        );
        navigate('/profile', { replace: true });
        toast.success('You are successfully connected');
      } else {
        toast.error(`${result.error.data.message}`);
      }
    } catch (err) {
      console.error('Failed to login: ', err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder="hello@argentbank.com"
        />
        <TextInput label="Password" name="password" type="password" />
        <Checkbox name="rememberMe">Remember me</Checkbox>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
