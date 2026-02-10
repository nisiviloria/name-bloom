
# 🌸 Personalized Surprise Website

## Overview
A romantic, pink-themed surprise website where a user enters their name and receives a personalized flower, song, and letter — all pre-configured by the site creator.

---

## Page 1: Welcome / Name Entry
- Soft pastel pink gradient background
- Centered card with a gentle greeting: *"Someone has a surprise for you 💌"*
- Name input field with a **"Continue"** button
- Subtle floating petal animations in the background
- If name not found: friendly message *"This surprise isn't ready yet 💌"* with a gentle fade-in

## Page 2: Surprise Reveal (shown after valid name)
### Desktop Layout (side by side)
- **Left side**: CSS/SVG animated flower that blooms when music plays
- **Right side**: Spotify-inspired white music player card + letter button

### Mobile Layout (stacked vertically)
- Flower on top → Music player → "Open Letter" button

### Flower Animation
- Each person is assigned a flower type (rose, sunflower, tulip, lily, daisy, etc.)
- Built with pure CSS/SVG — no image files needed
- Flower starts as a bud and blooms smoothly when music plays
- Animation pauses when music pauses
- Soft glow effect while music is playing

### Music Player
- Clean white card design inspired by Spotify
- Song title display, play/pause button, progress bar
- Uses HTML `<audio>` element (placeholder audio for now)
- Play triggers the flower bloom animation

### Letter Feature
- **"Open Letter"** button styled like an envelope
- On click: letter slides/fades in with a warm animation
- Displays the personalized message with the user's name
- Can be closed/dismissed

---

## Data Structure
- A JavaScript object mapping ~5-10 names to their flower type, song file path, and personal letter
- Pre-filled with sample names (Anna, John, etc.) with placeholder content
- Easy to edit — just update the data object to add/change people

## Design & Theme
- Soft pink/rose pastel gradient backgrounds
- Rounded cards with subtle shadows
- Romantic, minimal aesthetic
- Smooth fade and scale animations throughout
- Fully responsive with Tailwind utilities (mobile-first)

## Technical Notes
- Fully static, client-side only — no backend needed
- Compatible with GitHub Pages deployment
- All assets are local or inline (CSS/SVG flowers, no external APIs)
