type PasswordLengthProps = {
  maxLength: number;
  length: number;
  onChange: (value: number) => void;
};

function PasswordLength({ length, maxLength, onChange }: PasswordLengthProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-end">
        <label htmlFor="length">Character Length</label>
        <span className="text-2xl text-main">{length}</span>
      </div>
      <div className="relative group">
        <div className="w-full h-2 bg-veryDark absolute top-1/2 -translate-y-1/2 pointer-events-none">
          <div
            className="bg-main h-full relative before:absolute before:right-0 before:h-5 before:w-5 before:bg-white before:rounded-full before:top-1/2 before:translate-x-1/2 before:-translate-y-1/2 before:border-2 group-hover:before:bg-veryDark group-hover:before:border-main"
            style={{ width: (length / maxLength) * 100 + '%' }}></div>
        </div>
        <input
          className="w-full opacity-0 cursor-pointer"
          type="range"
          name="length"
          id="length"
          min={0}
          max={maxLength}
          value={length}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default PasswordLength;
