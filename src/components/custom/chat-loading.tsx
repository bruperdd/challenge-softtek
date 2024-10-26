export function ChatLoading() {
  return (
    <div className="flex gap-2">
      <div className="h-2 w-2 rounded-full bg-slate-400 opacity-0 animate-fadeInUp delay-75 repeat-infinite" />
      <div className="h-2 w-2 rounded-full bg-slate-400 opacity-0 animate-fadeInUp delay-150 repeat-infinite" />
      <div className="h-2 w-2 rounded-full bg-slate-400 opacity-0 animate-fadeInUp delay-300 repeat-infinite" />
    </div>
  );
}
