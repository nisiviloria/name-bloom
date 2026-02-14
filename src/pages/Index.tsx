import { useState, useCallback, useEffect, useRef } from "react";
import { findSurprise, type SurpriseData } from "@/data/surprises";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FloatingPetals from "@/components/FloatingPetals";
import FlowerSVG from "@/components/FlowerSVG";
import MusicPlayer from "@/components/MusicPlayer";
import LetterModal from "@/components/LetterModal";
import { Heart } from "lucide-react";

const Index = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [surprise, setSurprise] = useState<SurpriseData | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = useCallback(() => {
    if (!name.trim()) return;
    const result = findSurprise(name);
    if (result) {
      setSurprise(result);
      setNotFound(false);
      setSubmitted(true);
    } else {
      setNotFound(true);
      setSurprise(null);
    }
  }, [name]);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
    setHasStarted(true);
  }, []);

  const handleProgressUpdate = useCallback((newProgress: number) => {
    setProgress(newProgress);
  }, []);

  // Welcome / Name Entry screen
  if (!submitted) {
    return (
      <div className="min-h-screen gradient-pink flex items-center justify-center p-4 relative overflow-hidden">
        <FloatingPetals />
        <div className="relative z-10 w-full max-w-md">
          <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-card-foreground mb-2">
                Someone has a surprise for you
              </h1>
        <p className="text-muted-foreground mb-2 font-sans">💌 Enter your name to find out</p>
              <div className="space-y-3">
                <Input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNotFound(false);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="Your name..."
                  className="text-center text-lg font-sans bg-background/60 border-border focus:border-primary"
                />
                <Button onClick={handleSubmit} className="w-full font-sans text-base py-5">
                  Continue
                </Button>
              </div>

              {notFound && (
                <p className="mt-4 text-muted-foreground animate-fade-in-up font-sans">
                  Baka naman nagkamali ka pa sa name mo or baka wala ka talagang suprise 💌
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Surprise Reveal screen
  const displayName = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();

  return (
    <div className="min-h-screen gradient-pink relative overflow-hidden">
      <FloatingPetals />
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-6 lg:p-12">
        {/* Flower section */}
        <div className="flex flex-col items-center animate-fade-in-up">
          <FlowerSVG type={surprise!.flower} isPlaying={isPlaying} hasStarted={hasStarted} />
          <p className="mt-2 text-sm text-muted-foreground font-sans">
            Play the music for the surprise
          </p>
        </div>

        {/* Player + Letter section */}
        <div
          className="flex flex-col items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          <MusicPlayer
            songTitle={surprise!.songTitle}
            songArtist={surprise!.songArtist}
            songUrl={surprise!.songUrl}
            isPlaying={isPlaying}
            onTogglePlay={togglePlay}
            progress={progress}
            onProgressUpdate={handleProgressUpdate}
          />

          <LetterModal
            letter={surprise!.letter}
            name={displayName}
            songUrl={surprise!.songUrl}
            isOpen={letterOpen}
            onOpen={() => setLetterOpen(true)}
            onClose={() => setLetterOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;