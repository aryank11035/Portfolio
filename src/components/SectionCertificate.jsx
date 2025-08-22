import CertificateCard from "./cards/CertificateCard";

export default function SectionCertificate(){
    return (
        <>
            <section id="certificates" className='w-full  flex flex-col justify-center items-center '>
                    <div className="bg-black w-full h-[10px]"></div>
                    <div className='font-light flex flex-col justify-center items-center max-w-[1200px]  w-full  mx-auto md:gap-8 gap-6 h-full  pb-20  px-4  mt-22'>
                        <h1 className='md:text-[40px] text-[1.95rem] w-full  text-center pt-20'>My <span className='font-semibold' >Certificates</span></h1>
                        <CertificateCard/>
                    </div>  
            </section>
        </>
    )
}