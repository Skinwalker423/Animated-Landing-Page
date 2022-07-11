import './home-styles.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import '../../index.scss';
import './home-styles.scss';

const Home = () => {
    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/>I'm
                 <img src={LogoTitle} alt='developer' />
                kinwalker
                <br />
                Web Developer
                </h1>
                <h2>Front End / Web Apps / e-commerce</h2>
                <Link to={'/contact'} className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;