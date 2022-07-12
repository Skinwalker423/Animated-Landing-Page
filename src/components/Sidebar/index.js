import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SideBar = () => {
    return(
        <div className="nav-bar">
            <Link className='logo' to={'/'}>
                <img src={LogoS} alt="logo" />
                <p className='sub-logo'>Skinwalker</p>
            </Link>
            <nav>
                <NavLink className='home-link' exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                        href='https://www.linkedin.com/in/luis-gonzalez-a33799235/'
                        rel='noreferrer'
                        target={"_blank"}
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a 
                        href='https://www.github.com/Skinwalker423'
                        rel='noreferrer'
                        target={"_blank"}
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a 
                        href='https://www.twitter.com/artgonzalez423'
                        rel='noreferrer'
                        target={"_blank"}
                    >
                        <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;