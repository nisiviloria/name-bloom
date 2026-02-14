import { useRef, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MusicPlayerProps {
  songTitle: string;
  songArtist: string;
  songUrl: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
  progress: number;
  onProgressUpdate: (progress: number) => void;
}

const MusicPlayer = ({ songTitle, songArtist, songUrl, isPlaying, onTogglePlay, progress, onProgressUpdate }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => console.error("Audio playback failed:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      onProgressUpdate((audio.currentTime / audio.duration) * 100);
    }
  };

  const handleEnded = () => {
    onProgressUpdate(0);
    onTogglePlay();
  };

  return (
    <Card className="w-full max-w-sm mx-auto shadow-lg border-0 bg-card/90 backdrop-blur-sm">
      <CardContent className="p-6">
        <audio
          ref={audioRef}
          src={songUrl}
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />

        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <Music className="w-7 h-7 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="font-serif font-semibold text-card-foreground truncate">{songTitle}</p>
            <p className="text-sm text-muted-foreground truncate">{songArtist}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 rounded-full bg-accent mb-4 overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex justify-center">
          <Button
            onClick={onTogglePlay}
            size="icon"
            className="w-14 h-14 rounded-full shadow-md"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MusicPlayer;
