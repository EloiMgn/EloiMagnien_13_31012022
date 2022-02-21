import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Transaction from '../../components/Transaction/Transaction';
import './Transactions.css'

const Transactions = ({account}) => {

  const linksContent= [
    {
      text: "Profil",
      icon:"fa fa-user-circle",
      link:"/profile"
    },
    {
      text: "Sign Out",
      icon:"fa fa-sign-out",
      link:"/"
    }
  ]

  const datas=[
    {
      id: "12354687",
      date: "June 20th, 2020",
      amount:"$5.00",
      description:"Golden Sun Bakery",
      balance: "$2082.79",
      type: "Electronic",
      category: "Food",
      notes: ""
    },
    {
      id: "1235456",
      date: "June 20th, 2020",
      amount:"$10.00",
      description:"Golden Sun Bakery",
      balance: "$2087.79",
      type: "Electronic",
      category: "Food",
      notes: ""
    },
    {
      id: "12654875",
      date: "June 20th, 2020",
      amount:"$20.00",
      description:"Golden Sun Bakery",
      balance: "$2097.79",
      type: "Electronic",
      category: "Food",
      notes: ""
    },
    {
      id: "755481",
      date: "June 20th, 2020",
      amount:"$30.00",
      description:"Golden Sun Bakery",
      balance: "$2117.79",
      type: "Cash",
      category: "Food",
      notes: ""
    },
    {
      id: "3254899",
      date: "June 20th, 2020",
      amount:"$40.00",
      description:"Golden Sun Bakery",
      balance: "$2147.79",
      type: "Electronic",
      category: "Food",
      notes: ""
    },
    {
      id: "1687268",
      date: "June 20th, 2020",
      amount:"$50.00",
      description:"Golden Sun Bakery",
      balance: "$2187.79",
      type: "Electronic",
      category: "Food",
      notes: ""
    },
  ]

    return (
      <div className="user">
        <Nav links={linksContent}/>
        <header className='transactions__header'>
          <h2>{account.title}</h2>
          <h1>{account.amount}</h1>
          <h3>{account.description}</h3>
        </header>
        <main className='main bg-dark transactions'>
          <div className='titles-wrapper'>
            <h4>DATE</h4>
            <h4>DESCRIPTION</h4>
            <h4>AMOUNT</h4>
            <h4>BALANCE</h4>
          </div>
          {datas.map((data, idx) => (
            <Transaction datas={data} key={idx}/>
          ))}
        </main>
        <Footer/>
      </div>
    );
}

export default Transactions;
