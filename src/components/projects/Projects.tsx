import { IonIcon } from '@ionic/react';
import { logoGithub } from 'ionicons/icons';
import hbo_img from '../../shared/hbo_card_img.jpeg';
import weatherjs_img from '../../shared/weatherjs_img.png';
import github_finder_img from '../../shared/github_finder_img.png';
import ContactForm from '../UI/ContactForm';
import { useFormik } from 'formik';

const Projects = () => {
    let projects: {
        title:string,
        image:any,
        description: string,
        tags: {
            title:string
        }[],
        repo: string
    }[] = [
        {
            title:'HBO Max',
            image:hbo_img,
            description:'HBO Max app mimic project combines the power of ReactJS and Firebase with a focus on user interface and security',
            tags: [
                {
                    title:'ReactJS'
                },
                {
                    title:'Firebase'
                },
                {
                    title:'Netlify'
                }
            ],
            repo: 'https://github.com/franms333/hbomax_project'
        },
        {
            title:'WeatherJS App',
            image:weatherjs_img,
            description:'Weather App project that gives a quick and efficient solution for users to access current weather information in a user-friendly manner',
            tags: [
                {
                    title:'JavaScript'
                },
                {
                    title:'HTML5 & CSS3'
                },
                {
                    title:'REST'
                }
            ],
            repo: 'https://github.com/franms333/WeatherJS'
        },
        {
            title:'Github Finder',
            image:github_finder_img,
            description:'This GitHub Finder App project creates an efficient tool for users to explore GitHub profiles and repositories with ease',
            tags: [
                {
                    title:'JavaScript'
                },
                {
                    title:'HTML5 & CSS3'
                },
                {
                    title:'REST'
                }
            ],
            repo: 'https://github.com/franms333/github_finder'
        }
    ]

    function handleClick(project:any){
        window.open(project.repo, '_blank', 'noreferrer')
    }    

    return (
        <>
            <div className="lg:px-64 md:px-10 xs:px-0">
                <h3 className="text-5xl font-bold mb-10 xs:ml-4 md:ml-0">Projects</h3>

                {/* <div className='xs:block md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-y-6'> */}
                <div className='xs:block md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-auto-fill-minmax lg:gap-4 lg:gap-y-6 xs:px-4 md:px-0'>
                    { projects.map((project)=>
                        <div
                        onClick={(() => handleClick(project))} 
                        className="card group shadow-xl image-full cursor-pointer xs:mb-4 xs:ml-auto xs:mr-auto md:mb-0 md:mx-0 md:w-80 lg:w-96">
                            <figure>
                                <img src={project.image} alt="{project.title}" className='opacity-95' />
                            </figure>
                            <div className="card-body invisible group-hover:visible">
                                <h2 className="card-title">{project.title}</h2>
                                <div className='flex items-center'>
                                    { project.tags.map((tag)=>
                                        <div className="badge badge-neutral">{tag.title}</div>
                                        )
                                    }
                                </div>
                                <p>{project.description}</p>
                                <div className='w-full flex justify-end'>
                                    <IonIcon 
                                    className='text-4xl text-white'
                                    icon={logoGithub}/>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>            
            </div>
            <div className='w-full flex justify-center mt-10'>
                <ContactForm />
            </div>
        </> 
    );
}
 
export default Projects;