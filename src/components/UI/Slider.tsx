import { IonIcon } from '@ionic/react';
import { logoHtml5,
         logoCss3,
         logoFigma,
         logoFirebase,
         logoGithub,
         logoJavascript,
         logoReact,
         logoVercel 
} from 'ionicons/icons';
  
  const LOGOS = [
    <IonIcon
    className="text-5xl"
    icon={logoHtml5}
    />,
    <IonIcon
    className="text-5xl"
    icon={logoCss3}
    />,
    <IonIcon
    className="text-5xl"
    icon={logoJavascript}
    />,
    <IonIcon
    className="text-5xl"
    icon={logoReact}
    />,
    <IonIcon
    className="text-5xl"
    icon={logoFigma}
    />,
    <IonIcon
    className="text-5xl"
    icon={logoFirebase}
    />,
    <IonIcon
    className="text-5xl"
    icon={logoGithub}
    />,
    <IonIcon
    className="text-5xl"
    icon={logoVercel}
    />
  ];

const Slider = () => {
    return (       
        <div className='xs:block lg:hidden'>
            <div className="relative m-auto w-full overflow-hidden bg-white pb-14 
            before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] 
            after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
                <div className="animate-infinite-slider flex w-[calc(250px*8)]">
                    {LOGOS.map((logo, index) => (
                    <div
                        className="slide flex w-[125px] items-center justify-center"
                        key={index}
                    >
                        {logo}
                    </div>
                    ))}
                    {LOGOS.map((logo, index) => (
                    <div
                        className="slide flex w-[125px] items-center justify-center"
                        key={index}
                    >
                        {logo}
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Slider;