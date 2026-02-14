import { useRef, useCallback, useEffect } from "react";
import { Play, Pause, Music, RotateCcw } from "lucide-react";
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

const MusicPlayer = ({ 
  songTitle, 
  songArtist, 
  songUrl, 
  isPlaying, 
  onTogglePlay, 
  progress, 
  onProgressUpdate 
}: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    if (!songUrl) return;

    const audio = new Audio(songUrl);
    audio.preload = "auto";
    
    audio.ontimeupdate = () => {
      if (audio.duration) {
        onProgressUpdate((audio.currentTime / audio.duration) * 100);
      }
    };
    
    audio.onended = () => {
      onProgressUpdate(100);
      onTogglePlay();
    };

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [songUrl, onProgressUpdate, onTogglePlay]);

  // Handle play/pause state changes
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.error("Audio playback failed:", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = useCallback(() => {
    if (!audioRef.current || !songUrl) {
      console.warn("No audio available to play");
      return;
    }
    onTogglePlay();
  }, [songUrl, onTogglePlay]);

  const handleReset = useCallback(() => {
    if (!audioRef.current) return;
    
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    onProgressUpdate(0);
    
    if (isPlaying) {
      onTogglePlay();
    }
  }, [isPlaying, onTogglePlay, onProgressUpdate]);

  return (
    <Card className="w-full max-w-sm mx-auto shadow-lg border-0 bg-card/90 backdrop-blur-sm">
      <CardContent className="p-6">
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
        <div className="flex justify-center items-center gap-3">
          <Button
            onClick={handleReset}
            size="icon"
            variant="outline"
            className="w-10 h-10 rounded-full"
            disabled={!songUrl || progress === 0}
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          
          <Button
            onClick={handlePlayPause}
            size="icon"
            className="w-14 h-14 rounded-full shadow-md"
            disabled={!songUrl}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </Button>
        </div>

        {!songUrl && (
          <p className="text-xs text-muted-foreground text-center mt-3">
            Song file not available
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default MusicPlayer;