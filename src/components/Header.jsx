import DrawOutlineButton from "./animations/DrawOutlineButton";
import ButtonFill from "./animations/ButtonFill";
import Logo from './imgs/Logo.svg'
export default function Header(){
    
    return(
        <>
           <header className="w-full h-20 flex items-center justify-center bg-white">
                <nav className="0 h-full   md:w-[1200px] w-full ">
                    <div className=" h-full flex items-center justify-between px-3">
                        <a className=" h-fit flex md:w-fit items-center gap-2 w-[120px] cursor-pointer" href="#">
                            <img src={Logo} className="size-12"/>
                            <span className="font-medium text-[1.1rem]">Aryan Kate</span>
                        </a> 
                        <ul className="hidden 1000:flex gap-12 font-medium text-[1.1rem] ">
                            <li><DrawOutlineButton>Skills</DrawOutlineButton></li>
                            <li><DrawOutlineButton>About</DrawOutlineButton></li>
                            <li><DrawOutlineButton>Projects</DrawOutlineButton></li>
                            <li><DrawOutlineButton>Certificates</DrawOutlineButton></li>
                           <li><DrawOutlineButton>Contact</DrawOutlineButton></li>
                        </ul>
                        <ButtonFill ><span>Resume</span><i class='bx bx-download'></i></ButtonFill>
                    </div>
                </nav>
           </header>
        </>
    )
}