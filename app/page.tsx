"use client";

import { useState } from "react";

// ── Types ─────────────────────────────────────────────────────

type PersonalityId = "firsttab" | "slack" | "deck" | "windowseat" | "screenshot";

interface CafeRecommendation {
  name: string;
  area: "Indiranagar" | "Koramangala" | "Church Street";
  drink: string;
  rating: number;
  mapsUrl: string;
}

interface Personality {
  id: PersonalityId;
  name: string;
  tagline: string;
  emoji: string;
  description: string;
  cafes: CafeRecommendation[];
}

interface Answer {
  text: string;
  emoji: string;
  personality: PersonalityId;
}

interface Question {
  text: string;
  answers: Answer[];
}

// ── Personality Data ──────────────────────────────────────────

const personalities: Record<PersonalityId, Personality> = {
  firsttab: {
    id: "firsttab",
    name: "The First-Tab Person",
    tagline: "Already here. You haven't heard of it yet.",
    emoji: "🔍",
    description:
      "You found Araku before it was on Instagram and you've already moved on to three roasters nobody else knows exist. You don't chase novelty for novelty's sake — you genuinely want to be at the frontier, and in Bangalore that means your Google Maps saved list is a rotating document.",
    cafes: [
      {
        name: "Araku Coffee",
        area: "Indiranagar",
        drink: "Signature Pour-Over",
        rating: 4.6,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Araku+Coffee+Indiranagar+Bangalore",
      },
      {
        name: "Blue Tokai",
        area: "Koramangala",
        drink: "Cascara & Hibiscus",
        rating: 4.4,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Blue+Tokai+Coffee+Koramangala+Bangalore",
      },
      {
        name: "The Caffeine Baar",
        area: "Church Street",
        drink: "Syphon-brewed Single Origin",
        rating: 4.4,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Caffeine+Baar+Church+Street+Bangalore",
      },
    ],
  },

  slack: {
    id: "slack",
    name: "The 11 AM Slack Message",
    tagline: "Coffee is just the reason to gather.",
    emoji: "💬",
    description:
      "You've never once ordered without asking the group what they're having, and the café you pick is 80% about whether the table fits everyone. The coffee is great, but the real product is the two-hour conversation that starts with 'should we get another round?' at minute forty.",
    cafes: [
      {
        name: "Paper and Pie",
        area: "Indiranagar",
        drink: "Iced Latte",
        rating: 4.3,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Paper+and+Pie+Indiranagar+Bangalore",
      },
      {
        name: "Hole in the Wall",
        area: "Koramangala",
        drink: "Cold Coffee",
        rating: 4.3,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hole+in+the+Wall+Cafe+Koramangala+Bangalore",
      },
      {
        name: "Church Street Social",
        area: "Church Street",
        drink: "Social Shake",
        rating: 4.3,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Church+Street+Social+Bangalore",
      },
    ],
  },

  deck: {
    id: "deck",
    name: "The Deck Before the Meeting",
    tagline: "I've already read the origin story.",
    emoji: "📊",
    description:
      "You ask the barista about the altitude before you ask the price, and you already checked Third Wave's bean rotation before leaving home. Bangalore's specialty movement fits you precisely because it gives you data — the farm, the process, the varietal — and you are constitutionally incapable of ordering blind.",
    cafes: [
      {
        name: "Third Wave Coffee",
        area: "Indiranagar",
        drink: "AeroPress Single Origin",
        rating: 4.3,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Third+Wave+Coffee+Indiranagar+Bangalore",
      },
      {
        name: "Blue Tokai",
        area: "Koramangala",
        drink: "Pour-Over (Rotating Origin)",
        rating: 4.4,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Blue+Tokai+Coffee+Koramangala+Bangalore",
      },
      {
        name: "The Caffeine Baar",
        area: "Church Street",
        drink: "Chemex Single Origin",
        rating: 4.4,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Caffeine+Baar+Church+Street+Bangalore",
      },
    ],
  },

  windowseat: {
    id: "windowseat",
    name: "The Window Seat Regular",
    tagline: "Same table. Same order. Same peace.",
    emoji: "🪟",
    description:
      "Your regular barista starts your order the moment you walk in and you consider that a form of intimacy. You don't need to discover anything — you've already found your place, and you return to it the way other people return to a favourite page in a book.",
    cafes: [
      {
        name: "Matteo Coffea",
        area: "Indiranagar",
        drink: "Cappuccino",
        rating: 4.0,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Matteo+Coffea+Indiranagar+Bangalore",
      },
      {
        name: "DYU Art Café",
        area: "Koramangala",
        drink: "Chukku Kappi",
        rating: 4.5,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=DYU+Art+Cafe+Koramangala+Bangalore",
      },
      {
        name: "Matteo Coffea",
        area: "Church Street",
        drink: "Caramel Shakerato",
        rating: 3.9,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Matteo+Coffea+Church+Street+Bangalore",
      },
    ],
  },

  screenshot: {
    id: "screenshot",
    name: "The Screenshot Before the Sip",
    tagline: "The light was perfect and so was the crema.",
    emoji: "📸",
    description:
      "You chose this café three weeks ago based on a reel you saved, and you arrived early enough to get the table by the window because that's where the morning light comes through at the right angle. The coffee is genuinely good — but the latte art was the tiebreaker and you are not ashamed of that.",
    cafes: [
      {
        name: "Deliciae",
        area: "Indiranagar",
        drink: "Café Mocha",
        rating: 4.4,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Deliciae+Indiranagar+Bangalore",
      },
      {
        name: "DYU Art Café",
        area: "Koramangala",
        drink: "Café Miel",
        rating: 4.5,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=DYU+Art+Cafe+Koramangala+Bangalore",
      },
      {
        name: "The White Room",
        area: "Church Street",
        drink: "Filter Coffee in Vintage China",
        rating: 4.2,
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+White+Room+Church+Street+Bangalore",
      },
    ],
  },
};

