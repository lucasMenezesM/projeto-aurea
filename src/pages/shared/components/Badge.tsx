const Badge: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border border-white/10 bg-white/5 backdrop-blur-sm">
    {children}
  </span>
);

export default Badge;
