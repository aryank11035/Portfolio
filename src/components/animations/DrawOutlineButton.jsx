import DecryptedText from "./DecryptedText";
export default function DrawOutlineButton  ({ children, ...rest })  {
  return (
    <button
      {...rest}
      className=" group font-space-grotesk font-medium bg-transparent outline-none border-none cursor-pointer"
    >
      <span className="relative">
        <DecryptedText
        text={children}
        speed="60"
        animateOn="view"
        revealDirection="start"
        sequential="true"

        />

        {/* Underline that expands from center */}
        <span className="absolute bottom-0 left-1/2 h-[2px] w-full bg-black scale-x-0 transform -translate-x-1/2 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      </span>
    </button>
  );
};
