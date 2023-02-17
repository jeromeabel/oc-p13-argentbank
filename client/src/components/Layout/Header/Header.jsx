import { NavLink, Link } from 'react-router-dom';

import logoSVG from '/logo-argentbank.svg';

import styles from './Header.module.scss';

/*
+USER name
+Signout
*/

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link className={styles.nav__logo} to="/">
          <img src={logoSVG} alt="Argent Bank Logo" />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
        <div>
          <NavLink className={styles.nav__item} to="/user">
            <i className="fa fa-user-circle" /> Tony
          </NavLink>

          <NavLink className={styles.nav__item} to="/signout">
            <i className="fa fa-sign-out" /> Sign Out
          </NavLink>

          <NavLink className={styles.nav__item} to="/signin">
            <i className="fa fa-user-circle" /> Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
