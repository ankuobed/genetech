import React, { createRef, useRef } from 'react'
import { ArrowDownward } from '@material-ui/icons'

import './Home.css'
import Header from './Header/Header'
import ServiceItem from './ServiceItem/ServiceItem'
import Footer from './Footer/Footer'
import FadeInSection from './FadeInSection/FadeInSection'
import ContactForm from './ContactForm/ContactForm'

// images
import webImg from '../images/web-programming.png'
import appImg from '../images/app.png'
import videoImg from '../images/video-editing.png'
import graphicImg from '../images/graphic-design.png'
import cyberImg from '../images/cyber.png'

export const aboutRef = createRef()

function scrollToContent(content) {
    content.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const Home = () => {
    const servicesRef = useRef()
    const contactRef = useRef()

    return (

        <div className='home'>
            <Header />

            <div className='hero'>
                <h1>Explore, <span>Innovate</span>, Build.</h1>
                <p>Innovative work, innovative research for innovative people.</p>
                <div className='hero__actions'>
                    <button onClick={() => scrollToContent(contactRef)} className='hero__actionContact'>Contact Us <ArrowDownward /> </button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#242424" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,42.7C384,32,480,32,576,64C672,96,768,160,864,170.7C960,181,1056,139,1152,106.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>

            <main id='mainContent'>
                <div>
                    <div ref={servicesRef} className='services container'>
                        <h1>What We <span>Do</span></h1>
                        <div className='services__content'>
                            <FadeInSection>
                                <ServiceItem
                                    title='web development'
                                    img={webImg}
                                    subtitles={['frontend', 'responsive design', 'secure backend', 'scalable']}
                                />
                            </FadeInSection>

                            <FadeInSection>
                                <ServiceItem
                                    title='mobile development'
                                    img={appImg}
                                    subtitles={['IOS & Android', 'responsive design', 'optimized code base', 'security']}
                                    isComingSoon
                                />
                            </FadeInSection>

                            <FadeInSection>
                                <ServiceItem
                                    title='video & movie editing'
                                    img={videoImg}
                                    subtitles={['reputiamo', 'ammirabile sua', 'bene furon', 'di sue']}
                                    isComingSoon
                                />
                            </FadeInSection>

                            <FadeInSection>
                                <ServiceItem
                                    title='graphic design'
                                    img={graphicImg}
                                    subtitles={['reputiamo', 'ammirabile sua', 'bene furon', 'di sue']}
                                />
                            </FadeInSection>

                            <FadeInSection>
                                <ServiceItem
                                    title='cybersecurity'
                                    img={cyberImg}
                                    subtitles={['reputiamo', 'ammirabile sua', 'bene furon', 'di sue']}
                                    isComingSoon
                                />
                            </FadeInSection>
                        </div>
                    </div>

                    <div ref={contactRef} className='container'>
                        <ContactForm />
                    </div>

                    <FadeInSection>
                        <div ref={aboutRef} className='about'>
                            <div className='about__content container'>
                                <h1>About Us</h1>
                                <p>
                                    Genetech is a company of young, talented and passionate people. We look to provide the best services we possibly can and set ourselves apart from others. With our team of dedicated professionals we are able to build high quality projects while putting our customers' needs first.
                                </p>
                            </div>

                        </div>
                    </FadeInSection>

                </div>
                <Footer />
            </main>
        </div>
    )
}

export default Home