import { useMemo } from "react";

const FloatingPetals = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        size: 10 + Math.random() * 14,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <svg
          key={p.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          viewBox="0 0 20 20"
        >
          <ellipse
            cx="10"
            cy="10"
            rx="8"
            ry="5"
            fill="hsl(340, 60%, 70%)"
            transform="rotate(30, 10, 10)"
          />
        </svg>
      ))}
    </div>
  );
};

export default FloatingPetals;
