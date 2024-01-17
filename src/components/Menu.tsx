import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import CV from '../shared/CV_Francisco_Montes.pdf';

const Menu = () => {
    return (
        <div className="flex items-center justify-center py-8 px-4  border-b border-b-black z-50">
            <div className="flex items-center mr-auto ml-auto [&>p]:text-lg [&>p]:cursor-pointer md:justify-between">
                <p className="lg:mr-28 md:mr-14 xs:hidden md:inline-block">
                    <a href="#aboutMe">About Me</a>
                </p>
                <p className="lg:mr-28 md:mr-14"><a href={CV} download='CV_Francisco_Montes'>Download CV</a></p>
                <p className="md:inline-block xs:hidden"><a href="#contactMe">Contact Me!</a></p>
            </div>
            {/* <div className="flex items-center justify-center cursor-pointer">
                <p className='text-2xl pb-1.5 pr-4 md:inline-block xs:hidden'>Menu</p>
                <IonIcon 
                icon={menuOutline}
                size='large'/>
            </div> */}
        </div>
    );
}
 
export default Menu;