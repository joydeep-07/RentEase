import { Mic, Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div
      className="
        flex items-center border pr-3 gap-2
        bg-[var(--bg-secondary)] border-[var(--border-light)]/50
        h-[46px] rounded-full overflow-hidden
        w-full max-w-xl  md:w-xl
        "
    >
      {/* Input */}
      <input
        type="text"
        placeholder="Search for furniture..."
        className="
          w-full h-full pl-4 pr-2
          outline-none
          text-[var(--text-secondary)]
          placeholder-[var(--text-muted)]/50
          text-sm
        "
      />

      {/* Search Button */}
      <button type="button" className="p-1">
        <SearchIcon
          size={18}
          className="text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer transition-colors"
        />
      </button>

      {/* Divider */}
      <div className="h-6 w-px bg-[var(--border-light)]/50"></div>

      {/* Mic Button */}
      <button type="button" className="p-1">
        <Mic
          size={18}
          className="text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer transition-colors"
        />
      </button>
    </div>
  );
}
