import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faCss3,
    faHtml5,
    faGitAlt,
    faJsSquare,
    faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15} />
                        {/* idx={15} means 1.5s delay */}
                    </h1>
                    <p>
                    Many different hats are worn by life learners,
                    and I am one of them who appreciates picking up new, intriguing skills.
                    I've found that programming is what I'm meant to do. Due to the fact that
                    creating software necessitates creative thinking, critical thinking, and problem-solving.
                    I like developing professionally, in teams, and as a pastime.
                    </p>
                    <br />
                    <p align="LEFT">
                    Learning and experimenting with new coding languages, libraries, and
                    frameworks is one of my favorite things to do, and
                    I am committed to learning efficiently. Solving coding challenges creatively and
                    putting newly learned skills to use brings joy.
                    I'm quietly confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                    </p>
                    <br />
                    <p>
                    If I need to define myself in one sentence that would be an ambitious
                    person, adaptable, a video games fanatic,
                    travel enthusiast, and tech-obsessed!!!
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4d9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color='EFD81D' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color='EC4' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faBootstrap} color='#8E44AD' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About