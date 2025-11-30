interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`pb-3 px-4 text-sm font-bold tracking-wider transition-colors relative whitespace-nowrap ${
        isActive ? 'text-cyan-400' : 'text-slate-500 hover:text-white'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
      )}
    </button>
  );
}
