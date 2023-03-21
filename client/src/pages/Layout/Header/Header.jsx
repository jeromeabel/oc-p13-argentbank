import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearToken, selectCurrentToken } from '../../../features/authSlice';
import { clearUser, selectCurrentUser } from '../../../features/userSlice';

import logoIMG from '/logo.png';
import styles from './Header.module.scss';

/**
 * The Header component contains the logo and the Sign in/out section
 * The Sign In mechanism get data from the Redux Store and localStorage
 * The Sign Out mechanism clear data
 */
export default function Header() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  // Clear all data : store and localStorage
  const handleLogOut = () => {
    dispatch(clearToken());
    dispatch(clearUser());
    localStorage.clear();
  };

  return (
    <header>
      <nav className={styles.nav}>
        <Link className={styles.nav__logo} to="/">
          <img src={logoIMG} alt="Argent Bank Logo" />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
        <div>
          {/* Switch between sign in and sign out display */}
          {token && user.firstName ? (
            <>
              <NavLink className={styles.nav__item} to="/profile">
                <i className="fa fa-user-circle" /> {user.firstName}
              </NavLink>
              <NavLink
                onClick={handleLogOut}
                className={styles.nav__item}
                to="/"
              >
                <i className="fa fa-sign-out" /> Sign Out
              </NavLink>
            </>
          ) : (
            <NavLink className={styles.nav__item} to="/login">
              <i className="fa fa-user-circle" /> Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
