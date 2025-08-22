import IconFill from "./animations/IconFill"
export default function SectionSkills(){
    return(
        <>
            <section id="skills" className='flex flex-col items-center justify-center  w-full  bg-white border-none '>
                     <div className="w-full h-[65px] bg-white border-none "></div>
                    <div className="bg-black w-full h-fit border-none">
                        <div className="max-w-[1200px] w-full flex flex-col md:gap-30 gap-8 text-center items-center justify-center mx-auto md:py-38 py-20 bg-black border-none">

                            <h1 className='font-light md:text-[40px] text-[1.95rem] text-white  w-full mx-auto'>My <span className='font-semibold'>Skills</span></h1>
                            <div className=' grid w-full  grid-cols-2 grid-rows-2 gap-3 1000:grid-cols-5 1000:grid-rows-2 px-3.5    '>
                                <IconFill size={"large"}>
                                <div className=' flex items-center justify-center flex-col gap-8 '>
                                    <i className="fa-brands fa-react text-4xl"></i>
                                    <span className='text-[1.3rem] font-medium'>React</span>
                                </div>
                                </IconFill>
                                <IconFill size={"large"}>
                                <div className=' flex items-center justify-center flex-col gap-8'>
                                    <i className="fa-brands fa-js text-4xl"></i>
                                    <span className='text-[1.3rem] font-medium'>Javascript</span>
                                </div> 
                                </IconFill>
                                <IconFill size={"large"}>
                                <div className=' flex items-center justify-center flex-col gap-8'>
                                    <i className="fa-brands fa-html5 text-4xl"></i>
                                    <span className='text-[1.3rem] font-medium'>Html</span>
                                </div>
                                </IconFill>
                                <IconFill size={"large"}>
                                <div className=' flex items-center justify-center flex-col gap-8'>
                                    <i className="fa-brands fa-css3-alt text-4xl"></i>
                                    <span className='text-[1.3rem] font-medium'>Css</span>
                                </div>
                                </IconFill>
                                <IconFill size={"large"}>
                                <div className=' flex items-center justify-center flex-col gap-8'>
                                    <i class="ri-tailwind-css-fill text-4xl"></i>
                                    <span className='text-[1.3rem] font-medium'>Tailwind</span>
                                </div>
                                </IconFill>
                                <IconFill size={"large"}>
                                <div className=' flex items-center justify-center flex-col gap-8'>
                                    <i className="fa-brands fa-github text-4xl"></i>    
                                    <span className='text-[1.3rem] font-medium'>Github</span>
                                </div>
                                </IconFill>
                                <IconFill size={"large"}>
                                <div className=' flex items-center justify-center flex-col gap-8'>
                                    <i className="fa-brands fa-unity text-4xl"></i>
                                    <span className='text-[1.3rem] font-medium'>Unity</span>
                                </div>
                                </IconFill>
                                <IconFill size={"large"}>
                                <div className=' flex items-center justify-center flex-col gap-8'>
                                    <i className="fa-brands fa-npm text-4xl"></i>
                                    <span className='text-[1.3rem] font-medium'>Npm</span>
                                </div>
                                </IconFill>
                                <IconFill size={"large"}>
                                <div className=' flex items-center justify-center flex-col gap-8'>
                                    <i className="fa-brands fa-git-alt text-4xl"></i>
                                    <span className='text-[1.3rem] font-medium'>Git</span>
                                </div>
                                </IconFill>
                                <IconFill size={"large"}>
                                <div className=' flex items-center justify-center flex-col gap-8'>
                                    <i class="fa-solid fa-camera text-4xl"></i>
                                    <span className='text-[1.3rem] font-medium'>Lightroom</span>
                                </div>
                                </IconFill> 
                            </div>

                        </div>
                    </div>
                     
            </section>
        </>
    )
}