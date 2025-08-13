import { useRef } from "react";
import IconFill from "./animations/IconFill";
import DecryptedText from "./animations/DecryptedText";


export default function SectionHero(){
    return(
        <>
            <section className='flex  justify-center  md:h-[700px] h-[500px]' >
                <div className='md:w-[1200px] w-full h-full pt-[50px] md:pt-[200px] px-3 flex flex-col gap-10'>
    
                <div className=' w-full flex flex-col gap-12 '>
                                <div className='md:text-6xl text-3xl font-light'>
                                    <h1>Hello, I'm <span className='font-medium'>
                                        <DecryptedText
                                        text="Aryan Kate."
                                        speed="60"
                                        animateOn="view"
                                        revealDirection="start"
                                        sequential="true"
                                        />
                                    </span>
                                    </h1>
                                    <h1>A &nbsp;
                                        <span className='font-medium'>
                                        <DecryptedText
                                        text="Front End Developer"
                                        speed="60"
                                        animateOn="view"
                                        revealDirection="start"
                                        sequential="true"
                                        />
                                        </span>
                                    </h1>
                                    <h1>Based in ,&nbsp;
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
                                <div className=' text-wrap text-lg md:text-xl w-fit md:w-[600px] font-light'>
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
                <div className='w-fit '>
                    <div className='gap-2.5 md:gap-5 flex justify-center items-center '>
                    <IconFill><i className="fa-brands fa-github text-xl md:text-2xl"></i></IconFill>
                   
                    <IconFill><i class="fa-brands fa-linkedin-in text-xl md:text-2xl"></i></IconFill>   
                   
                    <IconFill><i class="fa-brands fa-steam text-xl md:text-2xl"></i></IconFill>
                    
                    <IconFill><i class="fa-brands fa-x-twitter text-xl md:text-2xl"></i></IconFill>
                    
                    <IconFill><i class="fa-brands fa-discord text-xl md:text-2xl"></i></IconFill>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}