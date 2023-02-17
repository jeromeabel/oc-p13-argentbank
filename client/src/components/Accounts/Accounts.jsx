import Account from './Account/Account';

const Accounts = () => {
  return (
    <section>
      <h2 className="sr-only">Accounts</h2>
      <Account title="Checking (x8349)" amount="2,082.79" balance="Available" />
      <Account title="Savings (x6712)" amount="10,928.42" balance="Available" />
      <Account title="Credit Card (x8349)" amount="184.30" balance="Current" />
    </section>
  );
};

export default Accounts;
