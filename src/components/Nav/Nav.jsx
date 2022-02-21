import { Link } from 'react-router-dom';
import logo from '../../utils/assets/img/argentBankLogo.png'

const Nav = ({links}) => {

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {links.map((link, idx) => (
          <Link className="main-nav-item" to={link.link} key={idx}>
            <i className={link.icon}></i>
          {link.text}
          </Link>
        ))}
        
      </div>
    </nav>
  );
}

export default Nav;