// ── Questions (5) ─────────────────────────────────────────────

const questions: Question[] = [
  {
    text: "You need 4 hours of uninterrupted work. What does your ideal café look like?",
    answers: [
      { emoji: "🔍", text: "Somewhere rotating indie roasters — Nerlu, maybe — discovery + productivity", personality: "firsttab" },
      { emoji: "📸", text: "A café that looks good on camera and has something happening nearby", personality: "screenshot" },
      { emoji: "📊", text: "Third Wave — same seat, same order, reliable WiFi. Every time.", personality: "deck" },
      { emoji: "💬", text: "Paper and Pie — podcast rooms, people buzzing, energy helps me focus", personality: "slack" },
      { emoji: "🪟", text: "Anywhere quiet with one good cup. I don't need the extras.", personality: "windowseat" },
    ],
  },
  {
    text: "The barista at a new Bangalore café asks what you'd like. You say:",
    answers: [
      { emoji: "🔍", text: "\"What's your most unusual single-origin right now? Tell me about it.\"", personality: "firsttab" },
      { emoji: "📸", text: "\"Whatever looks the most interesting — I'll take a photo of it too.\"", personality: "screenshot" },
      { emoji: "📊", text: "\"What's the processing method on your Ethiopian? Washed or natural?\"", personality: "deck" },
      { emoji: "💬", text: "\"What is everyone else getting? I'll have that, plus one for my friend.\"", personality: "slack" },
      { emoji: "🪟", text: "\"Double espresso. Nothing else.\"", personality: "windowseat" },
    ],
  },
  {
    text: "A friend from Delhi asks why Bangalore people are so obsessed with coffee. You say:",
    answers: [
      { emoji: "🔍", text: "\"We're sitting on top of Coorg and Chikmagalur. People here actually chase the origin.\"", personality: "firsttab" },
      { emoji: "📸", text: "\"It's the culture — every café here is a creative space. Coffee is just the excuse.\"", personality: "screenshot" },
      { emoji: "📊", text: "\"Because specialty coffee as a movement actually happened here. There's science behind every cup.\"", personality: "deck" },
      { emoji: "💬", text: "\"Because cafés are where Bangalore runs. Every plan, every friendship started at a café table.\"", personality: "slack" },
      { emoji: "🪟", text: "\"Filter kaapi. That's it. That's the answer.\"", personality: "windowseat" },
    ],
  },
  {
    text: "It's 10 AM Saturday. Bangalore is already buzzing. Where are you?",
    answers: [
      { emoji: "🔍", text: "At a café I've never been to — somewhere I found on a blog at midnight", personality: "firsttab" },
      { emoji: "📸", text: "At a café I picked for the light — journaling, sketching, or just absorbing", personality: "screenshot" },
      { emoji: "📊", text: "Already deep in work at my usual Third Wave table — weekends are golden for focus", personality: "deck" },
      { emoji: "💬", text: "Coordinating a group brunch with a 30-min wait that nobody minds", personality: "slack" },
      { emoji: "🪟", text: "Home, with my own coffee, until the city calms down. Then maybe Cubbon Park.", personality: "windowseat" },
    ],
  },
  {
    text: "Someone puts two cups in front of you: a Coorg filter kaapi and a single-origin Araku pour-over. What do you do?",
    answers: [
      { emoji: "🔍", text: "Ask which farm the Araku beans came from and when they were roasted", personality: "firsttab" },
      { emoji: "📸", text: "Photograph both before touching either of them", personality: "screenshot" },
      { emoji: "📊", text: "Ask the barista to walk you through altitude, process, and flavour profile", personality: "deck" },
      { emoji: "💬", text: "Call someone over to share both and turn it into a thing", personality: "slack" },
      { emoji: "🪟", text: "Pick the filter kaapi without hesitation. Some things are just right.", personality: "windowseat" },
    ],
  },
];

