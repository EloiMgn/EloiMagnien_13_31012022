import Nav from '../../components/Nav/Nav';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Account from '../../components/Account/Account';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Error from '../Error/Error';

const User = ({datas}) => {
const token = useSelector((state) => state.token)
const [succeed, setSucceed] = useState(false)
const [response, setResponse]= useState(0)
const [user, setUser] = useState('')



  useEffect(() => {
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
            setUser(response.body.firstName)
            setSucceed(true)
            setResponse(0)
            } 
          else {
            setSucceed(false)
            setResponse(1)
          }
          })
          .catch(error => console.error(error))
      } 
    }
    fetchData()
  }, [token]);

  const linksContent= [
    {
      text: "Sign Out",
      icon:"fa fa-sign-out",
      link:"/"
    }
  ]

  if(succeed){
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
  } else if (!succeed && response === 0) {
    return <Error code='403'/>
  } else if (!succeed && response !== 0) {
    return <Error code= '404'/>
  }
}

export default User;
