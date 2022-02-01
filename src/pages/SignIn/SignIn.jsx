import Nav from '../../components/Nav/Nav';
import SignInForm from '../../components/SignInForm/SignInForm';
import Footer from '../../components/Footer/Footer';

const SignIn = () => {

  const linksContent= [
    {
      text: "Sign In",
      icon:"fa fa-user-circle",
      link:"/sign-in"
    }
  ]
  return (
    <div className="signIn">
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

export default SignIn;
