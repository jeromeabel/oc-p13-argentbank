import { useEffect, useState } from 'react';
import Accounts from './Accounts/Accounts';
import styles from './Profile.module.scss';
import { useGetUserMutation } from '../../app/apiSlice';
import { setUser, selectCurrentUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import EditName from './EditName/EditName';

const Profile = () => {
  const [getUser] = useGetUserMutation(); // API : Post récupérer User
  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser); // Récupérer le store/slice current User

  useEffect(() => {
    async function fetchData() {
      const response = await getUser(); // API
      if (response.data.status === 200) {
        dispatch(
          setUser({
            email: response.data.body.email,
            firstName: response.data.body.firstName,
            lastName: response.data.body.lastName,
          })
        );
      }
    }

    fetchData();
  }, [user]);

  return (
    <main className="bg-dark">
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {user?.firstName && `${user.firstName} ${user.lastName}`}
        </h1>
        <EditName />
      </div>
      <Accounts />
    </main>
  );
};

export default Profile;
