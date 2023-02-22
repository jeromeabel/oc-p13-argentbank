import { useEffect } from 'react';
import Accounts from './Accounts/Accounts';
import styles from './Profile.module.scss';
import { useGetUserMutation } from '../../app/apiSlice';
import { setUser, selectCurrentUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const [getUser, { data, isLoading, isSuccess }] = useGetUserMutation();
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
          {user?.firstName && user.firstName}
          {user?.lastName && user.lastName}
        </h1>
        <button className={styles.button}>Edit Name</button>
      </div>
      <Accounts />
    </main>
  );
};

export default Profile;
