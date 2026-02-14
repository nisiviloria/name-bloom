import type { FlowerType } from "@/data/surprises";

interface FlowerSVGProps {
  type: FlowerType;
  isPlaying: boolean;
  hasStarted: boolean; // true once Play has been clicked at least once
}

const FlowerSVG = ({ type, isPlaying, hasStarted }: FlowerSVGProps) => {
  // If play has never been clicked, flower is fully invisible
  if (!hasStarted) {
    return (
      <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 mx-auto opacity-0" />
    );
  }

  const glowClass = isPlaying ? "animate-glow-pulse" : "";
  const pausedStyle = !isPlaying ? { animationPlayState: "paused" as const } : {};

  // Shadow colors for each flower type
  const shadowColors: Record<FlowerType, string> = {
    rose: "rgba(220, 53, 69, 0.4)",
    sunflower: "rgba(255, 193, 7, 0.4)",
    tulip: "rgba(220, 53, 100, 0.4)",
    lily: "rgba(245, 245, 245, 0.4)",
    daisy: "rgba(255, 255, 255, 0.4)",
    "cherry-blossom": "rgba(255, 182, 193, 0.4)",
    lavender: "rgba(147, 112, 219, 0.4)",
    orchid: "rgba(218, 112, 214, 0.4)",
    peony: "rgba(255, 192, 203, 0.4)",
  };

  const flowers: Record<FlowerType, JSX.Element> = {
    rose: (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`} style={pausedStyle}>
        {/* Stem - grows first */}
        <g className="flower-stem" style={pausedStyle}>
          <line x1="100" y1="150" x2="100" y2="280" stroke="hsl(140, 40%, 40%)" strokeWidth="4" />
        </g>
        {/* Leaves - appear after stem */}
        <g className="flower-leaves" style={pausedStyle}>
          <ellipse cx="85" cy="210" rx="18" ry="8" fill="hsl(140, 45%, 45%)" transform="rotate(-30, 85, 210)" />
          <ellipse cx="115" cy="240" rx="18" ry="8" fill="hsl(140, 45%, 45%)" transform="rotate(30, 115, 240)" />
        </g>
        {/* Petals - bloom last */}
        <g className="flower-petals" style={{ ...pausedStyle, transformOrigin: "100px 120px" }}>
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
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`} style={pausedStyle}>
        <g className="flower-stem" style={pausedStyle}>
          <line x1="100" y1="155" x2="100" y2="280" stroke="hsl(140, 40%, 40%)" strokeWidth="5" />
        </g>
        <g className="flower-leaves" style={pausedStyle}>
          <ellipse cx="80" cy="220" rx="22" ry="10" fill="hsl(140, 45%, 45%)" transform="rotate(-30, 80, 220)" />
        </g>
        <g className="flower-petals" style={{ ...pausedStyle, transformOrigin: "100px 115px" }}>
          {[...Array(12)].map((_, i) => (
            <ellipse key={i} cx="100" cy="75" rx="12" ry="30" fill="hsl(45, 90%, 55%)" transform={`rotate(${i * 30}, 100, 115)`} />
          ))}
          <circle cx="100" cy="115" r="22" fill="hsl(30, 50%, 30%)" />
          <circle cx="100" cy="115" r="18" fill="hsl(30, 45%, 35%)" />
        </g>
      </svg>
    ),
    tulip: (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`} style={pausedStyle}>
        <g className="flower-stem" style={pausedStyle}>
          <line x1="100" y1="160" x2="100" y2="280" stroke="hsl(140, 40%, 40%)" strokeWidth="4" />
        </g>
        <g className="flower-leaves" style={pausedStyle}>
          <ellipse cx="80" cy="230" rx="20" ry="8" fill="hsl(140, 45%, 45%)" transform="rotate(-40, 80, 230)" />
        </g>
        <g className="flower-petals" style={{ ...pausedStyle, transformOrigin: "100px 130px" }}>
          <ellipse cx="85" cy="90" rx="20" ry="50" fill="hsl(340, 65%, 55%)" transform="rotate(-8, 85, 90)" />
          <ellipse cx="115" cy="90" rx="20" ry="50" fill="hsl(340, 60%, 58%)" transform="rotate(8, 115, 90)" />
          <ellipse cx="100" cy="85" rx="15" ry="48" fill="hsl(340, 70%, 52%)" />
        </g>
      </svg>
    ),
    lily: (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`} style={pausedStyle}>
        <g className="flower-stem" style={pausedStyle}>
          <line x1="100" y1="160" x2="100" y2="280" stroke="hsl(140, 40%, 40%)" strokeWidth="4" />
        </g>
        <g className="flower-leaves" style={pausedStyle} />
        <g className="flower-petals" style={{ ...pausedStyle, transformOrigin: "100px 120px" }}>
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
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`} style={pausedStyle}>
        <g className="flower-stem" style={pausedStyle}>
          <line x1="100" y1="150" x2="100" y2="280" stroke="hsl(140, 40%, 40%)" strokeWidth="4" />
        </g>
        <g className="flower-leaves" style={pausedStyle} />
        <g className="flower-petals" style={{ ...pausedStyle, transformOrigin: "100px 115px" }}>
          {[...Array(10)].map((_, i) => (
            <ellipse key={i} cx="100" cy="85" rx="10" ry="28" fill="white" stroke="hsl(0,0%,90%)" strokeWidth="0.5" transform={`rotate(${i * 36}, 100, 115)`} />
          ))}
          <circle cx="100" cy="115" r="14" fill="hsl(50, 85%, 55%)" />
        </g>
      </svg>
    ),
    "cherry-blossom": (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`} style={pausedStyle}>
        <g className="flower-stem" style={pausedStyle}>
          <path d="M100 155 Q90 200 80 250 Q85 260 100 280 Q115 260 120 250 Q110 200 100 155" fill="hsl(25, 35%, 40%)" />
        </g>
        <g className="flower-leaves" style={pausedStyle}>
          <path d="M90 200 Q60 180 50 190" stroke="hsl(25, 35%, 40%)" strokeWidth="3" fill="none" />
          <path d="M110 220 Q140 200 145 210" stroke="hsl(25, 35%, 40%)" strokeWidth="3" fill="none" />
          {[...Array(5)].map((_, i) => (
            <ellipse key={`b1-${i}`} cx="50" cy="187" rx="6" ry="10" fill="hsl(340, 55%, 85%)" transform={`rotate(${i * 72}, 50, 190)`} />
          ))}
          {[...Array(5)].map((_, i) => (
            <ellipse key={`b2-${i}`} cx="145" cy="207" rx="6" ry="10" fill="hsl(340, 55%, 85%)" transform={`rotate(${i * 72}, 145, 210)`} />
          ))}
        </g>
        <g className="flower-petals" style={{ ...pausedStyle, transformOrigin: "100px 110px" }}>
          {[...Array(5)].map((_, i) => (
            <ellipse key={i} cx="100" cy="82" rx="16" ry="28" fill="hsl(340, 55%, 82%)" transform={`rotate(${i * 72}, 100, 110)`} />
          ))}
          <circle cx="100" cy="110" r="10" fill="hsl(340, 50%, 75%)" />
          <circle cx="100" cy="110" r="6" fill="hsl(45, 70%, 70%)" />
        </g>
      </svg>
    ),
    lavender: (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`} style={pausedStyle}>
        <g className="flower-stem" style={pausedStyle}>
          <line x1="100" y1="160" x2="100" y2="280" stroke="hsl(140, 35%, 45%)" strokeWidth="3" />
        </g>
        <g className="flower-leaves" style={pausedStyle}>
          <ellipse cx="80" cy="240" rx="15" ry="5" fill="hsl(140, 40%, 45%)" transform="rotate(-40, 80, 240)" />
        </g>
        <g className="flower-petals" style={{ ...pausedStyle, transformOrigin: "100px 110px" }}>
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
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`} style={pausedStyle}>
        <g className="flower-stem" style={pausedStyle}>
          <path d="M100 160 Q95 200 90 250 Q95 270 100 280 Q105 270 110 250 Q105 200 100 160" fill="hsl(140, 35%, 40%)" />
        </g>
        <g className="flower-leaves" style={pausedStyle} />
        <g className="flower-petals" style={{ ...pausedStyle, transformOrigin: "100px 110px" }}>
          <ellipse cx="70" cy="100" rx="28" ry="18" fill="hsl(290, 40%, 70%)" transform="rotate(-20, 70, 100)" />
          <ellipse cx="130" cy="100" rx="28" ry="18" fill="hsl(290, 40%, 70%)" transform="rotate(20, 130, 100)" />
          <ellipse cx="100" cy="75" rx="18" ry="28" fill="hsl(290, 45%, 75%)" />
          <ellipse cx="85" cy="135" rx="18" ry="14" fill="hsl(290, 35%, 72%)" transform="rotate(-10, 85, 135)" />
          <ellipse cx="115" cy="135" rx="18" ry="14" fill="hsl(290, 35%, 72%)" transform="rotate(10, 115, 135)" />
          <ellipse cx="100" cy="118" rx="14" ry="18" fill="hsl(340, 55%, 65%)" />
          <circle cx="100" cy="108" r="5" fill="hsl(50, 70%, 65%)" />
        </g>
      </svg>
    ),
    peony: (
      <svg viewBox="0 0 200 300" className={`w-full h-full ${glowClass}`} style={pausedStyle}>
        <g className="flower-stem" style={pausedStyle}>
          <line x1="100" y1="155" x2="100" y2="280" stroke="hsl(140, 40%, 40%)" strokeWidth="4" />
        </g>
        <g className="flower-leaves" style={pausedStyle}>
          <ellipse cx="85" cy="220" rx="20" ry="10" fill="hsl(140, 45%, 45%)" transform="rotate(-35, 85, 220)" />
          <ellipse cx="115" cy="250" rx="20" ry="10" fill="hsl(140, 45%, 45%)" transform="rotate(35, 115, 250)" />
        </g>
        <g className="flower-petals" style={{ ...pausedStyle, transformOrigin: "100px 115px" }}>
          {/* Outer layer - larger petals */}
          {[...Array(8)].map((_, i) => (
            <ellipse key={`outer-${i}`} cx="100" cy="75" rx="20" ry="32" fill="hsl(350, 60%, 75%)" transform={`rotate(${i * 45}, 100, 115)`} />
          ))}
          {/* Middle layer - medium petals */}
          {[...Array(8)].map((_, i) => (
            <ellipse key={`middle-${i}`} cx="100" cy="85" rx="16" ry="26" fill="hsl(350, 65%, 70%)" transform={`rotate(${i * 45 + 22.5}, 100, 115)`} />
          ))}
          {/* Inner layer - smaller petals */}
          {[...Array(6)].map((_, i) => (
            <ellipse key={`inner-${i}`} cx="100" cy="95" rx="12" ry="20" fill="hsl(350, 70%, 65%)" transform={`rotate(${i * 60}, 100, 115)`} />
          ))}
          {/* Center */}
          <circle cx="100" cy="115" r="12" fill="hsl(350, 75%, 60%)" />
          <circle cx="100" cy="115" r="8" fill="hsl(45, 75%, 65%)" />
        </g>
      </svg>
    ),
  };

  return (
    <div className="flex justify-center items-end mx-auto">
      {/* Left flower - slightly smaller and lower */}
      <div 
        className="w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 lg:w-52 lg:h-72 flower-reveal opacity-70 -mr-8 sm:-mr-10 md:-mr-12 lg:-mr-14 z-10"
        style={{
          filter: `drop-shadow(0 10px 20px ${shadowColors[type]}) drop-shadow(0 5px 10px ${shadowColors[type]})`
        }}
      >
        {flowers[type]}
      </div>
      
      {/* Center flower - largest */}
      <div 
        className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 flower-reveal z-20"
        style={{
          filter: `drop-shadow(0 15px 30px ${shadowColors[type]}) drop-shadow(0 8px 15px ${shadowColors[type]})`
        }}
      >
        {flowers[type]}
      </div>
      
      {/* Right flower - slightly smaller and lower */}
      <div 
        className="w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 lg:w-52 lg:h-72 flower-reveal opacity-70 -ml-8 sm:-ml-10 md:-ml-12 lg:-ml-14 z-10"
        style={{
          filter: `drop-shadow(0 10px 20px ${shadowColors[type]}) drop-shadow(0 5px 10px ${shadowColors[type]})`
        }}
      >
        {flowers[type]}
      </div>
    </div>
  );
};

export default FlowerSVG;