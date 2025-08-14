import DrawOutlineButton from "./animations/DrawOutlineButton";
import ButtonFill from "./animations/ButtonFill";
import Logo from './imgs/Logo.svg'
import DecryptedText from "./animations/DecryptedText";
export default function Header(){
    
    return(
        <>
           <header className="sticky  top-0 z-50 w-full h-20 flex items-center justify-center bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl">
                <nav className="0 h-full   md:w-[1200px] w-full ">
                    <div className=" h-full flex items-center justify-between px-3">
                        <a className=" h-fit flex md:w-fit items-center gap-2 w-[120px] cursor-pointer" href="#">
                            <img src={Logo} className="size-12 "/>
                            <span className="font-medium text-[1.1rem]">
                               
                                <span className='font-medium'>
                                    <DecryptedText
                                            text="Aryan Kate."
                                            speed="60"
                                            animateOn="view"
                                            revealDirection="center"
                                            sequential="true"
                                    />
                                </span>     
                            </span>
                        </a> 
                        <ul className="hidden 1000:flex gap-12 font-medium text-[1.1rem] ">
                            <li><a href="#skills"><DrawOutlineButton>Skills</DrawOutlineButton></a></li>
                            <li><a href="#about"><DrawOutlineButton>About</DrawOutlineButton></a></li>
                            <li><a href="#projects"><DrawOutlineButton>Projects</DrawOutlineButton></a></li>
                            <li><a href="#"><DrawOutlineButton>Certificates</DrawOutlineButton></a></li>
                            <li><a href="#"><DrawOutlineButton>Contact</DrawOutlineButton></a></li>
                        </ul>
                        <ButtonFill ><span>Resume</span><i class='bx bx-download'></i></ButtonFill>
                    </div>
                </nav>
           </header>
        </>
    )
}