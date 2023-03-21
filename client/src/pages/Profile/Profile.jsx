import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Slices
import { useGetUserMutation } from '../../app/apiSlice';
import { setUser, selectCurrentUser } from '../../features/userSlice';
import { selectCurrentRememberMe } from '../../features/authSlice';

// Components
import Accounts from './Accounts/Accounts';
import EditNameForm from './EditNameForm/EditNameForm';

import styles from './Profile.module.scss';

/**
 *
 * Profile page
 * When the page is loaded, the user's data are taken from the API
 * If the request is successful, the data are stored and displayed
 *
 * Security note:
 * These data are protected with "App/PrivateRoute" component
 * and JWT token inside the HTTP header
 *
 * Version note:
 * The Accounts part is not yet implemented
 */
const Profile = () => {
  const [getUser] = useGetUserMutation(); // API call
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser); // Get user's data from store
  const rememberMe = useSelector(selectCurrentRememberMe);

  useEffect(() => {
    async function fetchData() {
      const response = await getUser(); // API
      if (response.data && response.data.status === 200) {
        dispatch(
          setUser({
            email: response.data.body.email,
            firstName: response.data.body.firstName,
            lastName: response.data.body.lastName,
            rememberMe,
          })
        );
      }
    }

    fetchData();
  }, []);

  return (
    <main className="bg-dark">
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {user?.firstName && `${user.firstName} ${user.lastName}`}
        </h1>
        <EditNameForm />
      </div>
      <Accounts />
    </main>
  );
};

export default Profile;
