import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login'
import User from '../pages/User/User';

  const Routing = () => (
    <Router className="index">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/*" element={<Error />} />
      </Routes>
  </Router>
  );

export default Routing;
