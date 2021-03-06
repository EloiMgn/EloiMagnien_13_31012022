import Nav from '../../components/Nav/Nav';
import SignInForm from '../../components/SignInForm/SignInForm';
import Footer from '../../components/Footer/Footer';

const Login = () => {

  const linksContent= [
    {
      text: "Sign In",
      icon:"fa fa-user-circle",
      link:"/login"
    }
  ]
  return (
    <div className="login">
      <Nav links={linksContent}/>
      <main className='main bg-dark'>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <SignInForm/>
      </section>
      </main>
      <Footer/>
    </div>
  );
}

export default Login;
