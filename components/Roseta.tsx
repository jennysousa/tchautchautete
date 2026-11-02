// Selo roseta da garantia de 7 dias.
export function Roseta() {
  const petals = Array.from({ length: 16 }, (_, i) => {
    const a = (i * 22.5 * Math.PI) / 180;
    return {
      cx: (60 + 43 * Math.cos(a)).toFixed(2),
      cy: (60 + 43 * Math.sin(a)).toFixed(2),
    };
  });
  return (
    <svg
      viewBox="0 0 120 120"
      width="120"
      height="120"
      role="img"
      aria-label="Selo de garantia de 7 dias"
      className="shrink-0"
    >
      {petals.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="13" fill="#CFB2F6" />
      ))}
      <circle cx="60" cy="60" r="41" fill="#FFFDFA" />
      <circle cx="60" cy="60" r="36" fill="none" stroke="#74608E" strokeWidth="1.5" strokeDasharray="2 3" />
      <text
        x="60"
        y="58"
        textAnchor="middle"
        fontSize="30"
        fontWeight="700"
        fill="#74608E"
        fontFamily="var(--font-dm-sans), sans-serif"
      >
        7
      </text>
      <text
        x="60"
        y="76"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1.5"
        fill="#313131"
        fontFamily="var(--font-dm-sans), sans-serif"
      >
        DIAS
      </text>
    </svg>
  );
}