// ── Personality Animations ────────────────────────────────────

function FirstTabAnimation() {
  return (
    <svg width="130" height="75" viewBox="0 0 130 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .ft-tab1 { animation: tabSlideIn 0.5s 0.1s ease both; }
        .ft-tab2 { animation: tabSlideIn 0.5s 0.35s ease both; }
        .ft-tab3 { animation: tabSlideIn 0.5s 0.6s ease both; }
      `}</style>
      <g className="ft-tab1">
        <rect x="4" y="28" width="38" height="26" rx="4" fill="rgba(200,164,110,0.18)" stroke="#c8a46e" strokeWidth="1"/>
        <rect x="9" y="34" width="20" height="3" rx="1.5" fill="#c8a46e" opacity="0.6"/>
        <rect x="9" y="40" width="14" height="2" rx="1" fill="#c8a46e" opacity="0.35"/>
      </g>
      <g className="ft-tab2">
        <rect x="47" y="16" width="38" height="26" rx="4" fill="rgba(200,164,110,0.25)" stroke="#c8a46e" strokeWidth="1.2"/>
        <rect x="52" y="22" width="22" height="3" rx="1.5" fill="#c8a46e" opacity="0.7"/>
        <rect x="52" y="28" width="16" height="2" rx="1" fill="#c8a46e" opacity="0.4"/>
      </g>
      <g className="ft-tab3">
        <rect x="90" y="4" width="38" height="30" rx="4" fill="rgba(232,196,154,0.3)" stroke="#e8c49a" strokeWidth="1.5"/>
        <rect x="95" y="11" width="24" height="3.5" rx="1.75" fill="#e8c49a" opacity="0.9"/>
        <rect x="95" y="18" width="18" height="2.5" rx="1" fill="#e8c49a" opacity="0.6"/>
        <rect x="95" y="24" width="22" height="2" rx="1" fill="#e8c49a" opacity="0.35"/>
        <circle cx="118" cy="48" r="7" stroke="#c8a46e" strokeWidth="1.5" fill="none" opacity="0.9"/>
        <line x1="123" y1="53" x2="128" y2="58" stroke="#c8a46e" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
      </g>
    </svg>
  );
}

function SlackAnimation() {
  return (
    <svg width="130" height="75" viewBox="0 0 130 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .sl-b1 { transform-box: fill-box; transform-origin: center; animation: bubblePop 0.4s 0.1s ease both; }
        .sl-b2 { transform-box: fill-box; transform-origin: center; animation: bubblePop 0.4s 0.45s ease both; }
        .sl-b3 { transform-box: fill-box; transform-origin: center; animation: bubblePop 0.4s 0.8s ease both; }
        .sl-d1 { animation: dotBounce 1.2s 1.3s ease-in-out infinite; }
        .sl-d2 { animation: dotBounce 1.2s 1.5s ease-in-out infinite; }
        .sl-d3 { animation: dotBounce 1.2s 1.7s ease-in-out infinite; }
      `}</style>
      <g className="sl-b1">
        <rect x="4" y="6" width="72" height="26" rx="13" fill="rgba(200,164,110,0.2)" stroke="#c8a46e" strokeWidth="1"/>
        <rect x="15" y="14" width="38" height="3" rx="1.5" fill="#c8a46e" opacity="0.65"/>
        <rect x="15" y="20" width="28" height="2.5" rx="1.25" fill="#c8a46e" opacity="0.35"/>
      </g>
      <g className="sl-b2">
        <rect x="54" y="40" width="72" height="26" rx="13" fill="rgba(232,196,154,0.18)" stroke="#e8c49a" strokeWidth="1"/>
        <rect x="65" y="48" width="38" height="3" rx="1.5" fill="#e8c49a" opacity="0.65"/>
        <rect x="65" y="54" width="24" height="2.5" rx="1.25" fill="#e8c49a" opacity="0.35"/>
      </g>
      <g className="sl-b3">
        <rect x="4" y="42" width="42" height="26" rx="13" fill="rgba(200,164,110,0.12)" stroke="#c8a46e" strokeWidth="1"/>
        <circle className="sl-d1" cx="14" cy="55" r="3" fill="#c8a46e" opacity="0.7"/>
        <circle className="sl-d2" cx="24" cy="55" r="3" fill="#c8a46e" opacity="0.7"/>
        <circle className="sl-d3" cx="34" cy="55" r="3" fill="#c8a46e" opacity="0.7"/>
      </g>
    </svg>
  );
}

