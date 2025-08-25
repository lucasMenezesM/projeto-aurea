const CardGradient: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className = "",
}) => (
  <div
    className={`rounded-2xl p-[1px] bg-gradient-to-br from-black via-gray-960 to-[#55008f] ${className}`}
  >
    <div className="rounded-2xl background-tertiary/80 bg-white/5 backdrop-blur-md h-full">
      {children}
    </div>
  </div>
);

export default CardGradient;
