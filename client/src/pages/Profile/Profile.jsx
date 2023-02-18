import { useEffect } from 'react';
import Accounts from '../../components/Accounts/Accounts';
import styles from './Profile.module.scss';
import { useGetUserMutation } from '../../app/api/apiSlice';
import { setUser, selectUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const [getUser, { data, isLoading, isSuccess }] = useGetUserMutation();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    async function fetchData() {
      const response = await getUser();
      console.log(response.data.body);

      if (response.data.body) {
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
