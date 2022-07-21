import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMouse, faCode } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from'reactstrap'
import tools from '../../assets/imgs/pngkit_software-development-png_220591.png'
import './index.scss'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container skills-page'>
            <div className='text-zone skill-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']} idx={15}/>
                </h1>
                <Row>
                    <Col>
                        <div className='design'>
                            <FontAwesomeIcon icon={faMouse} color='rgb(0, 191, 255)' font-size='50px'/>
                            <h2>Design</h2>
                            <p>Figma</p>
                            <p>Background Eraser</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='frontend'>
                            <FontAwesomeIcon icon={faCode} color='rgb(0, 191, 255)' font-size='50px'/>
                            <h2>Frontend</h2>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Sass & Scss</p>
                            <p>Javascript</p>
                            <p>Bootstrap</p>
                            <p>React</p>
                            <p>JSON</p>
                            <p>Flux</p>
                            <p>Redux</p>
                            <p>REST</p>
                        </div>
                    </Col>
                    <Col>
                        <img className='tools-img' src={tools} alt="" />
                    </Col>
                </Row>

            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Skills;