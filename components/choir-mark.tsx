type Props = {
  className?: string;
  width?: number;
  height?: number;
};

export default function ChoirMark({
  className,
  width = 240,
  height = 160,
}: Props) {
  return (
    <svg
      viewBox="0 0 240 160"
      width={width}
      height={height}
      role="img"
      aria-label="Ornament: Lyra im Lorbeerkranz"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ccl-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#d8b86a" />
          <stop offset="1" stopColor="#8d6b24" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#ccl-gold)" strokeWidth="1.2">
        <circle cx="120" cy="82" r="62" strokeOpacity="0.55" />
        <path
          d="M74 82c6-24 24-40 46-40s40 16 46 40"
          strokeOpacity="0.4"
        />
        <g>
          <path d="M120 44v70" strokeWidth="1" />
          <path d="M106 54c-6 10-6 24 0 34l14 10 14-10c6-10 6-24 0-34" />
          <path d="M106 54c-4-6-4-14 0-20" />
          <path d="M134 54c4-6 4-14 0-20" />
          <path d="M100 82h40" strokeOpacity="0.6" />
          <path d="M100 96h40" strokeOpacity="0.6" />
          <circle cx="110" cy="114" r="4" fill="url(#ccl-gold)" stroke="none" />
          <circle cx="130" cy="114" r="4" fill="url(#ccl-gold)" stroke="none" />
        </g>
        <g strokeOpacity="0.45">
          <path d="M44 80c6-8 10-12 18-14" />
          <path d="M44 92c6-4 12-6 18-6" />
          <path d="M196 80c-6-8-10-12-18-14" />
          <path d="M196 92c-6-4-12-6-18-6" />
        </g>
      </g>
      <text
        x="120"
        y="150"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), serif"
        fontStyle="italic"
        fontSize="12"
        fill="#b08a3e"
        letterSpacing="2"
      >
        anno 1827
      </text>
    </svg>
  );
}
