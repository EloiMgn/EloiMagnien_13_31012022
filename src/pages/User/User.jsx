import Nav from '../../components/Nav/Nav';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Account from '../../components/Account/Account';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Error from '../Error/Error';

const User = () => {
const token = useSelector((state) => state.token)
// const [data, setData] = useState(null)
const [user, setUser] = useState('')

  const fetchData = async () => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'X-Requested-Width': 'xmlhttprequest'
        },
    })
    if (response.ok) {            
        response.json()
        .then(response => {
          if (response.status === 200) {
          //  setData(response.body)
           setUser(response.body.firstName)
          } 
        else {
          console.log('pas connecté')
        }
        })
        .catch(error => console.error(error))
    } 
  }

  useEffect(() => {
    fetchData()
  }, []);

  const linksContent= [
    {
      text: "Sign Out",
      icon:"fa fa-sign-out",
      link:"/login"
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
  if(user){
    return (
      <div className="user">
        <Nav links={linksContent}/>
        <main className='main bg-dark'>
          <Header name={user}/>
          <h2 className="sr-only">Accounts</h2>
          {datas.map((data, idx) => (
            <Account datas={data} key={idx}/>
          ))}
        </main>
        <Footer/>
      </div>
    );
  } return (
      <Error/>
    );
}

export default User;
