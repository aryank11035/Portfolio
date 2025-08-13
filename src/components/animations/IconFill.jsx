export default function IconFill({children}){
    return(
       <a
        href="#"
        className="relative inline-flex items-center justify-center gap-2 p-2 md:p-3.5 border border-black  bg-white text-black     overflow-hidden isolate transition-colors duration-300 ease-in-out group"
        >
            {/* Background hover layer */}
            <span
                className="
                absolute top-0 left-0 w-full h-full bg-black scale-y-0 
                [transform-origin:top] 
                transition-transform duration-400 ease-in-out 
                group-hover:scale-y-100 group-hover:[transform-origin:bottom] 
                z-[1]
                "
            />

            {/* Button text */}
            <span className="relative z-[2] font-bold flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-300 ease-in-out group-hover:text-white">
                {children}
                
            </span> 
        </a>

    )
}