type PasswrodStrengthProps = {
  strengthLevel: 0 | 1 | 2 | 3 | 4;
};

function PasswrodStrength({ strengthLevel }: PasswrodStrengthProps) {
  return (
    <div className="flex justify-end items-center gap-4 bg-veryDark p-4 md:px-8 md:py-6">
      <p className="text-grey mr-auto">STRENGTH</p>
      <p className="text-lg">
        {strengthLevel === 1 && 'TOO WEAK!'}
        {strengthLevel === 2 && 'WEAK'}
        {strengthLevel === 3 && 'MEDIUM'}
        {strengthLevel === 4 && 'STRONG'}
      </p>
      <div className="flex gap-2">
        {strengthLevel === 0 && (
          <>
            <div className="w-2.5 h-7 border-2"></div>
            <div className="w-2.5 h-7 border-2"></div>
            <div className="w-2.5 h-7 border-2"></div>
            <div className="w-2.5 h-7 border-2"></div>
          </>
        )}
        {strengthLevel === 1 && (
          <>
            <div className="w-2.5 h-7  bg-red"></div>
            <div className="w-2.5 h-7 border-2"></div>
            <div className="w-2.5 h-7 border-2"></div>
            <div className="w-2.5 h-7 border-2"></div>
          </>
        )}
        {strengthLevel === 2 && (
          <>
            <div className="w-2.5 h-7 bg-orange"></div>
            <div className="w-2.5 h-7 bg-orange"></div>
            <div className="w-2.5 h-7 border-2"></div>
            <div className="w-2.5 h-7 border-2"></div>
          </>
        )}
        {strengthLevel === 3 && (
          <>
            <div className="w-2.5 h-7 bg-yellow"></div>
            <div className="w-2.5 h-7 bg-yellow"></div>
            <div className="w-2.5 h-7 bg-yellow"></div>
            <div className="w-2.5 h-7 border-2"></div>
          </>
        )}
        {strengthLevel === 4 && (
          <>
            <div className="w-2.5 h-7 bg-main"></div>
            <div className="w-2.5 h-7 bg-main"></div>
            <div className="w-2.5 h-7 bg-main"></div>
            <div className="w-2.5 h-7 bg-main"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default PasswrodStrength;
