
import Header from './components/Header'
import SectionHero from './components/SectionHero'
import IconFill from './components/animations/IconFill'
import SectionSkills from './components/SectionSkills'
import SectionAbout from './components/SectionAbout'
import SectionProjects from './components/SectionProjects'
import learnReactImg from './assets/LearnReactCertificateSC.png'
import CertificateCard from './components/cards/CertificateCard'
import SectionCertificate from './components/SectionCertificate'
import ButtonFill from './components/animations/ButtonFill'
import DrawOutlineButton from './components/animations/DrawOutlineButton'
function App() {

  return (
    <>
      <Header/>
      <SectionHero/>
      <SectionSkills/>
      <SectionAbout />
      <SectionProjects />
      <SectionCertificate/>
      <section id="contact" className=' w-full flex items-center justify-center'>
        <div className='max-w-[1200px] w-full  flex items-center justify-center flex-col mt-22 pb-20 gap-8 px-4'>
          <h1 className='text-[1.95rem] md:text-[40px] font-light'>Contact <span className='font-semibold'>Me</span></h1>
            <div className="flex  w-full  items-center justify-between gap-[100px] h-full flex-col 1000:flex-row">
              <form  className='flex flex-col h-full w-full 1000:max-w-[500px] gap-5  ' >
                <label htmlFor="name">
                  <input id="name" type="text" placeholder='Your Name' className='outline-0 py-3.5 border-1 w-full pl-3'/>
                </label>
                <label htmlFor="email">
                  <input id="email" type="email" placeholder='Your Email'  className='outline-0 py-3.5 border-1 w-full pl-3'/>
                </label>
                <textarea placeholder='How can I Help?'  className='outline-0 py-3.5 border-1 pl-3 resize-x w-full 1000:max-w-[500px]'></textarea>
                <button className=' w-fit'> 
                  <ButtonFill>Get in Touch</ButtonFill>
                </button>
              </form>   
              <div className=' flex flex-col gap-2.5 h-full w-full '>
                <h1 className='md:text-3xl text-2xl font-light w-full'>Let's <span className='font-semibold'>Build!</span></h1>
                <h1 className='md:text-3xl text-2xl font-light w-full '>Bring <span className='font-semibold'>Ideas to Life</span></h1>
                <h1 className='md:text-3xl text-2xl font-light w-full'>On The<span className='font-semibold'>Web</span></h1>
                <p className='md:text-[1rem] text-sm font-light leading-6.5'>
                  I’m passionate about creating clean, responsive, and interactive websites that deliver great user experiences. Whether you need a project built from scratch, improvements to an existing site, or just want to collaborate on new ideas, I’d love to connect. Let’s create something impactful together!
                </p>
                <a className='text-lg'><DrawOutlineButton>aryankate2020@gmail.com</DrawOutlineButton></a>
              </div>
            </div>
        </div>
      </section>  
    </>
  )
}




export default App  
