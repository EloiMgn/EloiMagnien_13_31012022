import Nav from '../../components/Nav/Nav';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Account from '../../components/Account/Account';

const User = () => {

  const linksContent= [
    {
      text: "Tony",
      icon:"fa fa-user-circle",
      link:"/user"
    },
    {
      text: "Sign Out",
      icon:"fa fa-sign-out",
      link:"/"
    }
  ]

  const datas=[
    {
      title:"Argent Bank Checking (x8349)",
      amount:"$2,082.79",
      description:"Available Balance",
    },
    {
      title:"Argent Bank Savings (x6712)",
      amount:"$10,928.42",
      description:"Available Balance",
    },
    {
      title:"Argent Bank Credit Card (x8349)",
      amount:"$184.30",
      description:"Current Balance",
    }
  ]
  return (
    <div className="user">
      <Nav links={linksContent}/>
      <main className='main bg-dark'>
        <Header/>
        <h2 className="sr-only">Accounts</h2>
        {datas.map((data, idx) => (
          <Account datas={data} key={idx}/>
        ))}
      </main>
      <Footer/>
    </div>
  );
}

export default User;
