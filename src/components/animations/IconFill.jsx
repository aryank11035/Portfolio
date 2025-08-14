export default function IconFill({children,size}){
    const sizeClasses = {
        medium: "w-10 h-10 md:w-[50px] md:h-[50px]",
        large: "w-full h-[130px] md:h-[180px]"
    }
    return(
       <a
        href="#"
        className={`relative inline-flex items-center justify-center gap-2  ${sizeClasses[size] || sizeClasses.medium} border border-black  bg-white text-black     overflow-hidden isolate transition-colors duration-300 ease-in-out group`}
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