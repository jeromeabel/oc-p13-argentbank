import { NavLink, Link } from 'react-router-dom';

import logoSVG from '/logo-argentbank.svg';

import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
/*
+USER name
+Signout
*/

export default function Header() {
  const name = useSelector((state) => state.auth.name);

  return (
    <header>
      <nav className={styles.nav}>
        <Link className={styles.nav__logo} to="/">
          <img src={logoSVG} alt="Argent Bank Logo" />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
        <div>
          {name && (
            <NavLink className={styles.nav__item} to="/profile">
              <i className="fa fa-user-circle" /> {name}
            </NavLink>
          )}

          <NavLink className={styles.nav__item} to="/logout">
            <i className="fa fa-sign-out" /> Sign Out
          </NavLink>

          <NavLink className={styles.nav__item} to="/login">
            <i className="fa fa-user-circle" /> Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
