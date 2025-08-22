import ProjectCards from "./cards/ProjectCard";

export default function SectionProjects(){
    return(
        <>
            <section id="projects" className='w-full bg-white flex flex-col justify-center items-center '>
                    <div className="bg-white w-full h-[70px]"></div>
                    <div className="bg-black w-full h-fit">
                        <div className='text-white font-light flex flex-col justify-center items-center max-w-[1200px]  w-full  mx-auto gap-8  h-full pt-5 pb-20  px-4'>
                            <h1 className='md:text-[40px] text-[1.95rem] w-full  text-center pt-20'>My <span className='font-semibold'>Projects</span></h1>
                            <ProjectCards />
                        </div>
                    </div>
                    
            </section>
        </>
    )
}