function DeckAnimation() {
  return (
    <svg width="130" height="75" viewBox="0 0 130 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .dk-hd { animation: tabSlideIn 0.4s 0.05s ease both; }
        .dk-b1 { transform-box: fill-box; transform-origin: left center; animation: barExtend 0.5s 0.25s ease both; }
        .dk-b2 { transform-box: fill-box; transform-origin: left center; animation: barExtend 0.5s 0.45s ease both; }
        .dk-b3 { transform-box: fill-box; transform-origin: left center; animation: barExtend 0.5s 0.65s ease both; }
        .dk-b4 { transform-box: fill-box; transform-origin: left center; animation: barExtend 0.5s 0.85s ease both; }
      `}</style>
      <g className="dk-hd">
        <rect x="4" y="3" width="122" height="16" rx="3" fill="rgba(200,164,110,0.12)" stroke="#c8a46e" strokeWidth="1" opacity="0.8"/>
        <rect x="10" y="8" width="55" height="4" rx="2" fill="#e8c49a" opacity="0.75"/>
      </g>
      <circle cx="12" cy="31" r="3" fill="#c8a46e" opacity="0.85"/>
      <circle cx="12" cy="44" r="3" fill="#c8a46e" opacity="0.65"/>
      <circle cx="12" cy="57" r="3" fill="#c8a46e" opacity="0.45"/>
      <circle cx="12" cy="69" r="2.5" fill="#c8a46e" opacity="0.3"/>
      <rect className="dk-b1" x="22" y="25" width="100" height="9" rx="4" fill="rgba(200,164,110,0.5)"/>
      <rect className="dk-b2" x="22" y="38" width="76" height="9" rx="4" fill="rgba(200,164,110,0.35)"/>
      <rect className="dk-b3" x="22" y="51" width="88" height="9" rx="4" fill="rgba(200,164,110,0.22)"/>
      <rect className="dk-b4" x="22" y="63" width="52" height="7" rx="3.5" fill="rgba(200,164,110,0.13)"/>
    </svg>
  );
}

function WindowSeatAnimation() {
  return (
    <svg width="130" height="75" viewBox="0 0 130 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .ws-r1 { animation: rainFall 1.6s 0.0s linear infinite; }
        .ws-r2 { animation: rainFall 1.6s 0.35s linear infinite; }
        .ws-r3 { animation: rainFall 1.6s 0.7s linear infinite; }
        .ws-r4 { animation: rainFall 1.6s 1.05s linear infinite; }
        .ws-r5 { animation: rainFall 1.6s 1.4s linear infinite; }
        .ws-st { animation: steamRise 2s ease-in-out infinite; }
      `}</style>
      <rect x="4" y="4" width="82" height="64" rx="5" fill="rgba(0,0,0,0.25)" stroke="#c8a46e" strokeWidth="1.5"/>
      <line x1="45" y1="4" x2="45" y2="68" stroke="#c8a46e" strokeWidth="1" opacity="0.45"/>
      <line x1="4" y1="36" x2="86" y2="36" stroke="#c8a46e" strokeWidth="1" opacity="0.45"/>
      <circle className="ws-r1" cx="20" cy="14" r="2" fill="#c8a46e" opacity="0.5"/>
      <circle className="ws-r2" cx="32" cy="9"  r="2" fill="#c8a46e" opacity="0.4"/>
      <circle className="ws-r3" cx="60" cy="16" r="2" fill="#c8a46e" opacity="0.5"/>
      <circle className="ws-r4" cx="72" cy="10" r="2" fill="#c8a46e" opacity="0.35"/>
      <circle className="ws-r5" cx="18" cy="48" r="2" fill="#c8a46e" opacity="0.4"/>
      <g transform="translate(94, 22)">
        <path d="M0 28 Q-1 16 2 12 Q18 4 34 12 Q37 16 36 28 Z" fill="#5c3317" opacity="0.9"/>
        <ellipse cx="18" cy="12" rx="18" ry="5" fill="#c8a46e" opacity="0.55"/>
        <ellipse cx="18" cy="28" rx="16" ry="4" fill="#3d2010"/>
        <path d="M36 16 Q44 16 44 22 Q44 28 36 28" stroke="#5c3317" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <line className="ws-st" x1="12" y1="5"  x2="10" y2="-6" stroke="#e8c49a" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
        <line className="ws-st" x1="18" y1="3"  x2="18" y2="-8" stroke="#e8c49a" strokeWidth="1.5" strokeLinecap="round" opacity="0.45"/>
        <line className="ws-st" x1="24" y1="5"  x2="26" y2="-5" stroke="#e8c49a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </g>
    </svg>
  );
}

