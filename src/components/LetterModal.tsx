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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

<<<<<<< HEAD
  // Initialize audio
  useEffect(() => {
    if (!songUrl) return;

    const audio = new Audio(songUrl);
    audio.preload = "auto";
    audio.onended = () => setIsPlaying(false);
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [songUrl]);

  const togglePlay = () => {
    if (!audioRef.current || !songUrl) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Modal audio failed:", err);
      });
=======
  const getAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio(songUrl);
      audio.preload = "auto";
      audio.onended = () => setIsPlaying(false);
      audioRef.current = audio;
    }
    return audioRef.current;
  };

  const togglePlay = () => {
    const audio = getAudio();
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((err) => console.error("Modal audio failed:", err));
>>>>>>> e4c01d64db83852635262c08e71a4be95070e213
      setIsPlaying(true);
    }
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-8 bg-foreground/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <style>{`
        .letter-scroll::-webkit-scrollbar {
          width: 8px;
        }
        
        .letter-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .letter-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #ffc0cb, #ffb6c1);
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        
        .letter-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #ffb6c1, #ffa0b0);
          background-clip: padding-box;
        }
        
        /* For Firefox */
        .letter-scroll {
          scrollbar-width: thin;
          scrollbar-color: #ffc0cb transparent;
        }
      `}</style>
      
      <div 
        className="relative w-full max-w-5xl min-w-[85vw] lg:min-w-[400px] animate-fade-in-up bg-card rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-muted-foreground hover:text-foreground transition-colors hover:bg-accent rounded-full p-2"
          aria-label="Close letter"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="text-center mb-6 sm:mb-8">
          <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3" />
          <p className="text-sm sm:text-base text-muted-foreground font-sans">A letter for {name}</p>
        </div>

        <div className="letter-scroll font-serif text-card-foreground leading-relaxed whitespace-pre-line text-base sm:text-sm max-h-[50vh] sm:max-h-[55vh] overflow-y-auto px-4 sm:px-8 md:px-12">
          {letter}
        </div>

<<<<<<< HEAD
=======
        {/* Audio playback control in modal */}
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
>>>>>>> e4c01d64db83852635262c08e71a4be95070e213
      </div>
    </div>
  );
};

export default LetterModal;