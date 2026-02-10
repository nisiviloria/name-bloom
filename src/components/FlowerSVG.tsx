import type { FlowerType } from "@/data/surprises";

interface FlowerSVGProps {
  type: FlowerType;
  isPlaying: boolean;
}

const FlowerSVG = ({ type, isPlaying }: FlowerSVGProps) => {
  const bloomClass = isPlaying ? "animate-bloom" : "";
  const glowClass = isPlaying ? "animate-glow-pulse" : "";

  const flowers: Record<FlowerType, JSX.Element> = {
    rose: (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`}>
        <g className={bloomClass} style={{ transformOrigin: "100px 120px" }}>
          {/* Stem */}
          <line x1="100" y1="150" x2="100" y2="280" stroke="hsl(140, 40%, 40%)" strokeWidth="4" />
          <ellipse cx="85" cy="210" rx="18" ry="8" fill="hsl(140, 45%, 45%)" transform="rotate(-30, 85, 210)" />
          <ellipse cx="115" cy="240" rx="18" ry="8" fill="hsl(140, 45%, 45%)" transform="rotate(30, 115, 240)" />
          {/* Petals */}
          <ellipse cx="100" cy="85" rx="22" ry="35" fill="hsl(345, 65%, 55%)" />
          <ellipse cx="75" cy="105" rx="22" ry="30" fill="hsl(345, 60%, 60%)" transform="rotate(-25, 75, 105)" />
          <ellipse cx="125" cy="105" rx="22" ry="30" fill="hsl(345, 60%, 60%)" transform="rotate(25, 125, 105)" />
          <ellipse cx="80" cy="125" rx="20" ry="28" fill="hsl(345, 55%, 65%)" transform="rotate(-15, 80, 125)" />
          <ellipse cx="120" cy="125" rx="20" ry="28" fill="hsl(345, 55%, 65%)" transform="rotate(15, 120, 125)" />
          <ellipse cx="100" cy="115" rx="18" ry="22" fill="hsl(345, 70%, 50%)" />
          <circle cx="100" cy="108" r="8" fill="hsl(45, 80%, 65%)" />
        </g>
      </svg>
    ),
    sunflower: (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`}>
        <g className={bloomClass} style={{ transformOrigin: "100px 120px" }}>
          <line x1="100" y1="155" x2="100" y2="280" stroke="hsl(140, 40%, 40%)" strokeWidth="5" />
          <ellipse cx="80" cy="220" rx="22" ry="10" fill="hsl(140, 45%, 45%)" transform="rotate(-30, 80, 220)" />
          {[...Array(12)].map((_, i) => (
            <ellipse key={i} cx="100" cy="75" rx="12" ry="30" fill="hsl(45, 90%, 55%)" transform={`rotate(${i * 30}, 100, 115)`} />
          ))}
          <circle cx="100" cy="115" r="22" fill="hsl(30, 50%, 30%)" />
          <circle cx="100" cy="115" r="18" fill="hsl(30, 45%, 35%)" />
        </g>
      </svg>
    ),
    tulip: (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`}>
        <g className={bloomClass} style={{ transformOrigin: "100px 130px" }}>
          <line x1="100" y1="160" x2="100" y2="280" stroke="hsl(140, 40%, 40%)" strokeWidth="4" />
          <ellipse cx="80" cy="230" rx="20" ry="8" fill="hsl(140, 45%, 45%)" transform="rotate(-40, 80, 230)" />
          <ellipse cx="85" cy="90" rx="20" ry="50" fill="hsl(340, 65%, 55%)" transform="rotate(-8, 85, 90)" />
          <ellipse cx="115" cy="90" rx="20" ry="50" fill="hsl(340, 60%, 58%)" transform="rotate(8, 115, 90)" />
          <ellipse cx="100" cy="85" rx="15" ry="48" fill="hsl(340, 70%, 52%)" />
        </g>
      </svg>
    ),
    lily: (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`}>
        <g className={bloomClass} style={{ transformOrigin: "100px 130px" }}>
          <line x1="100" y1="160" x2="100" y2="280" stroke="hsl(140, 40%, 40%)" strokeWidth="4" />
          {[...Array(6)].map((_, i) => (
            <ellipse key={i} cx="100" cy="80" rx="14" ry="40" fill={`hsl(0, 0%, ${95 - i * 3}%)`} transform={`rotate(${i * 60}, 100, 120)`} />
          ))}
          <circle cx="100" cy="120" r="6" fill="hsl(50, 80%, 60%)" />
          {[...Array(3)].map((_, i) => (
            <line key={i} x1="100" y1="120" x2={100 + Math.cos((i * 120 * Math.PI) / 180) * 18} y2={120 + Math.sin((i * 120 * Math.PI) / 180) * 18} stroke="hsl(50, 70%, 50%)" strokeWidth="1.5" />
          ))}
        </g>
      </svg>
    ),
    daisy: (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`}>
        <g className={bloomClass} style={{ transformOrigin: "100px 120px" }}>
          <line x1="100" y1="150" x2="100" y2="280" stroke="hsl(140, 40%, 40%)" strokeWidth="4" />
          {[...Array(10)].map((_, i) => (
            <ellipse key={i} cx="100" cy="85" rx="10" ry="28" fill="white" stroke="hsl(0,0%,90%)" strokeWidth="0.5" transform={`rotate(${i * 36}, 100, 115)`} />
          ))}
          <circle cx="100" cy="115" r="14" fill="hsl(50, 85%, 55%)" />
        </g>
      </svg>
    ),
    "cherry-blossom": (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`}>
        <g className={bloomClass} style={{ transformOrigin: "100px 120px" }}>
          <path d="M100 155 Q90 200 80 250 Q85 260 100 280 Q115 260 120 250 Q110 200 100 155" fill="hsl(25, 35%, 40%)" />
          <path d="M90 200 Q60 180 50 190" stroke="hsl(25, 35%, 40%)" strokeWidth="3" fill="none" />
          <path d="M110 220 Q140 200 145 210" stroke="hsl(25, 35%, 40%)" strokeWidth="3" fill="none" />
          {[...Array(5)].map((_, i) => (
            <ellipse key={i} cx="100" cy="82" rx="16" ry="28" fill="hsl(340, 55%, 82%)" transform={`rotate(${i * 72}, 100, 110)`} />
          ))}
          <circle cx="100" cy="110" r="10" fill="hsl(340, 50%, 75%)" />
          <circle cx="100" cy="110" r="6" fill="hsl(45, 70%, 70%)" />
          {/* Extra blossoms on branches */}
          {[...Array(5)].map((_, i) => (
            <ellipse key={`b1-${i}`} cx="50" cy="187" rx="6" ry="10" fill="hsl(340, 55%, 85%)" transform={`rotate(${i * 72}, 50, 190)`} />
          ))}
          {[...Array(5)].map((_, i) => (
            <ellipse key={`b2-${i}`} cx="145" cy="207" rx="6" ry="10" fill="hsl(340, 55%, 85%)" transform={`rotate(${i * 72}, 145, 210)`} />
          ))}
        </g>
      </svg>
    ),
    lavender: (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`}>
        <g className={bloomClass} style={{ transformOrigin: "100px 150px" }}>
          <line x1="100" y1="160" x2="100" y2="280" stroke="hsl(140, 35%, 45%)" strokeWidth="3" />
          <ellipse cx="80" cy="240" rx="15" ry="5" fill="hsl(140, 40%, 45%)" transform="rotate(-40, 80, 240)" />
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <ellipse cx={95} cy={60 + i * 13} rx="8" ry="6" fill={`hsl(270, 45%, ${60 + i * 2}%)`} />
              <ellipse cx={105} cy={60 + i * 13} rx="8" ry="6" fill={`hsl(270, 45%, ${60 + i * 2}%)`} />
            </g>
          ))}
        </g>
      </svg>
    ),
    orchid: (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`}>
        <g className={bloomClass} style={{ transformOrigin: "100px 130px" }}>
          <path d="M100 160 Q95 200 90 250 Q95 270 100 280 Q105 270 110 250 Q105 200 100 160" fill="hsl(140, 35%, 40%)" />
          {/* Large side petals */}
          <ellipse cx="70" cy="100" rx="28" ry="18" fill="hsl(290, 40%, 70%)" transform="rotate(-20, 70, 100)" />
          <ellipse cx="130" cy="100" rx="28" ry="18" fill="hsl(290, 40%, 70%)" transform="rotate(20, 130, 100)" />
          {/* Top petal */}
          <ellipse cx="100" cy="75" rx="18" ry="28" fill="hsl(290, 45%, 75%)" />
          {/* Bottom petals */}
          <ellipse cx="85" cy="135" rx="18" ry="14" fill="hsl(290, 35%, 72%)" transform="rotate(-10, 85, 135)" />
          <ellipse cx="115" cy="135" rx="18" ry="14" fill="hsl(290, 35%, 72%)" transform="rotate(10, 115, 135)" />
          {/* Lip */}
          <ellipse cx="100" cy="118" rx="14" ry="18" fill="hsl(340, 55%, 65%)" />
          <circle cx="100" cy="108" r="5" fill="hsl(50, 70%, 65%)" />
        </g>
      </svg>
    ),
  };

  return (
    <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 mx-auto">
      {flowers[type]}
    </div>
  );
};

export default FlowerSVG;
