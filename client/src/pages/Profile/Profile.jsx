import { useEffect, useState } from 'react';
import Accounts from './Accounts/Accounts';
import styles from './Profile.module.scss';
import { useGetUserMutation } from '../../app/apiSlice';
import { setUser, selectCurrentUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import EditName from './EditName/EditName';

const Profile = () => {
  const [isEditName, setIsEditName] = useState(false);
  const [getUser] = useGetUserMutation();
  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    async function fetchData() {
      const response = await getUser();
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
  }, []);

  return (
    <main className="bg-dark">
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {user?.firstName && `${user.firstName} ${user.lastName}`}
        </h1>
        <button
          className={styles.button}
          onClick={() => setIsEditName(!isEditName)}
        >
          Edit Name
        </button>
        {isEditName && <EditName />}
      </div>
      <Accounts />
    </main>
  );
};

export default Profile;
