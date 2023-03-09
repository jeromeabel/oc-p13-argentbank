import { Link } from 'react-router-dom';

import styles from './Error404.module.scss';

function Error404() {
  return (
    <div className={styles.error404}>
      <h1>404</h1>
      <h2>Oups ! La page que vous demandez n'existe pas</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error404;
