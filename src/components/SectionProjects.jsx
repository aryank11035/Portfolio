import ProjectCards from "./cards/ProjectCard";

export default function SectionProjects(){
    return(
        <>
            <section id="projects" className='w-full bg-black flex flex-col justify-center items-center '>
                    <div className="bg-white w-full h-[70px]"></div>
                    <div className='text-white font-light flex flex-col justify-center items-center max-w-[1260px]  w-full  mx-auto gap-10  h-full pt-5 pb-20  px-4'>
                        <h1 className='md:text-6xl text-2xl w-full  text-center py-10'>My <span className='font-medium'>Projects</span></h1>
                        <ProjectCards />
                    </div>
            </section>
        </>
    )
}