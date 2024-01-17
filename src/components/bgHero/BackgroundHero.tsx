import { useEffect } from "react";
import useWindowDimensions from "../../hooks/useScreenSize";

const BackgroundHero = () => {
    // hook for getting screen size
    const { width } = useWindowDimensions();

    // updates everytime the screen size changes
    useEffect(()=>{
        document.documentElement.setAttribute("style", "--rightPosition: 0");
        if(width < 768) {
            document.documentElement.setAttribute("style", "--ball-width: 144px");
        } else {
            document.documentElement.setAttribute("style", "--ball-width: 288px");
        }
    },[width]);

    // used for changing initial position of middle balls after first animation ends
    useEffect(()=>{
        setTimeout(()=>{
          
          if(width < 768) {
            document.documentElement.setAttribute("style", "--ball-width: 144px");
            // document.documentElement.setAttribute("style", "--rightPosition: 0");
        } else {
            document.documentElement.setAttribute("style", "--ball-width: 288px");
            document.documentElement.setAttribute("style", "--rightPosition: 0");
        }
        },8000)
    },[]);

    return ( 
            <div className="absolute w-screen h-screen overflow-hidden -z-10">
                <div className="absolute top-0 md:w-72 md:h-72 xs:w-36 xs:h-36 bg-[#FFCBF2] rounded-full blur-2xl opacity-35 
                animate-topLeft
                "></div>
                <div className="absolute top-0 right-0 md:w-72 md:h-72 xs:w-36 xs:h-36 bg-[#C0FDFF] rounded-full blur-2xl opacity-35 
                animate-topRight"></div>
                <div className="absolute bottom-0 md:w-72 md:h-72 xs:w-36 xs:h-36 bg-[#C8E7FF] rounded-full blur-2xl opacity-35
                animate-bottomLeft"></div>
                <div className="absolute bottom-0 right-0 md:w-72 md:h-72 xs:w-36 xs:h-36 bg-[#E2AFFF] rounded-full blur-xl opacity-35 
                animate-bottomRight"></div>
                <div className="absolute top-0 md:w-72 md:h-72 xs:w-36 xs:h-36 bg-[#ECBCFD] rounded-full blur-2xl opacity-35
                animate-middleTop"></div>
                <div className="absolute bottom-0 md:w-72 md:h-72 xs:w-36 xs:h-36 bg-[#D0D1FF] rounded-full blur-2xl opacity-35 
                animate-middleBottom"></div>
            </div>
    );
}
 
export default BackgroundHero;