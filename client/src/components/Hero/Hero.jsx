import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.hero__content}>
        <h2 className="sr-only">Promoted Content</h2>
        <p className={styles.hero__subtitle}>No fees.</p>
        <p className={styles.hero__subtitle}>No minimum deposit.</p>
        <p className={styles.hero__subtitle}>High interest rates.</p>
        <p className={styles.hero__text}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
};

export default Hero;
