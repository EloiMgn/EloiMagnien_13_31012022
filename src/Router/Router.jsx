import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login'
import Transactions from '../pages/Transactions/Transactions';
import User from '../pages/User/User';

const datas=[
  {
    id: "x8349",
    title:"Argent Bank Checking (x8349)",
    amount:"$2,082.79",
    description:"Available Balance",
  },
  {
    id: "x6712",
    title:"Argent Bank Savings (x6712)",
    amount:"$10,928.42",
    description:"Available Balance",
  },
  {
    id: "x8349",
    title:"Argent Bank Credit Card (x8349)",
    amount:"$184.30",
    description:"Current Balance",
  }
]

  const Routing = () => (
    <Router className="index">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<User datas ={datas}/>} />
        {datas.map(account => {
          return(<Route path={`/${account.id}`} element={<Transactions account={account}/>} />)
        })}
        <Route path="/*" element={<Error />} />
      </Routes>
  </Router>
  );

export default Routing;
