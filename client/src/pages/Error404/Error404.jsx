import { Link } from 'react-router-dom';

import styles from './Error404.module.scss';

function Error404() {
  return (
    <div className={styles.error404}>
      <h1>404 Error</h1>
      <h2>Page not found</h2>
      <Link to="/">Return to the home page</Link>
    </div>
  );
}

export default Error404;
