export default function IconFill({children,size = "medium",mode="dark",link}){
    const sizeClasses = {
        medium: "w-12 h-12 md:w-[50px] md:h-[50px]",
        large: "w-full h-[130px] md:h-[180px]",
    };

    const modeClasses = {
        white: {
            base: "border-black bg-white text-black ",
            hover: " group-hover:text-white",
        },
        dark: {
            base: "border-gray-400 bg-black text-white",
            hover: " group-hover:text-black",
        },
    };
    
    return(
       <a 
       href={link}
       target="_blank"
       rel="noopener noreferrer"
        className={`relative inline-flex items-center justify-center gap-2  ${sizeClasses[size]} border ${modeClasses[mode].base} overflow-hidden  transition-colors duration-300 ease-in-out group pointer-events-auto`}
        >
            {/* Background hover layer */}
            <span   
                className={`
                absolute top-0 left-0 w-full h-full scale-y-0 
                [transform-origin:top] 
                transition-transform duration-400 ease-in-out 
                group-hover:scale-y-100 group-hover:[transform-origin:bottom] 
                pointer-events-none
                z-[1]
                    ${mode === 'white' ? 'bg-black' : 'bg-white'}
                `}
            />

            {/* Button text */}
            <span className={`relative z-[2] font-bold flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-300 ease-in-out ${modeClasses[mode].hover}`}>
                {children}
                
            </span> 
        </a>

    )
}