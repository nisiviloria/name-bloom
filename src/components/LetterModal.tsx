import { useRef, useEffect, useState } from "react";
import { X, Mail, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LetterModalProps {
  letter: string;
  name: string;
  songUrl: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const LetterModal = ({ letter, name, songUrl, isOpen, onOpen, onClose }: LetterModalProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.error("Modal audio failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  // Stop audio when modal closes
  useEffect(() => {
    if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return (
      <Button
        onClick={onOpen}
        variant="outline"
        className="gap-2 mt-4 border-primary/30 text-primary hover:bg-primary/10 font-serif text-base px-6 py-5"
      >
        <Mail className="w-5 h-5" />
        Open Letter
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/30 backdrop-blur-sm">
      <div className="relative w-full max-w-md animate-fade-in-up bg-card rounded-2xl shadow-2xl p-8 border border-border">
        <audio ref={audioRef} src={songUrl} preload="auto" onEnded={() => setIsPlaying(false)} />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-4">
          <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
          <p className="text-sm text-muted-foreground font-sans">A letter for {name}</p>
        </div>

        <div className="font-serif text-card-foreground leading-relaxed whitespace-pre-line text-[15px]">
          {letter}
        </div>

        {/* Audio control in modal */}
        <div className="flex justify-center mt-6">
          <Button
            onClick={togglePlay}
            variant="outline"
            className="gap-2 border-primary/30 text-primary hover:bg-primary/10"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? "Pause Music" : "Play Music"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;
