import Feature from './Feature/Feature';
import styles from './Features.module.scss';

const Features = () => {
  return (
    <section className={styles.features}>
      <h2 className="sr-only">Features</h2>
      <Feature title="You are our #1 priority" icon="chat">
        Need to talk to a representative? You can get in touch through our 24/7
        chat or through a phone call in less than 5 minutes.
      </Feature>
      <Feature title="More savings means higher rates" icon="money">
        The more you save with us, the higher your interest rate will be!
      </Feature>
      <Feature title="Security you can trust" icon="security">
        We use top of the line encryption to make sure your data and money is
        always safe.
      </Feature>
    </section>
  );
};

export default Features;
