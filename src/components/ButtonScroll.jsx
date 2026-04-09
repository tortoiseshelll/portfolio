const ButtonScroll = ({ targetRef }) => {
  return (
    <div className="">
      <button
        className="h-screen w-screen flex justify-center animate-pulse"
        onClick={() => {
          targetRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative -top-36 size-14 md:size-20 text-zinc-200
              animate-bounce "
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 7l5 5l5 -5" />
          <path d="M7 13l5 5l5 -5" />
        </svg>
      </button>
    </div>
  );
};

export default ButtonScroll;
