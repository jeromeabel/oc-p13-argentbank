import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// Slices
import { setName, selectCurrentUser } from '../../../features/userSlice';
import { useSetUserNameMutation } from '../../../app/apiSlice';
import { selectCurrentRememberMe } from '../../../features/authSlice';

import styles from './EditNameForm.module.scss';

/**
 * EditNameForm component
 *
 * It provides a simple form with a minimal validation process
 * When the user clicks on "Edit" button the form is displayed
 * The data are sent to the server via an API call and are also stored locally
 *
 * Note:
 * Some visual feedbacks are provided by Toast library
 */
const EditNameForm = () => {
  // RTK methods : actions, selectors
  const dispatch = useDispatch();
  const [setUserName, { isLoading }] = useSetUserNameMutation();
  const rememberMe = useSelector(selectCurrentRememberMe);
  const user = useSelector(selectCurrentUser);

  // Local states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formState, setFormState] = useState({ firstName: '', lastName: '' });
  const { firstName, lastName } = formState;

  // Update user's data when data are modified
  useEffect(() => {
    setFormState({ firstName: user.firstName, lastName: user.lastName });
  }, [user]);

  // Useful method to take care of differents properties of the form state
  const handleChangeInput = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  /**
   *
   * Edit Name process
   * If the form is submitted, the store is updated
   *
   * Note:
   * The rememberMe value is used in the setName action to store
   * data to the localStorage
   */
  const handleSubmit = async (e) => {
    // Check input data from the form and the API call status
    const canSave = [firstName, lastName].every(Boolean) && !isLoading;
    e.preventDefault();
    if (canSave) {
      if (user.firstName !== firstName || user.lastName !== lastName) {
        try {
          const result = await setUserName(formState); // API call
          if (result.data) {
            dispatch(setName({ ...formState, rememberMe })); // Store + localStorage
            toast.success('Your name has changed');
          } else {
            toast.error(`${result.error.data.message}`);
          }
        } catch (err) {
          console.error('Failed to set name: ', err);
        }
      } else {
        toast.warn('Nothings happens, the name has not changed.');
      }
    } else {
      toast.error('Fields are empty');
    }
  };

  return (
    <>
      {!isFormOpen ? (
        <button className={styles.button} onClick={() => setIsFormOpen(true)}>
          Edit Name
        </button>
      ) : (
        <form onSubmit={handleSubmit} className={styles.content}>
          <div className={styles.col}>
            <input
              className={styles.input}
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleChangeInput}
              pattern="^[A-ÿ]{2,}[A-ÿ\-\s]*$"
              title="Two or more characters"
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
              pattern="^[A-ÿ]{2,}[A-ÿ\-\s]*$"
              title="Two or more characters"
            />
            <button
              type="reset"
              onClick={() => setIsFormOpen(false)}
              className={styles.button}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default EditNameForm;
