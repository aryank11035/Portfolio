import { useRef } from "react";
import IconFill from "./animations/IconFill";
import DecryptedText from "./animations/DecryptedText";


export default function SectionHero(){

   
    return(
        <>
            <section className='flex  justify-center border-0 h-screen min-h-screen' >
                <div className='max-w-[1200px] w-full  px-3 flex flex-col gap-10 items-center justify-center  overflow-hidden h-full'>
                    <div className=' w-full flex flex-col md:gap-10 gap-5'>
                                    <div className='md:text-6xl text-[40px] font-light md:leading-20 leading-12'>
                                        <h1>Hello, I'm&nbsp; 
                                            <span className='font-medium'>
                                                <DecryptedText
                                                text="Aryan Kate."
                                                speed="60"
                                                animateOn="view"
                                                revealDirection="start"
                                                sequential="true"
                                                />
                                            </span>
                                        </h1>
                                        <h1>A&nbsp;
                                            <span className='font-medium '>
                                            <DecryptedText
                                            text="Front End Web Developer"
                                            speed="60"
                                            animateOn="view"
                                            revealDirection="start"
                                            sequential="true"
                                            />
                                            </span>
                                        </h1>
                                        <h1>Based in,&nbsp;
                                            <span className='font-medium'>
                                            <DecryptedText
                                            text="India."
                                            speed="60"
                                            animateOn="view"
                                            revealDirection="start"
                                            sequential="true"
                                            />
                                            </span>
                                        </h1>
                                    </div>
                                    <div className=' text-wrap text-[1rem] md:text-xl w-fit md:w-[600px] font-light px-1'>
                                        <p>
                                            
                                            <DecryptedText
                                            text="I'm a Web Developer passionate about creating high-quality, user-focused solutions. I'm committed to continuous learning and growth, bringing both skill and dedication to every project to deliver exceptional results."
                                            speed="10"
                                            animateOn="view"
                                            revealDirection="start"
                                            sequential="true"
                                            useOriginalCharsOnly="true"
                                            />
                                        </p>
                                    </div>
                            
                    </div>
                    <div className='w-fit px-1 mr-auto'>
                        <div className='gap-2.5 md:gap-5 flex justify-center items-center '> 
                        <IconFill size={"medium"} mode={"white"} link={"https://github.com/aryank11035"}> 
                                    <i className="fa-brands fa-github text-xl md:text-2xl"></i>
                        </IconFill>          
                        <IconFill size={"medium"} mode={"white"} link={"https://www.linkedin.com/in/aryan-kate-7900b4251/"}>
                            <i class="fa-brands fa-linkedin-in text-xl md:text-2xl ">
                        </i></IconFill>   
                    
                        <IconFill size={"medium"} mode={"white"} link={"https://steamcommunity.com/profiles/76561199840199124/"}><i class="fa-brands fa-steam text-xl md:text-2xl"></i></IconFill>
                        
                        <IconFill size={"medium"} mode={"white"} link={"https://x.com/Munchin182882"}><i class="fa-brands fa-x-twitter text-xl md:text-2xl"></i></IconFill>
                        
                        <IconFill size={"medium"} mode={"white"} link={"https://open.spotify.com/user/hnx0koxon9a4gds0axjwl0co1"}><i class="fa-brands fa-spotify text-xl md:text-2xl"></i></IconFill>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}