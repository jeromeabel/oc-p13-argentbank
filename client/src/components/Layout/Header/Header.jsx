import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../../features/authSlice';
import { selectUser } from '../../../features/userSlice';
import logoSVG from '/logo-argentbank.svg';

import styles from './Header.module.scss';

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header>
      <nav className={styles.nav}>
        <Link className={styles.nav__logo} to="/">
          <img src={logoSVG} alt="Argent Bank Logo" />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
        <div>
          {user?.firstName ? (
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
