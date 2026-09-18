/* ==========================================================================
   Abigail's 22nd Birthday - JavaScript Interactions
   ========================================================================== */

// 22 Curated Sweet Reasons for 22nd Birthday
const reasonsData = [
  {
    num: 1,
    icon: "✨",
    title: "Your Radiant Smile",
    text: "How your whole face lights up whenever you laugh—it genuinely brightens up every single room you walk into."
  },
  {
    num: 2,
    icon: "☕️",
    title: "Our Morning Routines",
    text: "The peaceful, cozy mornings sharing coffee, talking about everything and nothing before the day starts."
  },
  {
    num: 3,
    icon: "🤍",
    title: "Your Gentle Empathy",
    text: "The kindness and genuine care you show to every person and animal. Your heart is so purely good."
  },
  {
    num: 4,
    icon: "😂",
    title: "Our Inside Jokes",
    text: "How we can look at each other across a crowded room and instantly start laughing without saying a single word."
  },
  {
    num: 5,
    icon: "🚗",
    title: "Late Night Drives",
    text: "Singing at the top of our lungs with the windows down, feeling like the world is completely ours."
  },
  {
    num: 6,
    icon: "🧠",
    title: "Your Brilliant Mind",
    text: "How passionate and smart you are when you talk about the things you care about. I love hearing your thoughts."
  },
  {
    num: 7,
    icon: "🫂",
    title: "Your Warmest Hugs",
    text: "No matter how hectic or stressful life gets, wrapping my arms around you immediately makes everything okay."
  },
  {
    num: 8,
    icon: "🍕",
    title: "Food Adventures",
    text: "Debating for 20 minutes about what to eat, only to try a new spot and savor every bite together."
  },
  {
    num: 9,
    icon: "🌟",
    title: "How Hard You Work",
    text: "Your dedication, resilience, and ambition to grow and succeed. You inspire me every day."
  },
  {
    num: 10,
    icon: "🎶",
    title: "Your Taste In Music",
    text: "Every song you recommend or add to our playlists ends up becoming one of my all-time favorites."
  },
  {
    num: 11,
    icon: "👀",
    title: "The Way You Look At Me",
    text: "That soft, knowing look that makes me feel like the luckiest guy in the entire universe."
  },
  {
    num: 12,
    icon: "🏡",
    title: "Making Anywhere Feel Like Home",
    text: "Wherever we are—in a car, in another city, or just on the couch—you make me feel completely at home."
  },
  {
    num: 13,
    icon: "🌸",
    title: "Your Natural Grace",
    text: "You are breathtakingly gorgeous, effortlessly elegant, and even more stunning on the inside."
  },
  {
    num: 14,
    icon: "💭",
    title: "Late Night Conversations",
    text: "Talking about our wildest dreams, future goals, and childhood memories until 2 AM."
  },
  {
    num: 15,
    icon: "🧸",
    title: "Your Playful Side",
    text: "Your cute little dances in the kitchen and the funny voices you make just to make me smile."
  },
  {
    num: 16,
    icon: "🛡️",
    title: "How You Support Me",
    text: "You are always in my corner, cheering me on and believing in me even when I doubt myself."
  },
  {
    num: 17,
    icon: "📸",
    title: "Every Photo We Take",
    text: "Looking through our camera roll and realizing that all my happiest memories have you in them."
  },
  {
    num: 18,
    icon: "🧁",
    title: "Your Sweet Tooth",
    text: "How happy you get over ice cream, pastries, and treats. Seeing you happy is my favorite hobby."
  },
  {
    num: 19,
    icon: "🌊",
    title: "Our Spontaneous Trips",
    text: "Packing a bag with zero plans and ending up having the greatest adventures together."
  },
  {
    num: 20,
    icon: "🤝",
    title: "Being My Best Friend",
    text: "Before anything else, you are the person I trust with my deepest secrets and biggest dreams."
  },
  {
    num: 21,
    icon: "💫",
    title: "How You Make Me Better",
    text: "Loving you makes me want to be the best version of myself every single day."
  },
  {
    num: 22,
    icon: "💍",
    title: "Our Tomorrow's",
    text: "Because as amazing as these 22 years have been, I can't wait for all the years and memories ahead of us."
  }
];

