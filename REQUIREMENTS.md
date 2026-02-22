# What's Your Coffee Personality? — Quiz Requirements

## Overview
An interactive personality quiz for Basecamp Coffee's loyalty app. Users answer 6 questions and receive a coffee personality type with a tailored coffee recommendation and pop culture reference.

---

## Personality Types (5)

| ID | Name | Coffee Pairing | Tagline | Pop Culture Reference |
|---|---|---|---|---|
| `adventurer` | The Bold Adventurer | Single-origin Ethiopian Pour-Over | "Life's too short for boring coffee" | *"Adventure is out there!"* — Up (2009) |
| `artist` | The Creative Artist | Honey Process Costa Rica | "Every cup is a blank canvas" | *"I am groot."* — Guardians of the Galaxy |
| `intellectual` | The Deep Thinker | Natural Process Yirgacheffe | "Coffee fuels the examined life" | *"Elementary, my dear Watson"* — Sherlock Holmes |
| `socialite` | The Social Butterfly | Ethiopian Latte with oat milk | "Coffee is best shared" | *"We're all in this together"* — High School Musical |
| `minimalist` | The Zen Minimalist | Classic Espresso | "Simplicity is the ultimate sophistication" | *"Less is more."* — Ludwig Mies van der Rohe |

---

## Questions (6) with Answer Mappings

### Q1: What's your morning ritual like?
- A) I'm up before sunrise, ready to tackle the day → `adventurer`
- B) I spend time journaling and sketching → `artist`
- C) I read the news and plan my day meticulously → `intellectual`
- D) I text my friends to make brunch plans → `socialite`
- E) I sit quietly with a single cup and meditate → `minimalist`

### Q2: Your ideal weekend looks like:
- A) Hiking a new trail I've never been on → `adventurer`
- B) Visiting galleries and attending open mic nights → `artist`
- C) Deep-diving into a documentary series → `intellectual`
- D) Hosting a dinner party for 12+ people → `socialite`
- E) Reading in a quiet corner café → `minimalist`

### Q3: When choosing a coffee shop, you prioritize:
- A) Unique single-origin offerings and the story behind them → `adventurer`
- B) Aesthetic vibe and Instagram-worthy latte art → `artist`
- C) The barista's knowledge and sourcing transparency → `intellectual`
- D) Big communal tables and a buzzing atmosphere → `socialite`
- E) A calm, uncluttered space with minimal music → `minimalist`

### Q4: Your approach to trying new things is:
- A) I jump in headfirst — the riskier, the better → `adventurer`
- B) I experiment endlessly until I find something I love → `artist`
- C) I research thoroughly before committing → `intellectual`
- D) I try things with friends so we can share the experience → `socialite`
- E) I stick to what I know and perfect it → `minimalist`

### Q5: Your go-to conversation topic is:
- A) Travel stories and bucket-list adventures → `adventurer`
- B) Art, music, and creative projects → `artist`
- C) Philosophy, science, or current events → `intellectual`
- D) Catching up on what's new with everyone → `socialite`
- E) The simple pleasures — nature, silence, mindfulness → `minimalist`

### Q6: Your coffee order is most likely:
- A) Whatever's most unusual on the menu → `adventurer`
- B) A beautifully crafted signature drink → `artist`
- C) A meticulously brewed pour-over → `intellectual`
- D) Whatever everyone else is getting, plus one → `socialite`
- E) A straight double espresso, nothing else → `minimalist`

---

## UI/UX Requirements

### Layout
- Dark coffee-themed background (#1a0a00)
- Floating SVG coffee cups in background (5 cups: latte, espresso, cold brew, cappuccino, pour-over)
- Steam animation above cups
- Centered glassmorphism quiz card

### Fonts
- **Playfair Display** — headings and question text
- **Lato** — body text and answer buttons

### Quiz Card
- Basecamp Coffee header (brand name + tagline)
- Question counter (e.g., "Question 3 of 6")
- Progress bar that fills as questions are answered
- Question in Playfair Display
- 5 answer buttons with emoji prefix, hover highlight

### Result Card
- "You're a [Personality Name]!" in large Playfair Display
- Coffee recommendation with cup emoji
- Pop culture quote in italics
- "Take the Quiz Again" reset button

---

## Technical Requirements
- Next.js 14+ App Router
- Single-file quiz logic in `app/page.tsx` (client component)
- Tailwind v4 utility classes
- Custom CSS animations in `globals.css`
- Google Fonts via `next/font/google` in `layout.tsx`
- No external UI libraries
