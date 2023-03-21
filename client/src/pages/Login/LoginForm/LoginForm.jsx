import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useLoginMutation } from '../../../app/apiSlice';
import { setToken } from '../../../features/authSlice';
import TextInput from './TextInput/TextInput';
import Checkbox from './CheckBox/CheckBox';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email addresss').required('Required'),
    password: Yup.string()
      .min(8, 'Must be 8 characters or more')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    rememberMe: Yup.boolean().default(false),
  });

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const handleSubmit = async (values) => {
    try {
      const result = await login(values); //?? .unwrap()
      console.log(result);
      if (result.data && result.data.status === 200) {
        dispatch(
          setToken({
            token: result.data.body.token,
            rememberMe: values.rememberMe,
          })
        );
        navigate('/profile', { replace: true }); // ?? replace
        toast.success('You are successfully connected');
        // ?? reset();
      } else {
        toast.error(`${result.error.data.message}`);
      }
    } catch (err) {
      console.error('Failed to login: ', err);
      // toast.error('Please write a correct email and password');
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