// State tracking
let candlesBlown = false;
let flippedCardsCount = 0;
const flippedCardSet = new Set();

document.addEventListener("DOMContentLoaded", () => {
  initSparkleCanvas();
  renderReasonsGrid();
  initCake();
  initEnvelope();
  initWishJar();
  initMusicPlayer();
  initLightbox();
  initConfettiButtons();
});

/* ==========================================================================
   Interactive Birthday Cake & Candles
   ========================================================================== */
function initCake() {
  const cake = document.getElementById("birthdayCake");
  const blowBtn = document.getElementById("blowCandlesBtn");
  const candleBtnText = document.getElementById("candleBtnText");
  const flame1 = document.getElementById("flame1");
  const flame2 = document.getElementById("flame2");
  const wishStatusText = document.getElementById("wishStatusText");

  function blowCandles() {
    if (candlesBlown) {
      // Re-light candles
      candlesBlown = false;
      flame1.classList.remove("extinguished");
      flame2.classList.remove("extinguished");
      candleBtnText.textContent = "Blow Out The Candles!";
      wishStatusText.textContent = "Candles are glowing! Tap above to make your wish.";
      return;
    }

    candlesBlown = true;
    flame1.classList.add("extinguished");
    flame2.classList.add("extinguished");
    candleBtnText.textContent = "Relight Candles 🕯️";
    wishStatusText.textContent = "✨ Happy 22nd Birthday Abigail! May all your wishes come true! ✨";

    playChimeSound();
    fireCelebrationConfetti();
  }

  if (cake) cake.addEventListener("click", blowCandles);
  if (blowBtn) blowBtn.addEventListener("click", blowCandles);
}

/* Confetti Burst */
function fireCelebrationConfetti() {
  if (typeof confetti !== "function") return;

  const count = 200;
  const defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#ff8fa3', '#e0838a', '#ffd166', '#ffffff']
  });
  fire(0.2, {
    spread: 60,
    colors: ['#ffb3c1', '#fdf0d5', '#ff4d6d']
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

/* ==========================================================================
   Virtual Love Letter & Envelope
   ========================================================================== */
function initEnvelope() {
  const envelope = document.getElementById("envelope");
  const waxSeal = document.getElementById("waxSeal");
  const prompt = document.getElementById("envelopePrompt");

  function openEnvelope() {
    if (envelope.classList.contains("open")) return;
    
    envelope.classList.add("open");
    waxSeal.classList.add("broken");
    if (prompt) {
      prompt.innerHTML = `<i data-lucide="heart"></i> Written with love for Abigail`;
      lucide.createIcons();
    }
    
    playSoftChime();
    
    if (typeof confetti === "function") {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#fbe6e9', '#d96b79', '#dfa856']
      });
    }
  }

  if (waxSeal) waxSeal.addEventListener("click", openEnvelope);
  if (envelope) envelope.addEventListener("click", openEnvelope);
}

/* ==========================================================================
   22 Reasons Why I Love You
   ========================================================================== */
function renderReasonsGrid() {
  const grid = document.getElementById("reasonsGrid");
  const progressFill = document.getElementById("reasonsProgress");
  const counterText = document.getElementById("reasonsCounter");

  if (!grid) return;

  grid.innerHTML = "";

  reasonsData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "reason-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Reason #${item.num}: ${item.title}`);

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <span class="reason-number">#${item.num}</span>
          <div class="reason-icon">${item.icon}</div>
          <h4 class="reason-preview-title">${item.title}</h4>
        </div>
        <div class="card-back">
          <p>${item.text}</p>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      
      if (!flippedCardSet.has(item.num)) {
        flippedCardSet.add(item.num);
        flippedCardsCount = flippedCardSet.size;
        
        const percentage = Math.round((flippedCardsCount / 22) * 100);
        if (progressFill) progressFill.style.width = `${percentage}%`;
        if (counterText) counterText.textContent = `${flippedCardsCount} / 22 Revealed`;

        if (flippedCardsCount === 22) {
          fireCelebrationConfetti();
        }
      }
    });

    grid.appendChild(card);
  });
}

/* ==========================================================================
   Wish Jar Section
   ========================================================================== */
