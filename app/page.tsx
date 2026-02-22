"use client";

import { useState } from "react";

// ── Types ────────────────────────────────────────────────────

type PersonalityId = "adventurer" | "artist" | "intellectual" | "socialite" | "minimalist";

interface Personality {
  id: PersonalityId;
  name: string;
  tagline: string;
  coffee: string;
  popCultureQuote: string;
  popCultureSource: string;
  emoji: string;
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

// ── Data ─────────────────────────────────────────────────────

const personalities: Record<PersonalityId, Personality> = {
  adventurer: {
    id: "adventurer",
    name: "The Bold Adventurer",
    tagline: "Life's too short for boring coffee",
    coffee: "Single-origin Ethiopian Pour-Over",
    popCultureQuote: "Adventure is out there!",
    popCultureSource: "Up (2009)",
    emoji: "🏔️",
  },
  artist: {
    id: "artist",
    name: "The Creative Artist",
    tagline: "Every cup is a blank canvas",
    coffee: "Honey Process Costa Rica",
    popCultureQuote: "I am Groot.",
    popCultureSource: "Guardians of the Galaxy (2014)",
    emoji: "🎨",
  },
  intellectual: {
    id: "intellectual",
    name: "The Deep Thinker",
    tagline: "Coffee fuels the examined life",
    coffee: "Natural Process Yirgacheffe",
    popCultureQuote: "Elementary, my dear Watson.",
    popCultureSource: "Sherlock Holmes",
    emoji: "📚",
  },
  socialite: {
    id: "socialite",
    name: "The Social Butterfly",
    tagline: "Coffee is best shared",
    coffee: "Ethiopian Latte with Oat Milk",
    popCultureQuote: "We're all in this together.",
    popCultureSource: "High School Musical (2006)",
    emoji: "🦋",
  },
  minimalist: {
    id: "minimalist",
    name: "The Zen Minimalist",
    tagline: "Simplicity is the ultimate sophistication",
    coffee: "Classic Double Espresso",
    popCultureQuote: "Less is more.",
    popCultureSource: "Ludwig Mies van der Rohe",
    emoji: "🧘",
  },
};

const questions: Question[] = [
  {
    text: "What's your morning ritual like?",
    answers: [
      { emoji: "🌅", text: "I'm up before sunrise, ready to tackle the day", personality: "adventurer" },
      { emoji: "✏️", text: "I spend time journaling and sketching", personality: "artist" },
      { emoji: "📰", text: "I read the news and plan my day meticulously", personality: "intellectual" },
      { emoji: "📱", text: "I text my friends to make brunch plans", personality: "socialite" },
      { emoji: "🍵", text: "I sit quietly with a single cup and meditate", personality: "minimalist" },
    ],
  },
  {
    text: "Your ideal weekend looks like:",
    answers: [
      { emoji: "🥾", text: "Hiking a new trail I've never been on", personality: "adventurer" },
      { emoji: "🎭", text: "Visiting galleries and attending open mic nights", personality: "artist" },
      { emoji: "🎬", text: "Deep-diving into a documentary series", personality: "intellectual" },
      { emoji: "🍽️", text: "Hosting a dinner party for 12+ people", personality: "socialite" },
      { emoji: "📖", text: "Reading in a quiet corner café", personality: "minimalist" },
    ],
  },
  {
    text: "When choosing a coffee shop, you prioritize:",
    answers: [
      { emoji: "🌍", text: "Unique single-origin offerings and their origin story", personality: "adventurer" },
      { emoji: "📸", text: "Aesthetic vibe and Instagram-worthy latte art", personality: "artist" },
      { emoji: "🔍", text: "The barista's knowledge and sourcing transparency", personality: "intellectual" },
      { emoji: "👥", text: "Big communal tables and a buzzing atmosphere", personality: "socialite" },
      { emoji: "🕊️", text: "A calm, uncluttered space with minimal music", personality: "minimalist" },
    ],
  },
  {
    text: "Your approach to trying new things is:",
    answers: [
      { emoji: "🚀", text: "I jump in headfirst — the riskier, the better", personality: "adventurer" },
      { emoji: "🔬", text: "I experiment endlessly until I find something I love", personality: "artist" },
      { emoji: "📊", text: "I research thoroughly before committing", personality: "intellectual" },
      { emoji: "🤝", text: "I try things with friends so we can share the experience", personality: "socialite" },
      { emoji: "⚖️", text: "I stick to what I know and perfect it", personality: "minimalist" },
    ],
  },
  {
    text: "Your go-to conversation topic is:",
    answers: [
      { emoji: "✈️", text: "Travel stories and bucket-list adventures", personality: "adventurer" },
      { emoji: "🎵", text: "Art, music, and creative projects", personality: "artist" },
      { emoji: "🌌", text: "Philosophy, science, or current events", personality: "intellectual" },
      { emoji: "💬", text: "Catching up on what's new with everyone", personality: "socialite" },
      { emoji: "🌿", text: "The simple pleasures — nature, silence, mindfulness", personality: "minimalist" },
    ],
  },
  {
    text: "Your coffee order is most likely:",
    answers: [
      { emoji: "🗺️", text: "Whatever's most unusual on the menu", personality: "adventurer" },
      { emoji: "🌸", text: "A beautifully crafted signature drink", personality: "artist" },
      { emoji: "⏱️", text: "A meticulously brewed pour-over", personality: "intellectual" },
      { emoji: "🥂", text: "Whatever everyone else is getting, plus one", personality: "socialite" },
      { emoji: "⚡", text: "A straight double espresso, nothing else", personality: "minimalist" },
    ],
  },
];

// ── SVG Coffee Cups ───────────────────────────────────────────

function LatteCup() {
  return (
    <svg width="100" height="110" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg width="85" height="120" viewBox="0 0 85 120" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg width="100" height="105" viewBox="0 0 100 105" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg width="95" height="115" viewBox="0 0 95 115" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    { Cup: LatteCup, style: { top: "8%", left: "3%" } },
    { Cup: EspressoCup, style: { top: "60%", left: "2%" } },
    { Cup: ColdBrewCup, style: { top: "15%", right: "3%" } },
    { Cup: CappuccinoCup, style: { bottom: "5%", left: "8%" } },
    { Cup: PourOverCup, style: { bottom: "8%", right: "5%" } },
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
      // Tally votes and find winner
      const tally: Partial<Record<PersonalityId, number>> = {};
      for (const p of newAnswers) {
        tally[p] = (tally[p] ?? 0) + 1;
      }
      let winner: PersonalityId = "adventurer";
      let max = 0;
      for (const [id, count] of Object.entries(tally) as [PersonalityId, number][]) {
        if (count > max) {
          max = count;
          winner = id;
        }
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
      {/* Background floating cups */}
      <BackgroundCups />

      {/* Quiz card */}
      <div
        className="quiz-card"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "580px",
          padding: "40px",
        }}
      >
        {result ? (
          /* ── Result View ─────────────────────────────── */
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "4rem", marginBottom: "12px" }}>{result.emoji}</div>

            <p
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "rgba(245,230,211,0.6)",
                fontSize: "0.85rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              You&apos;re a
            </p>

            <h2 className="result-personality" style={{ marginBottom: "6px" }}>
              {result.name}
            </h2>

            <p
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: "rgba(245,230,211,0.65)",
                fontStyle: "italic",
                marginBottom: "28px",
                fontSize: "1rem",
              }}
            >
              &ldquo;{result.tagline}&rdquo;
            </p>

            <div
              style={{
                background: "rgba(200,164,110,0.12)",
                borderRadius: "14px",
                padding: "20px 24px",
                marginBottom: "24px",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  color: "rgba(245,230,211,0.7)",
                  fontSize: "0.8rem",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                ☕ Your Perfect Cup
              </p>
              <p
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "#e8c49a",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                }}
              >
                {result.coffee}
              </p>
            </div>

            <blockquote className="result-quote" style={{ textAlign: "left", marginBottom: "32px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", marginBottom: "6px" }}>
                &ldquo;{result.popCultureQuote}&rdquo;
              </p>
              <cite
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(245,230,211,0.5)",
                  fontStyle: "normal",
                  letterSpacing: "1px",
                }}
              >
                — {result.popCultureSource}
              </cite>
            </blockquote>

            <button className="reset-btn" onClick={handleReset}>
              Take the Quiz Again
            </button>
          </div>
        ) : (
          /* ── Quiz View ───────────────────────────────── */
          <div>
            {/* Header */}
            <div style={{ marginBottom: "28px", textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                  fontSize: "0.75rem",
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

            {/* Question counter + progress */}
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
                    fontSize: "0.8rem",
                    color: "rgba(245,230,211,0.55)",
                    letterSpacing: "0.5px",
                  }}
                >
                  Question {currentQuestion + 1} of {totalQuestions}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    fontSize: "0.8rem",
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

            {/* Question text */}
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#f5e6d3",
                marginBottom: "20px",
                lineHeight: 1.4,
              }}
            >
              {q.text}
            </h2>

            {/* Answer buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {q.answers.map((answer, i) => (
                <button
                  key={i}
                  className="answer-btn"
                  onClick={() => handleAnswer(answer.personality)}
                >
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{answer.emoji}</span>
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
