import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearToken, selectCurrentToken } from '../../../features/authSlice';
import { clearUser, selectCurrentUser } from '../../../features/userSlice';

import logoSVG from '/logo.png';
import styles from './Header.module.scss';

export default function Header() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  // console.log('HEADER --- ', user);

  const handleLogOut = () => {
    dispatch(clearToken());
    dispatch(clearUser());
  };

  return (
    <header>
      <nav className={styles.nav}>
        <Link className={styles.nav__logo} to="/">
          <img src={logoSVG} alt="Argent Bank Logo" />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
        <div>
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
