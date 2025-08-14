import ProjectCards from "./cards/ProjectCard";

export default function SectionProjects(){
    return(
        <>
            <section  className='w-full bg-black flex justify-center items-center '>
                    <div className='text-white font-light flex flex-col justify-center items-center md:w-[1260px]  w-full gap-5  h-full pt-5 pb-20 '>
                        <h1 className='md:text-6xl text-2xl w-full  text-center py-10'>My <span className='font-medium'>Projects</span></h1>
                        <ProjectCards />
                    </div>
            </section>
        </>
    )
}