import styles from './CheckBox.module.scss';
import { useField } from 'formik';

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className={styles.checkbox}>
      <input {...field} {...props} type="checkbox" />
      <label>{children}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Checkbox;
