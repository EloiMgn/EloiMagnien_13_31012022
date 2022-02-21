import { Link } from 'react-router-dom';
import './Error.css';


const Error = ({code}) => {

  if (code === '403'){
    return (
      <div className='error__content' id='error__403'>
        <div>403</div>
        <div class="txt">
          Accès refusé<span class="blink">_</span>
        </div>
        <Link to="/" className='error__403__link'>Retour à l'accueil</Link>
      </div>
    )
  } else {
    return (
      <div className='error__content' id='error__403'>
      <div>404</div>
      <div class="txt">
      Cette page n&apos;existe pas encore<span class="blink">_</span>
      </div>
      <Link to="/" className='error__403__link'>Retour à l'accueil</Link>
    </div>
    )
  }
};

export default Error;