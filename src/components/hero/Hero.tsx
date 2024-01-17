import { IonIcon } from '@ionic/react';
import { removeOutline } from 'ionicons/icons';

const Hero = () => {
    return ( 
        <div className="h-[--hero-height] flex items-center
        lg:flex-row lg:gap-20 lg:justify-evenly lg:pt-0
        xs:flex-col xs:pt-40">
            <div className='lg:ml-96 
                md:h-72 md:w-[500px] 
                xs:w-80 xs:-ml-6'>
                <div className='flex items-center'>
                    <IonIcon
                    className='text-4xl'
                    icon={removeOutline}
                    />
                    <p className='text-lg'>Hi, I'm Francisco Montes</p>
                </div>
                <h1 className='font-bold 
                    md:text-8xl 
                    xs:text-7xl'>Frontend<br/>Developer</h1>
            </div>
            <div className='lg:mr-96 
                    md:h-72
                    xs:-ml-4'>
                <IonIcon
                className='text-4xl 
                    md:-ml-1.5
                    xs:-ml-1'
                icon={removeOutline}
                />
                <p className='text-justify text-xl 
                md:w-[500px] 
                xs:w-80'>I'm a creative and detail-oriented frontend developer with a knack for turning concepts into visually appealing and user-friendly websites. My passion lies in crafting seamless and responsive user interfaces that not only look great but also deliver an exceptional user experience</p>
            </div>
        </div>
    );
}
 
export default Hero;