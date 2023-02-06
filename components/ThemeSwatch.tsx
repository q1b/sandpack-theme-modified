import { swatchCls } from "./consts";

export default function ThemeSwatch({ colors, label, onClick, ...props }) {
  const [color1, color2] = colors;
  return (
    <div className="flex flex-col gap-y-1 items-center" {...props}>
      <button
        aria-label={label}
        onClick={onClick}
        className={`${swatchCls.outer} rounded-full ring-2 border-2 bg-white focus:outline-none ring-transparent focus:ring-slate-300 active:border-sky-500 border-slate-300`}
      >
        <div
          style={{
            background: `linear-gradient(-45deg, ${color2} 50%, ${color1} 50%)`,
          }}
          className={swatchCls.inner}
        ></div>
      </button>
      <span className="font-medium">{label}</span>
    </div>
  );
}
