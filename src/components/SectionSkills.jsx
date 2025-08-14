import IconFill from "./animations/IconFill"
export default function SectionSkills(){
    return(
        <>
            <section className='flex items-center justify-center gap-20 w-full bg-black mb-16'>
                <div className="md:w-[1200px] w-full flex flex-col gap-20 text-center items-center justify-center px-3 py-32 ">

                    <h1 className='font-light md:text-6xl text-2xl text-white'>My <span className='font-medium'>Skills</span></h1>
                    <div className=' grid w-full grid-cols-2 grid-rows-2 gap-8 1000:grid-cols-5 1000:grid-rows-2  '>
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
            </section>
        </>
    )
}