import styles from './Feature.module.scss';

const Feature = ({ icon, title, children }) => {
  return (
    <div className={styles.feature}>
      <img
        src={`/icon-${icon}.png`}
        alt={`${icon} icon`}
        className={styles.icon}
      />
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Feature;
