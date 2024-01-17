import Timeline from "../UI/Timeline";

import { IonIcon } from '@ionic/react';
import { globeOutline, 
         colorPaletteOutline, 
         libraryOutline, 
         phonePortraitOutline,
         logoHtml5,
         logoCss3,
         logoFigma,
         logoFirebase,
         logoGithub,
         logoJavascript,
         logoReact,
         logoVercel 
} from 'ionicons/icons';
import Slider from "../UI/Slider";

const AboutMe = () => {
    let skills: {
        title:string,
        icon:any,
        description:string
    }[] = [
        {
            title: 'Web Technologies',
            icon: globeOutline,
            description: "Proficient in HTML5, CSS3, and JavaScript, I bring a deep understanding of the latest web standards and technologies to every project."
        },
        {
            title: 'Design Integration',
            icon: colorPaletteOutline,
            description: "With an eye for design, I'm passionate in translating visual concepts into pixel-perfect, interactive web pages. I'm adept at working with design tools like Adobe XD and Figma."
        },
        {
            title: 'Frameworks & Libraries',
            icon: libraryOutline,
            description: "Experienced in leveraging popular frontend frameworks like React.js and SAP UI5 to build dynamic and scalable web applications."
        },
        {
            title: 'Responsive Design',
            icon: phonePortraitOutline,
            description: "Ensuring a seamless experience across devices, I prioritize responsive design principles to create websites that function flawlessly on desktops, tablets, and smartphones."
        },
    ]

    return ( 
        <>
            <div className="lg:block pb-28
                            md:grid md:grid-cols-2">
                <div className="flex
                                lg:justify-center">
                    <Timeline />
                </div>
                <div className="grid gap-14 mx-10
                    lg:grid-cols-2 lg:grid-rows-1 lg:mt-28 lg:px-64
                    md:grid-rows-4 md:grid-cols-1 md:mt-5
                    xs:grid-rows-4 xs:grid-cols-1 xs:mt-14">

                    {skills.map((skill)=>
                        <div className="group relative rounded-lg border border-solid border-gray-400/50
                                        hover:border-transparent">
                            <div className="absolute custom-border-width custom-border-height -m-[1px] overflow-hidden rounded-lg shadow-[0_1000px_inset] shadow-transparent group-hover:shadow-gray-400/50 -z-10">
                                <span>
                                    <span className="animate-rotate rounded-lg absolute aspect-square w-[115%] bg-[conic-gradient(from_150deg,transparent_0_330deg,white_360deg)] [translate:-50%_-25%]
                                    lg:[inset:-100px_auto_auto_50%]
                                    xs:[inset:-20px_auto_auto_50%]"/>
                                </span>
                                <span className="backdrop absolute inset-[1px] rounded-lg bg-white" />
                            </div>
                            <div className="p-8 pb-4 rounded-lg">
                                <IonIcon
                                className="text-5xl absolute -top-4 -left-4 bg-white" 
                                icon={skill.icon}
                                />
                                <p className="text-xl font-semibold mb-4">{skill.title}</p>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    )}
                    {/* <div className="relative p-8 pb-4 border border-solid rounded-lg border-gray-400/35">
                        <IonIcon
                        className="text-5xl absolute -top-4 -left-4 bg-white" 
                        icon={globeOutline}
                        />
                        <p className="text-xl font-semibold mb-4">Web Technologies</p>
                        <p>Proficient in HTML5, CSS3, and JavaScript, I bring a deep understanding of the latest web standards and technologies to every project.</p>
                    </div> */}
                </div>            
            </div>
            <div className="gap-10 items-center justify-center pb-14 xs:hidden lg:flex">
                <IonIcon
                className="text-5xl"
                icon={logoHtml5}
                />
                <IonIcon
                className="text-5xl"
                icon={logoCss3}
                />
                <IonIcon
                className="text-5xl"
                icon={logoJavascript}
                />
                <IonIcon
                className="text-5xl"
                icon={logoReact}
                />
                <IonIcon
                className="text-5xl"
                icon={logoFigma}
                />
                <IonIcon
                className="text-5xl"
                icon={logoFirebase}
                />
                <IonIcon
                className="text-5xl"
                icon={logoGithub}
                />
                <IonIcon
                className="text-5xl"
                icon={logoVercel}
                />
            </div>
            <Slider />
        </>
    );
}
 
export default AboutMe;