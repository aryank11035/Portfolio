import projects from "../../Constants/projects.jsx"
export default function ProjectCards(){
    return (Object.values(projects).map((project,index) => (
        <>
            <div key={project.title} className='w-full flex px-7.5'>
                <div className={`flex w-full gap-10 p-5 items-center justify-center border border-gray-800 hover:bg-[rgba(255,255,255,0.12)] duration-500 flex-col 1000:flex-row
                                ${index % 2 !== 0 ? "1000:flex-row-reverse" : ""}
                                `}>
                        
                    <div className='w-full md:h-[360px] h-[160px] z-10'>
                        <img className="w-full h-full object-cover" src={project.img} alt={project.title}/>
                    </div>

                    <div className='bg-transparent w-full h-fit flex flex-col gap-4 md:text-3xl text-xl leading-6 font-bold justify-between duration-500'>
                        <h1 >{project.number}</h1>
                        <h1>{project.title}</h1>
                        <p className='md:text-[1rem] text-sm font-light'>{project.desc}</p>
                        <div className='flex text-[1rem] text-sm gap-6  w-full flex-col md:flex-row'>

                            <div className='flex gap-3 md:text-[1rem] text-sm md:w-fit w-full items-center justify-center'>
                                <a href={project.links.site} ><i class="fa-solid fa-link mr-3 text-lg"></i>View</a>
                                <a href={project.links.code} ><i class="fa-brands fa-github mr-3 text-lg "></i>Source</a>
                            </div>
                            <div className="flex flex-row gap-3 md:w-fit w-full md:justify-normal justify-center ">
                                {Object.entries(project.stacks).map(([stackName,stackIcon]) => {
                                    const paddingClass = stackName === 'tailwind' ? 'py-2 px-3.5' : stackName==='api'? 'p-2' :'p-3' 
                                    
                                    return(
                                        <div key={stackName} className={`flex items-center justify-center border border-gray-700 ${paddingClass}`}>
                                            {stackIcon}
                                        </div>
                                        )
                                    })}
                            </div>

                        </div>
                    </div>
                </div>                
            </div> 
        </>
    )))
}