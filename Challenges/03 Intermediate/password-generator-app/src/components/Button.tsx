function Button() {
  return (
    <button className="flex justify-center items-center gap-4 font-semibold border-2 border-main text-veryDark p-4 bg-main hover:bg-dark hover:text-main group">
      GENERATE <ArrowIcon />
    </button>
  );
}

export default Button;

function ArrowIcon() {
  return (
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        className="group-hover:fill-main"
        fill="#24232C"
        d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
      />
    </svg>
  );
}
