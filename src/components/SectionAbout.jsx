export default function SectionAbout(){

    return (
        <>
            <section id="about"className='w-full  flex justify-center items-center mb-16 mt-28'>
                <div className='md:w-[1200px] w-full  flex flex-col  items-start  text-2xl md:text-6xl gap-8 px-3 py-18  '>
                    <h1 className='font-light flex items-center justify-center w-full'>About&nbsp;<span className='font-medium'>Me</span></h1>
                        <p className='text-sm md:text-[1.3rem] font-light '>
                        <h1 className='font-semibold pb-5 text-xl md:text-2xl'>Who am I?</h1>
                        I’m a passionate web developer from India. I started out editing photos in Lightroom, which sparked my love for clean & minimalistic designs. Now, I’m focused on building functional, visually appealing websites and constantly learning new tools to grow.
                        </p>
                        <p className= 'text-sm md:text-[1.3rem] flex flex-col font-light leading-6 md:leading-9'>
                        <h1 className='font-semibold pb-4 text-xl md:text-2xl '>My Education</h1>
                        <strong className='font-semibold' >Junior College</strong>
                        <a className='underline cursor-pointer'>B.K.S English Junior College,Vasai</a>
                        Attended From ( 2020 - 2022 )
                        </p>
                        <p className='text-sm md:text-[1.3rem] flex flex-col font-light leading-6 md:leading-9'>
                        <strong className='font-semibold' >University</strong>
                        <a className='underline cursor-pointer'>Parle Tilak Association’s Sathaye College</a>
                        Attended from ( 2022 - 2025 )
                        </p>
                </div>
            </section>
        </>
    )
}