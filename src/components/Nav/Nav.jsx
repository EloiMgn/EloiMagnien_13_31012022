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
          <a className="main-nav-item" href={link.link} key={idx}>
            <i className={link.icon}></i>
          {link.text}
        </a>
        ))}
        
      </div>
    </nav>
  );
}

export default Nav;
