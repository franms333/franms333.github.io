import './App.css'
import Menu from './components/Menu';
import BackgroundHero from './components/bgHero/BackgroundHero';
import Hero from './components/hero/Hero';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';

import { IonIcon } from '@ionic/react';
import { logoGithub } from 'ionicons/icons';
import { logoLinkedin } from 'ionicons/icons';

function App() {
  function handleGoToGithub(){
    window.open('https://github.com/franms333', '_blank', 'noreferrer')
  }
  function handleGoToLinkedin(){
    window.open('https://www.linkedin.com/in/francisco-montes-a99a121b8/', '_blank', 'noreferrer')
  }

  return (
    <>        
      <BackgroundHero />
      <Menu />
      <section>
        <Hero />
      </section>
      <section id='aboutMe'>
        <AboutMe />
      </section>
      <section className='pb-10'>
        <Projects />
      </section>
      <footer>
        <div className='flex items-center justify-center p-6 border-t border-t-black mt-20 lg:px-64'>
          <p className='ml-auto -mr-16 md:visible xs:invisible'>Designed by Francisco Montes</p>
          <div className='flex items-center ml-auto gap-4'>
            <IonIcon 
            onClick={handleGoToLinkedin}
            className='text-3xl cursor-pointer'
            icon={logoLinkedin}/>
            <IonIcon 
            onClick={handleGoToGithub}
            className='text-3xl cursor-pointer'
            icon={logoGithub}/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
