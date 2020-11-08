import React, { createRef, useRef } from 'react'
import { Web, Apps, Security, Wallpaper } from '@material-ui/icons'

import './Home.css'
import Header from './Header/Header'
import ServiceItem from './ServiceItem/ServiceItem'
import Footer from './Footer/Footer'
import FadeInSection from './FadeInSection/FadeInSection'
import ContactForm from './ContactForm/ContactForm'

export const aboutRef = createRef()

function scrollToContent(content) {
    content.current.scrollIntoView({ behavior: 'smooth', block: 'center'})
}

const Home = () => {
    const servicesRef = useRef()
    const contactRef = useRef()

    return (
        
        <div className='home'>
            <Header/>

            <div className='hero'>
                <h1>Explore, Create, Build.</h1>
                <p>join us and lets make the world a fun place to live</p>
                <div className='hero__actions'>
                    <button onClick={() => scrollToContent(servicesRef)} className='hero__actionServices'>Services</button>
                    <button onClick={() => scrollToContent(contactRef)} className='hero__actionContact'>Contact</button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#005700" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,42.7C384,32,480,32,576,64C672,96,768,160,864,170.7C960,181,1056,139,1152,106.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
            <main id='mainContent'>
                 <div>
                    <div ref={servicesRef} className='services container'>
                        <h1>Services</h1>
                        <div className='services__content'>
                            <FadeInSection>
                                <ServiceItem
                                    title='web development'
                                    Icon={Web}
                                    subtitles={['reputiamo', 'ammirabile sua', 'bene furon', 'di sue']}
                                />
                            </FadeInSection>

                            <FadeInSection>
                                <ServiceItem
                                    title='mobile development'
                                    Icon={Apps}
                                    subtitles={['reputiamo', 'ammirabile sua', 'bene furon', 'di sue']}
                                />
                            </FadeInSection>

                            <FadeInSection>
                                <ServiceItem
                                    title='graphic design'
                                    Icon={Wallpaper}
                                    subtitles={['reputiamo', 'ammirabile sua', 'bene furon', 'di sue']}
                                />
                            </FadeInSection>

                            <FadeInSection>
                                <ServiceItem
                                    title='cybersecurity'
                                    Icon={Security}
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
                                <h1>About</h1>
                                <p>
                                Genetech is a brand that puts customer interest at heart. From simple graphic design to bilding complex web and mobile apps, we want to make sure that our customer's needs are met. Our team of dedicated professionals are ever ready to respond to your tech needs
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