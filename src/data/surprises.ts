export type FlowerType = "rose" | "sunflower" | "tulip" | "lily" | "daisy" | "cherry-blossom" | "lavender" | "orchid";

export interface SurpriseData {
  flower: FlowerType;
  songTitle: string;
  songArtist: string;
  letter: string;
}

export const surprises: Record<string, SurpriseData> = {
  anna: {
    flower: "rose",
    songTitle: "Can't Help Falling in Love",
    songArtist: "Elvis Presley",
    letter:
      "Dear Anna,\n\nEvery rose in the world couldn't capture the beauty you bring to the lives of those around you. You have a warmth that makes everyone feel at home, and a smile that lights up the darkest rooms.\n\nNever stop being the incredible person you are.\n\nWith all my love 💕",
  },
  john: {
    flower: "sunflower",
    songTitle: "Here Comes the Sun",
    songArtist: "The Beatles",
    letter:
      "Dear John,\n\nLike a sunflower always turning toward the light, you bring sunshine into everyone's life. Your positivity and kindness are truly contagious.\n\nKeep shining bright — the world needs your light.\n\nWith warmth and admiration 🌻",
  },
  maria: {
    flower: "tulip",
    songTitle: "A Thousand Years",
    songArtist: "Christina Perri",
    letter:
      "Dear Maria,\n\nTulips symbolize perfect love, and that's exactly what you give to everyone around you. Your grace and elegance inspire those lucky enough to know you.\n\nYou are cherished more than you know.\n\nForever grateful 🌷",
  },
  david: {
    flower: "lily",
    songTitle: "Thinking Out Loud",
    songArtist: "Ed Sheeran",
    letter:
      "Dear David,\n\nLilies represent devotion, and that's what defines you — your loyalty to the people you love. You stand tall and strong, yet gentle and kind.\n\nThe world is better because you're in it.\n\nWith deep respect 🤍",
  },
  sophie: {
    flower: "daisy",
    songTitle: "You Are My Sunshine",
    songArtist: "Johnny Cash",
    letter:
      "Dear Sophie,\n\nDaisies are the flower of innocence and joy — just like you. Your laughter is music, and your spirit is free.\n\nNever let anyone dim your sparkle.\n\nWith love and joy 🌼",
  },
  emma: {
    flower: "cherry-blossom",
    songTitle: "Perfect",
    songArtist: "Ed Sheeran",
    letter:
      "Dear Emma,\n\nCherry blossoms remind us that life is beautiful and fleeting — and you make every moment count. You live with grace, passion, and an open heart.\n\nYou are truly unforgettable.\n\nWith admiration 🌸",
  },
  lucas: {
    flower: "lavender",
    songTitle: "All of Me",
    songArtist: "John Legend",
    letter:
      "Dear Lucas,\n\nLavender stands for calm and serenity — the exact feeling people get when they're around you. Your peaceful energy is a gift.\n\nKeep being the calm in the storm.\n\nWith peace and love 💜",
  },
  olivia: {
    flower: "orchid",
    songTitle: "Unchained Melody",
    songArtist: "The Righteous Brothers",
    letter:
      "Dear Olivia,\n\nOrchids are rare and extraordinary, just like you. You carry yourself with a quiet strength and beauty that leaves everyone in awe.\n\nNever underestimate how special you truly are.\n\nWith endless love 💐",
  },
};

export function findSurprise(name: string): SurpriseData | null {
  const key = name.trim().toLowerCase();
  return surprises[key] ?? null;
}
