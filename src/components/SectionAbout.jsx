export default function SectionAbout(){

    return (
        <>
            <section id="about"className='w-full  flex flex-col justify-center items-center '>
                <div className="w-full h-[20px] bg-black"></div>
                <div className='max-w-[1200px] w-full  flex flex-col  items-start  text-[1.95rem] md:text-[40px] md:gap-8 gap-6 px-4 md:py-38 py-20 mx-auto'>
                        <h1 className='font-light w-full text-center'>About&nbsp;<span className='font-semibold'>Me</span></h1>
                        <p className='text-[1rem] md:text-[1.3rem] font-light '>
                            <span className='font-semibold pb-5 text-xl md:text-2xl  block'>Who am I?</    span>
                            I’m a passionate web developer from India. I started out editing photos in Lightroom, which sparked my love for clean & minimalistic designs. Now, I’m focused on building functional, visually appealing websites and constantly learning new tools to grow.
                        </p>
                        <p className= 'text-[1rem] md:text-[1.3rem] flex flex-col font-light leading-6 md:leading-9'>
                            <span className='font-semibold pb-4 text-xl md:text-2xl '>My Education</span>
                            <strong className='font-semibold' >Junior College</strong>
                            <a className='underline cursor-pointer'>B.K.S English Junior College,Vasai</a>
                            Attended From ( 2020 - 2022 )
                        </p>
                        <p className='text-[1rem] md:text-[1.3rem] flex flex-col font-light leading-6 md:leading-9'>
                            <strong className='font-semibold' >University</strong>
                            <a className='underline cursor-pointer'>Parle Tilak Association’s Sathaye College</a>
                            Attended from ( 2022 - 2025 )
                        </p>
                </div>
            </section>
        </>
    )
}