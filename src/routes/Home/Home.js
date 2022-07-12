import './home-styles.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import '../../index.scss';
import './home-styles.scss';
import AnimatedLetters from '../../components/AnimatedLetters';
import { useEffect, useState } from 'react';

const Home = () => {

    const nameTitleArray = 'kinwalker'.split('');
    const jobTitleArray = 'Web Developer.'.split('');

    const [letterClass, setLetterClass] = useState('text-animate');


    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('hover')
        }, 4000)

    }, [])
    


    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                   <span className={letterClass}>H</span>
                   <span className={`${letterClass} _12`}>i,</span>
                   <br/>
                   <span className={`${letterClass} _13`}>I</span>
                   <span className={`${letterClass} _14`}>'m</span>
                 
                 <img src={LogoTitle} alt='developer' />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameTitleArray}
                    idx={15}
                />
                <br />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobTitleArray}
                    idx={22}
                 />
                </h1>
                <h2>Front End / Web Apps / e-commerce</h2>
                <Link to={'/contact'} className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;