function ScreenshotAnimation() {
  return (
    <svg width="130" height="75" viewBox="0 0 130 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .sc-ring  { transform-box: fill-box; transform-origin: center; animation: focusPulse 2s ease-in-out infinite; }
        .sc-flash { animation: shutterFlash 3.5s ease-in-out infinite; }
        .sc-thumb { transform-box: fill-box; transform-origin: center; animation: thumbAppear 3.5s ease-in-out infinite; }
      `}</style>
      <rect x="18" y="3"  width="94" height="66" rx="9" fill="rgba(0,0,0,0.35)" stroke="#c8a46e" strokeWidth="1.5"/>
      <rect x="25" y="10" width="80" height="52" rx="5" fill="rgba(200,164,110,0.06)"/>
      <path d="M35 20 L35 28 M35 20 L43 20" stroke="#e8c49a" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M95 20 L95 28 M95 20 L87 20" stroke="#e8c49a" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M35 54 L35 46 M35 54 L43 54" stroke="#e8c49a" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M95 54 L95 46 M95 54 L87 54" stroke="#e8c49a" strokeWidth="1.5" strokeLinecap="round"/>
      <circle className="sc-ring" cx="65" cy="36" r="15" stroke="#c8a46e" strokeWidth="1.2" fill="none"/>
      <ellipse cx="65" cy="33" rx="8" ry="3" fill="#c8a46e" opacity="0.45"/>
      <path d="M57 33 Q56 42 58.5 45 Q65 48 71.5 45 Q74 42 73 33 Z" fill="#5c3317" opacity="0.75"/>
      <rect className="sc-flash" x="25" y="10" width="80" height="52" rx="5" fill="white" opacity="0"/>
      <g className="sc-thumb">
        <rect x="87" y="53" width="14" height="12" rx="3" fill="rgba(200,164,110,0.45)" stroke="#c8a46e" strokeWidth="0.8"/>
      </g>
    </svg>
  );
}

function PersonalityAnimation({ id }: { id: PersonalityId }) {
  switch (id) {
    case "firsttab":    return <FirstTabAnimation />;
    case "slack":       return <SlackAnimation />;
    case "deck":        return <DeckAnimation />;
    case "windowseat":  return <WindowSeatAnimation />;
    case "screenshot":  return <ScreenshotAnimation />;
  }
}

// ── Area Colours ──────────────────────────────────────────────

const areaColors: Record<string, string> = {
  "Indiranagar":   "#c8a46e",
  "Koramangala":   "#7db87c",
  "Church Street": "#7ca4b8",
};

// ── Café Card ─────────────────────────────────────────────────

function CafeCard({ cafe }: { cafe: CafeRecommendation }) {
  const color = areaColors[cafe.area];
  return (
    <a
      href={cafe.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="cafe-card"
    >
      <div
        style={{
          display: "inline-block",
          padding: "3px 10px",
          borderRadius: "20px",
          border: `1px solid ${color}`,
          color: color,
          fontSize: "0.62rem",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: "10px",
          fontFamily: "var(--font-lato), sans-serif",
        }}
      >
        {cafe.area}
      </div>

      <p
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          color: "#f5e6d3",
          fontSize: "1rem",
          fontWeight: 700,
          marginBottom: "4px",
          lineHeight: 1.3,
        }}
      >
        {cafe.name}
      </p>

      <p
        style={{
          fontFamily: "var(--font-lato), sans-serif",
          fontSize: "0.73rem",
          color: "#c8a46e",
          marginBottom: "10px",
        }}
      >
        ⭐ {cafe.rating} · Google Maps
      </p>

      <p
        style={{
          fontFamily: "var(--font-lato), sans-serif",
          color: "rgba(245,230,211,0.7)",
          fontSize: "0.82rem",
          lineHeight: 1.45,
          marginBottom: "14px",
        }}
      >
        ☕ {cafe.drink}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          color: color,
          fontSize: "0.75rem",
          fontFamily: "var(--font-lato), sans-serif",
          fontWeight: 700,
          letterSpacing: "0.3px",
        }}
      >
        <span>📍</span>
        <span>Get Directions</span>
      </div>
    </a>
  );
}

// ── SVG Coffee Cups ───────────────────────────────────────────

function LatteCup() {
  return (
    <svg width="180" height="198" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="22" rx="30" ry="8" fill="#c8a46e" opacity="0.6" />
      <path d="M20 22 Q18 80 25 90 Q50 100 75 90 Q82 80 80 22 Z" fill="#5c3317" />
      <ellipse cx="50" cy="90" rx="25" ry="6" fill="#3d2010" />
      <ellipse cx="50" cy="22" rx="28" ry="6" fill="#c8a46e" opacity="0.4" />
      <path d="M80 40 Q95 40 95 55 Q95 70 80 70" stroke="#5c3317" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="50" cy="23" rx="18" ry="4" fill="#e8c49a" opacity="0.5" />
    </svg>
  );
}

function EspressoCup() {
  return (
    <svg width="144" height="162" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 20 Q13 60 18 70 Q40 80 62 70 Q67 60 65 20 Z" fill="#3d2010" />
      <ellipse cx="40" cy="20" rx="25" ry="7" fill="#1a0a00" opacity="0.8" />
      <ellipse cx="40" cy="20" rx="22" ry="5" fill="#c8a46e" opacity="0.5" />
      <ellipse cx="40" cy="70" rx="22" ry="5" fill="#2a1008" />
      <path d="M65 35 Q78 35 78 48 Q78 61 65 61" stroke="#3d2010" strokeWidth="5" fill="none" strokeLinecap="round" />
      <rect x="10" y="75" width="60" height="8" rx="4" fill="#5c3317" />
    </svg>
  );
}

function ColdBrewCup() {
  return (
    <svg width="153" height="216" viewBox="0 0 85 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="55" height="85" rx="8" fill="#2a1008" stroke="#c8a46e" strokeWidth="1.5" opacity="0.9" />
      <rect x="15" y="15" width="55" height="30" rx="8" fill="#1a0a00" opacity="0.8" />
      <ellipse cx="42" cy="15" rx="27" ry="6" fill="#1a0a00" />
      <rect x="22" y="8" width="41" height="10" rx="5" fill="#5c3317" />
      <circle cx="42" cy="13" r="4" fill="#3d2010" />
      <rect x="20" y="50" width="45" height="3" rx="2" fill="#c8a46e" opacity="0.3" />
      <rect x="20" y="60" width="35" height="3" rx="2" fill="#c8a46e" opacity="0.2" />
      <ellipse cx="42" cy="100" rx="28" ry="5" fill="#1a0a00" opacity="0.5" />
    </svg>
  );
}

function CappuccinoCup() {
  return (
    <svg width="180" height="189" viewBox="0 0 100 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 25 Q13 75 20 85 Q50 97 80 85 Q87 75 85 25 Z" fill="#5c3317" />
      <ellipse cx="50" cy="25" rx="35" ry="10" fill="#c8a46e" opacity="0.5" />
      <ellipse cx="50" cy="86" rx="30" ry="7" fill="#3d2010" />
      <ellipse cx="50" cy="26" rx="30" ry="7" fill="#e8d5c0" opacity="0.7" />
      <ellipse cx="50" cy="26" rx="20" ry="4" fill="#c8a46e" opacity="0.8" />
      <path d="M35 24 Q50 20 65 24" stroke="#8b5e3c" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M85 45 Q98 45 98 60 Q98 75 85 75" stroke="#5c3317" strokeWidth="6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function PourOverCup() {
  return (
    <svg width="171" height="207" viewBox="0 0 95 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="47,5 10,45 85,45" fill="#5c3317" opacity="0.9" />
      <rect x="28" y="45" width="40" height="3" rx="1" fill="#c8a46e" opacity="0.6" />
      <path d="M22 50 Q20 90 27 100 Q47 112 68 100 Q75 90 73 50 Z" fill="#3d2010" />
      <ellipse cx="47" cy="50" rx="25" ry="7" fill="#1a0a00" opacity="0.7" />
      <ellipse cx="47" cy="100" rx="20" ry="5" fill="#2a1008" />
      <path d="M43 20 Q47 30 47 40" stroke="#c8a46e" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="3 3" />
      <path d="M73 65 Q86 65 86 78 Q86 90 73 90" stroke="#3d2010" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// ── Background Scene ──────────────────────────────────────────

function BackgroundCups() {
  const cups = [
    { Cup: LatteCup,      style: { top: "8%",    left: "3%" } },
    { Cup: EspressoCup,   style: { top: "60%",   left: "2%" } },
    { Cup: ColdBrewCup,   style: { top: "15%",   right: "3%" } },
    { Cup: CappuccinoCup, style: { bottom: "5%", left: "8%" } },
    { Cup: PourOverCup,   style: { bottom: "8%", right: "5%" } },
  ];

  return (
    <>
      {cups.map(({ Cup, style }, i) => (
        <div key={i} className="floating-cup" style={style}>
          <div style={{ position: "relative" }}>
            <div className="steam-wrapper">
              <div className="steam" />
              <div className="steam" />
              <div className="steam" />
            </div>
            <Cup />
          </div>
        </div>
      ))}
    </>
  );
}

// ── Main Quiz Component ───────────────────────────────────────

export default function CoffeeQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityId[]>([]);
  const [result, setResult] = useState<Personality | null>(null);

  const totalQuestions = questions.length;
  const progress = (currentQuestion / totalQuestions) * 100;

  function handleAnswer(personality: PersonalityId) {
    const newAnswers = [...answers, personality];

    if (currentQuestion < totalQuestions - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const tally: Partial<Record<PersonalityId, number>> = {};
      for (const p of newAnswers) {
        tally[p] = (tally[p] ?? 0) + 1;
      }
      let winner: PersonalityId = "firsttab";
      let max = 0;
      for (const [id, count] of Object.entries(tally) as [PersonalityId, number][]) {
        if (count > max) { max = count; winner = id; }
      }
      setResult(personalities[winner]);
    }
  }

  function handleReset() {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  }

  const q = questions[currentQuestion];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BackgroundCups />

      <div
        className="quiz-card"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: result ? "760px" : "580px",
          padding: "40px",
          transition: "max-width 0.4s ease",
        }}
      >
        {result ? (
          /* ── Result View ──────────────────────────────────── */
          <div>
            {/* Animation + personality header */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "18px" }}>
                <PersonalityAnimation id={result.id} />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  color: "rgba(245,230,211,0.5)",
                  fontSize: "0.72rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                You are
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: "#e8c49a",
                  lineHeight: 1.2,
                  marginBottom: "8px",
                }}
              >
                {result.emoji} {result.name}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  color: "rgba(245,230,211,0.55)",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  marginBottom: "18px",
                }}
              >
                &ldquo;{result.tagline}&rdquo;
              </p>
              <p
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  color: "rgba(245,230,211,0.75)",
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                  maxWidth: "560px",
                  margin: "0 auto",
                }}
              >
                {result.description}
              </p>
            </div>

            {/* Café recommendations */}
            <div
              style={{
                background: "rgba(200,164,110,0.05)",
                border: "1px solid rgba(200,164,110,0.15)",
                borderRadius: "18px",
                padding: "26px",
                marginBottom: "28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  color: "#c8a46e",
                  fontSize: "0.68rem",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                ☕ Find Your Cup in Bangalore
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "14px",
                }}
              >
                {result.cafes.map((cafe, i) => (
                  <CafeCard key={i} cafe={cafe} />
                ))}
              </div>
            </div>

            {/* Reset */}
            <div style={{ textAlign: "center" }}>
              <button className="reset-btn" onClick={handleReset}>
                Take the Quiz Again
              </button>
            </div>
          </div>
        ) : (
          /* ── Quiz View ────────────────────────────────────── */
          <div>
            {/* Header */}
            <div style={{ marginBottom: "28px", textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#c8a46e",
                  marginBottom: "6px",
                }}
              >
                ☕ Basecamp Coffee
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  color: "#f5e6d3",
                  lineHeight: 1.3,
                }}
              >
                What&apos;s Your Coffee Personality?
              </h1>
            </div>

            {/* Progress */}
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    fontSize: "0.78rem",
                    color: "rgba(245,230,211,0.5)",
                  }}
                >
                  Question {currentQuestion + 1} of {totalQuestions}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    fontSize: "0.78rem",
                    color: "#c8a46e",
                  }}
                >
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>

            {/* Question */}
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "1.22rem",
                fontWeight: 700,
                color: "#f5e6d3",
                marginBottom: "20px",
                lineHeight: 1.45,
              }}
            >
              {q.text}
            </h2>

            {/* Answers */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {q.answers.map((answer, i) => (
                <button
                  key={i}
                  className="answer-btn"
                  onClick={() => handleAnswer(answer.personality)}
                >
                  <span style={{ fontSize: "1.05rem", flexShrink: 0 }}>{answer.emoji}</span>
                  <span>{answer.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
