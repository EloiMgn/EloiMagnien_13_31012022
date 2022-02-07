import Nav from '../../components/Nav/Nav';
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';
import Footer from '../../components/Footer/Footer';

const Home = () => {
const linksContent= [
  {
    text: "Sign In",
    icon:"fa fa-user-circle",
    link:"/login"
  }
]

  return (
    <div className="home">
      <Nav links={linksContent}/>
      <main>
        <Banner/>
        <Features/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
