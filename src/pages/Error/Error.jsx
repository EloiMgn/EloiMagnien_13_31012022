import { Link } from 'react-router-dom';
// import './Error.scss';


const Error = () => {

    return (
      <div className='error__content'>
        <h1 className='error__content__title'>404</h1>
        <div className='error__content__texts'>
          <h2 className='error__content__texts__welcome'>Cette page n&apos;existe pas encore cliquez
            <Link to="/" className='error__links__inlineLink'>ici</Link> pour revenir à l&apos;accueil</h2>
        </div>
      </div>
      );
};

export default Error;