import { X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LetterModalProps {
  letter: string;
  name: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const LetterModal = ({ letter, name, isOpen, onOpen, onClose }: LetterModalProps) => {
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
      </div>
    </div>
  );
};

export default LetterModal;
