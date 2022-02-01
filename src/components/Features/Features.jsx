import Feature from "./Feature/Feature";
import Chat from '../../utils/assets/img/icon-chat.png'
import Money from '../../utils/assets/img/icon-money.png'
import Security from '../../utils/assets/img/icon-security.png'


const Features = () => {

  const contentList =[
    {
      img: Chat,
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
   {
      img: Money,
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!"
    },
    {
      img: Security,
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe."
    }
  ]
  return (
  <section className="features">
    <h2 className="sr-only">Features</h2>
    {contentList.map((content, idx) => (
      <Feature img={content.img} title={content.title} text={content.text} key={idx}/>
    ))}
  </section>
  );
}

export default Features;
