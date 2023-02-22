import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setName, selectCurrentUser } from '../../../features/userSlice';
import { useSetUserNameMutation } from '../../../app/apiSlice';

import styles from './EditName.module.scss';

const EditName = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);
  const [setUserName, { isLoading }] = useSetUserNameMutation();
  const [formState, setFormState] = useState({ firstName: '', lastName: '' });
  const { firstName, lastName } = formState;

  useEffect(() => {
    if (user.firstName && user.firstName !== firstName) {
      setFormState({ firstName: user.firstName, lastName: user.lastName });
    }
  }, [user]);

  const handleChangeInput = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const canSave = [firstName, lastName].every(Boolean) && !isLoading;
    e.preventDefault();
    if (canSave) {
      if (user.firstName !== firstName || user.lastName !== lastName) {
        try {
          const result = await setUserName(formState); //?? .unwrap()
          console.log(result);
          if (result.data) {
            dispatch(setName(formState));
            toast.success('Your name has changed');
            //e.target.reset();
          } else {
            toast.error(`${result.error.data.message}`);
          }
        } catch (err) {
          console.error('Failed to set name: ', err);
        }
      } else {
        toast.warn('Please choose a different name');
      }
    } else {
      toast.error('Please fill the fields');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.content}>
      <div style={{ alignItems: 'flex-end' }} className={styles.col}>
        <input
          className={styles.input}
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleChangeInput}
        />
        <button type="submit" className={styles.button}>
          Save
        </button>
      </div>
      <div className={styles.col}>
        <input
          className={styles.input}
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleChangeInput}
        />
        <button type="" className={styles.button}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditName;
