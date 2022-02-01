
const Account = ({datas}) => {

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{datas.title}</h3>
        <p className="account-amount">{datas.amount}</p>
        <p className="account-amount-description">{datas.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
  </section>
  );
}

export default Account;
