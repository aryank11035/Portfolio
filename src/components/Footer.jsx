import DecryptedText from "./animations/DecryptedText"
import whiteLogo from './imgs/whiteLogo.svg'
export default function Footer(){
    return (
        <>
            <footer className='bg-black w-full h-20 flex items-center justify-center'>
                <div className='max-w-[1200px] h-full flex w-full items-center justify-between text-sm font-light text-white  px-2'>
                <a className='flex gap-0.5' href="#">
                    <img src={whiteLogo} className='size-5' />
                    <span className='cursor-pointer'>
                        <DecryptedText
                        text="Aryan Kate."
                        speed="60"
                        animateOn="view"
                        revealDirection="center"
                        sequential="true"
                        />     
                    </span>
                </a>
                <div className="flex ">
                    <a className="group cursor-pointer  flex items-center" href="https://github.com/aryank11035" target="_blank">
                        <span className="relative">
                                &copy; 2025
                            <span className="absolute bottom-0 left-1/2 h-[1px] w-full bg-white scale-x-0 transform -translate-x-1/2 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                        </span>
                    </a>
                    <p>&nbsp;| All Rights Resevered</p>
                    </div>
                </div>
            </footer>
        </>
    )
}