import certificates from "../../Constants/certificates.jsx"


export default function CertificateCard(){
    return (
        Object.values(certificates).map((certificate,index) => (
            <>
                <div className='w-full flex' key={certificate.title}>
                    <div className={`flex w-full gap-10  p-5 items-center justify-center border border-gray-800 cursor-pointer hover:bg-black hover:text-white duration-400 flex-col
                                    ${index % 2 === 0 ? "1000:flex-row" : "1000:flex-row-reverse"}`}>
                    
                        <div className='w-full h-fit overflow-hidden'>
                            <img className="w-full h-full object-cover" src={certificate.img}/>
                        </div>
            
                        <div className=' w-full h-fit flex flex-col gap-10 md:text-3xl text-2xl leading-6 font-bold justify-between duration-500 bg-transparent'>
                            <h1>{certificate.number}</h1>
                            <h1>{certificate.title}</h1>
                            <p className='md:text-[1rem] text-sm font-light leading-6.5'>{certificate.desc}</p>
                        </div>
                    </div>                
                </div>
            </>
        ) )
    )
}