function initWishJar() {
  const wishForm = document.getElementById("wishForm");
  const wishInput = document.getElementById("wishInput");
  const savedArea = document.getElementById("savedWishesArea");

  const storageKey = "abigails_birthday_wishes";

  function loadWishes() {
    if (!savedArea) return;
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      savedArea.innerHTML = "";
      saved.forEach((w) => {
        const div = document.createElement("div");
        div.className = "saved-wish-card";
        div.innerHTML = `
          <strong>✨ Abigail's Wish:</strong> ${escapeHtml(w.text)}
          <div style="font-size:0.75rem; color:#888; margin-top:4px;">Recorded on ${w.date}</div>
        `;
        savedArea.appendChild(div);
      });
    } catch (e) {
      console.warn("Storage access restricted", e);
    }
  }

  if (wishForm) {
    wishForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = wishInput.value.trim();
      if (!val) return;

      const newWish = {
        text: val,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      };

      try {
        const current = JSON.parse(localStorage.getItem(storageKey) || "[]");
        current.unshift(newWish);
        localStorage.setItem(storageKey, JSON.stringify(current));
      } catch (err) {
        console.warn(err);
      }

      wishInput.value = "";
      loadWishes();
      fireCelebrationConfetti();
    });
  }

  loadWishes();
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/* ==========================================================================
   Ambient Audio Synthesizer (Zero External Dependencies)
   ========================================================================== */
let audioCtx = null;
let isPlayingMelody = false;
let melodyInterval = null;

function initMusicPlayer() {
  const toggleBtn = document.getElementById("musicToggle");
  const vinylDisc = document.getElementById("vinylDisc");
  const statusText = document.getElementById("musicStatus");

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    if (isPlayingMelody) {
      stopMelody();
      vinylDisc.classList.remove("playing");
      statusText.textContent = "Click to play ✨";
      isPlayingMelody = false;
    } else {
      startMelody();
      vinylDisc.classList.add("playing");
      statusText.textContent = "Playing melody 🎵";
      isPlayingMelody = true;
    }
  });
}

// Gentle romantic arpeggio notes (F frequencies)
const notes = [
  261.63, 329.63, 392.00, 523.25, // C chord
  293.66, 369.99, 440.00, 587.33, // D chord
  220.00, 261.63, 329.63, 440.00, // Am chord
  174.61, 220.00, 261.63, 349.23  // F chord
];

let noteIndex = 0;

function startMelody() {
  if (!audioCtx) return;
  
  melodyInterval = setInterval(() => {
    playNote(notes[noteIndex % notes.length]);
    noteIndex++;
  }, 480);
}

function stopMelody() {
  if (melodyInterval) {
    clearInterval(melodyInterval);
    melodyInterval = null;
  }
}

function playNote(freq) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.6);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 1.6);
  } catch (e) {
    // Audio context not allowed yet
  }
}

function playChimeSound() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
    setTimeout(() => playNote(freq), i * 140);
  });
}

function playSoftChime() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  [440.00, 554.37, 659.25].forEach((freq, i) => {
    setTimeout(() => playNote(freq), i * 160);
  });
}

/* ==========================================================================
   Sparkles Background Canvas
   ========================================================================== */
function initSparkleCanvas() {
  const canvas = document.getElementById("sparkle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const sparkles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2.5 + 1,
    speedY: Math.random() * 0.4 + 0.1,
    opacity: Math.random() * 0.7 + 0.2,
    flicker: Math.random() * 0.02 + 0.005
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    sparkles.forEach((s) => {
      s.y -= s.speedY;
      if (s.y < -10) s.y = height + 10;

      s.opacity += s.flicker;
      if (s.opacity > 0.8 || s.opacity < 0.2) s.flicker = -s.flicker;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(235, 140, 155, ${Math.max(0, s.opacity)})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(255, 190, 200, 0.5)";
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   Polaroid Lightbox Modal
   ========================================================================== */
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  if (!lightbox) return;

  document.querySelectorAll(".polaroid").forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const caption = item.getAttribute("data-caption") || item.querySelector(".polaroid-caption").textContent;

      if (img) {
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption;
        lightbox.classList.add("active");
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

/* Extra Confetti Button */
function initConfettiButtons() {
  const extraBtn = document.getElementById("extraConfettiBtn");
  if (extraBtn) {
    extraBtn.addEventListener("click", () => {
      fireCelebrationConfetti();
    });
  }
}
