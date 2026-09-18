/* ==========================================================================
   Abigail's 22nd Birthday - JavaScript Interactions
   Countdown to Sept 24 Midnight | 16 Photos | Drake Autoplay | Pop Lore
   ========================================================================== */

// 16 Photos Data (Chronologically from February to August 2026)
const photoGalleryData = [
  { file: "img_9010.jpg", date: "February 05, 2026", caption: "Early 2026 glow ✨" },
  { file: "img_9114.jpg", date: "February 18, 2026", caption: "Sweet moments with you 🌸" },
  { file: "img_9122.jpg", date: "February 19, 2026", caption: "That contagious smile 😊" },
  { file: "img_9141.jpg", date: "February 20, 2026", caption: "Favorite day, favorite person 💖" },
  { file: "img_9209.jpg", date: "February 26, 2026", caption: "Golden hour memories 🌅" },
  { file: "img_9333.jpg", date: "March 09, 2026", caption: "March adventures 🌿" },
  { file: "img_9405.jpg", date: "March 25, 2026", caption: "Laughing at everything 😂" },
  { file: "img_9512.jpg", date: "March 30, 2026", caption: "Springtime joy 🌷" },
  { file: "img_0317.jpg", date: "June 10, 2026", caption: "Summer kicking off ☀️" },
  { file: "img_0564.jpg", date: "July 01, 2026", caption: "July warmth & you 🌊" },
  { file: "img_0573.jpg", date: "July 02, 2026", caption: "Unforgettable memories 🤍" },
  { file: "img_0587.jpg", date: "July 02, 2026", caption: "Pure happiness 🥰" },
  { file: "img_0650.jpg", date: "July 05, 2026", caption: "Summer nights ✨" },
  { file: "img_0813.jpg", date: "July 19, 2026", caption: "Radiant as ever 🌺" },
  { file: "img_0858.jpg", date: "July 22, 2026", caption: "My favorite view 🥂" },
  { file: "img_1046.jpg", date: "August 11, 2026", caption: "August bliss & turning 22 soon! 🎂" }
];

// 22 Things I Love About You (All of Jackson's personal reasons)
const reasonsData = [
  {
    num: 1,
    icon: "☕️",
    title: "Morning Coffee Time",
    text: "Sharing quiet, peaceful mornings and coffee with you is hands-down my favorite part of any day."
  },
  {
    num: 2,
    icon: "😊",
    title: "Your Smile",
    text: "The way your entire face lights up when you are happy or excited—it makes my whole world brighter."
  },
  {
    num: 3,
    icon: "🫂",
    title: "Your Supportiveness",
    text: "How you are always in my corner, cheering me on and believing in me unconditionally."
  },
  {
    num: 4,
    icon: "🥂",
    title: "Always Having a Good Time",
    text: "Your natural ability to make every outing fun, light up any room, and be the sweetest social butterfly."
  },
  {
    num: 5,
    icon: "😂",
    title: "You Never Fail to Make Me Laugh",
    text: "No matter what kind of day it has been, you can always make me laugh until my stomach hurts."
  },
  {
    num: 6,
    icon: "🗺️",
    title: "Always Down for an Adventure",
    text: "Whether it is a spontaneous road trip, a new spot, or random plan, you are always down for an adventure with me."
  },
  {
    num: 7,
    icon: "🌊",
    title: "Swimming in the Waves",
    text: "Splashing around in the ocean and swimming in the waves with my girl is one of my all-time favorite memories."
  },
  {
    num: 8,
    icon: "🔥",
    title: "You're Fine As Shit AF",
    text: "Respectfully (and disrespectfully)... you are fine as shit af. The baddest and most beautiful girl in every room, no debate."
  },
  {
    num: 9,
    icon: "🎵",
    title: "Your Contagious Laugh",
    text: "Your laugh is genuinely the most contagious sound in the world. As soon as you start giggling, I can't help but smile."
  },
  {
    num: 10,
    icon: "🤝",
    title: "Friends With My Friends",
    text: "How effortlessly you became friends with my friends—it felt so natural and means the absolute world to me."
  },
  {
    num: 11,
    icon: "🌟",
    title: "A True People Person",
    text: "You are such a natural people person. You have this warm, magnetic energy where literally everyone loves you."
  },
  {
    num: 12,
    icon: "🤍",
    title: "Being Part of Your World",
    text: "I love being a part of your life, spending time with your friends, and getting to know your amazing family."
  },
  {
    num: 13,
    icon: "💆‍♀️",
    title: "Giving My Girl Rubbies",
    text: "Giving you rubbies when you are relaxing or unwinding—taking care of my girl is one of my favorite things."
  },
  {
    num: 14,
    icon: "🗣️",
    title: "Your Story Time",
    text: "I love listening to your story time! The expressions, the drama, the voice tones, and all the tea—you're the best storyteller."
  },
  {
    num: 15,
    icon: "🍿",
    title: "The Cruikshank Brothers",
    text: "Watching Lucas and Jacob scream-laugh at YouTube videos for 5 hours straight in bed while eating snacks—elite comfort."
  },
  {
    num: 16,
    icon: "📺",
    title: "Our Show Binges",
    text: "Breaking down every mystery and conspiracy in Lost, Paradise, and Limitless together like detectives."
  },
  {
    num: 17,
    icon: "💎",
    title: "Your Sims Energy",
    text: "Living life in pure 'motherlode' mode. Sul Sul! (And promise, the pool ladder is 100% safe today!)."
  },
  {
    num: 18,
    icon: "🚗",
    title: "Late Night Drives",
    text: "Singing at the top of our lungs with the windows down, feeling like the entire night belongs to us."
  },
  {
    num: 19,
    icon: "🏡",
    title: "Feeling Like Home",
    text: "Wherever we go, being next to you feels completely comfortable, safe, warm, and like home."
  },
  {
    num: 20,
    icon: "🫂",
    title: "My Absolute Best Friend",
    text: "The person I trust with every thought, dream, and secret. You are my favorite person in the entire universe."
  },
  {
    num: 21,
    icon: "💫",
    title: "Loving You Is Effortless",
    text: "You make loving you the easiest, most natural, and most rewarding thing in the world every single day."
  },
  {
    num: 22,
    icon: "🎉",
    title: "Celebrating 22 With You",
    text: "Counting down every second to midnight on September 24th! Happy almost 22nd Birthday Abigail, I love you!"
  }
];

// Target Birthday: September 24, 2026 at Midnight (00:00:00)
const birthdayTarget = new Date(2026, 8, 24, 0, 0, 0).getTime();

let countdownInterval = null;
let birthdayCelebrated = false;
let candlesBlown = false;
const flippedCardSet = new Set();

document.addEventListener("DOMContentLoaded", () => {
  initAudioPlayer();
  initCountdown();
  renderPolaroidGallery();
  renderReasonsGrid();
  initCake();
  initEnvelope();
  initWishJar();
  initSparkleCanvas();
  initLightbox();
  initMemeEasterEggs();
});

/* ==========================================================================
   Audio Autoplay Handler (Drake - Ratchet Happy Birthday)
   ========================================================================== */
function initAudioPlayer() {
  const audio = document.getElementById("birthdayAudio");
  const banner = document.getElementById("autoplayBanner");
  const bannerBtn = document.getElementById("bannerPlayBtn");
  const musicToggle = document.getElementById("musicToggle");
  const vinylDisc = document.getElementById("vinylDisc");
  const musicStatus = document.getElementById("musicStatus");

  if (!audio) return;

  function markPlaying() {
    vinylDisc.classList.add("playing");
    musicStatus.textContent = "Playing 🦉🎶";
    if (banner) banner.classList.add("dismissed");
  }

  function markPaused() {
    vinylDisc.classList.remove("playing");
    musicStatus.textContent = "Paused ⏸️";
  }

  // Attempt autoplay immediately
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        markPlaying();
      })
      .catch(() => {
        // Autoplay was prevented by browser policy, wait for first user interaction
        markPaused();
        if (banner) banner.classList.remove("dismissed");
      });
  }

  // First touch or click anywhere will start audio if blocked
  function unlockAudio() {
    if (audio.paused) {
      audio.play().then(markPlaying).catch(() => {});
    }
  }

  window.addEventListener("click", unlockAudio, { once: true });
  window.addEventListener("touchstart", unlockAudio, { once: true });

  if (bannerBtn) {
    bannerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      audio.play().then(markPlaying).catch(() => {});
    });
  }

  if (musicToggle) {
    musicToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (audio.paused) {
        audio.play().then(markPlaying).catch(() => {});
      } else {
        audio.pause();
        markPaused();
      }
    });
  }
}

/* ==========================================================================
   Big Birthday Countdown Timer
   ========================================================================== */
function initCountdown() {
  const cdDays = document.getElementById("cdDays");
  const cdHours = document.getElementById("cdHours");
  const cdMinutes = document.getElementById("cdMinutes");
  const cdSeconds = document.getElementById("cdSeconds");
  const unlockedBanner = document.getElementById("birthdayUnlockedBanner");
  const previewZeroBtn = document.getElementById("previewZeroBtn");

  function updateClock() {
    const now = new Date().getTime();
    const distance = birthdayTarget - now;

    if (distance <= 0) {
      // Countdown finished!
      if (cdDays) cdDays.textContent = "00";
      if (cdHours) cdHours.textContent = "00";
      if (cdMinutes) cdMinutes.textContent = "00";
      if (cdSeconds) cdSeconds.textContent = "00";

      if (!birthdayCelebrated) {
        triggerBirthdayCelebration();
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (cdDays) cdDays.textContent = String(days).padStart(2, "0");
    if (cdHours) cdHours.textContent = String(hours).padStart(2, "0");
    if (cdMinutes) cdMinutes.textContent = String(minutes).padStart(2, "0");
    if (cdSeconds) cdSeconds.textContent = String(seconds).padStart(2, "0");
  }

  updateClock();
  countdownInterval = setInterval(updateClock, 1000);

  // Preview button so Jackson can test the exact confetti moment right now!
  if (previewZeroBtn) {
    previewZeroBtn.addEventListener("click", () => {
      triggerBirthdayCelebration();
    });
  }
}

function triggerBirthdayCelebration() {
  birthdayCelebrated = true;
  const unlockedBanner = document.getElementById("birthdayUnlockedBanner");
  if (unlockedBanner) unlockedBanner.style.display = "block";

  // Massive celebration confetti showers
  fireCelebrationConfetti(true);

  // Scroll banner into view smoothly
  if (unlockedBanner) {
    unlockedBanner.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

/* Confetti System */
function fireCelebrationConfetti(isSuper = false) {
  if (typeof confetti !== "function") return;

  const count = isSuper ? 400 : 180;
  const duration = isSuper ? 4000 : 1500;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    const particleCount = 50 * (timeLeft / duration);

    // Blast from left
    confetti({
      particleCount,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#ff4d6d', '#ffd166', '#2ecc71', '#3a86ff', '#ffffff']
    });
    // Blast from right
    confetti({
      particleCount,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ['#ff4d6d', '#ffd166', '#2ecc71', '#3a86ff', '#ffffff']
    });
  }, 250);
}

/* ==========================================================================
   Render 16 Dated Polaroid Photos
   ========================================================================== */
function renderPolaroidGallery() {
  const gallery = document.getElementById("polaroidGallery");
  if (!gallery) return;

  gallery.innerHTML = "";

  const tiltClasses = ["tilt-1", "tilt-2", "tilt-3", "tilt-4", "tilt-5", "tilt-6"];

  photoGalleryData.forEach((item, index) => {
    const tilt = tiltClasses[index % tiltClasses.length];
    const polaroid = document.createElement("div");
    polaroid.className = `polaroid ${tilt}`;
    polaroid.setAttribute("data-src", `assets/images/${item.file}`);
    polaroid.setAttribute("data-caption", `${item.caption} &bull; ${item.date}`);

    polaroid.innerHTML = `
      <div class="tape-sticker"></div>
      <div class="polaroid-photo">
        <img src="assets/images/${item.file}" alt="Memory ${index + 1}" loading="lazy" />
      </div>
      <div class="polaroid-meta">
        <span class="polaroid-date-tag">${item.date}</span>
        <span class="polaroid-caption">${item.caption}</span>
      </div>
    `;

    gallery.appendChild(polaroid);
  });
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
        const count = flippedCardSet.size;
        const pct = Math.round((count / 22) * 100);
        if (progressFill) progressFill.style.width = `${pct}%`;
        if (counterText) counterText.textContent = `${count} / 22 Revealed`;

        if (count === 22) {
          fireCelebrationConfetti(true);
        }
      }
    });

    grid.appendChild(card);
  });
}

/* ==========================================================================
   Cake & Candles
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
      candlesBlown = false;
      flame1.classList.remove("extinguished");
      flame2.classList.remove("extinguished");
      candleBtnText.textContent = "Blow Out The Candles!";
      wishStatusText.textContent = "Candles are glowing! Click to blow them out.";
      return;
    }

    candlesBlown = true;
    flame1.classList.add("extinguished");
    flame2.classList.add("extinguished");
    candleBtnText.textContent = "Relight Candles 🕯️";
    wishStatusText.textContent = "✨ Happy 22nd Birthday Abigail! Wish sent into the stars! ✨";

    fireCelebrationConfetti(false);
  }

  if (cake) cake.addEventListener("click", blowCandles);
  if (blowBtn) blowBtn.addEventListener("click", blowCandles);
}

/* ==========================================================================
   Envelope & Love Letter
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
      prompt.innerHTML = `<i data-lucide="heart"></i> Written with all my love for Abigail`;
      lucide.createIcons();
    }
    fireCelebrationConfetti(false);
  }

  if (waxSeal) waxSeal.addEventListener("click", openEnvelope);
  if (envelope) envelope.addEventListener("click", openEnvelope);
}

/* ==========================================================================
   Wish Jar
   ========================================================================== */
function initWishJar() {
  const wishForm = document.getElementById("wishForm");
  const wishInput = document.getElementById("wishInput");
  const savedArea = document.getElementById("savedWishesArea");
  const storageKey = "abigails_22nd_birthday_wishes";

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
      console.warn(e);
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
      fireCelebrationConfetti(false);
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
   Pop-Culture Lore & Easter Eggs (Lost, Sims, etc.)
   ========================================================================== */
function initMemeEasterEggs() {
  const lostBtn = document.getElementById("lostExecuteBtn");
  if (lostBtn) {
    lostBtn.addEventListener("click", () => {
      alert("⚠️ PROTOCOL 4, 8, 15, 16, 23, 42 ENTERED!\n\nTimer reset: 108 more minutes of hyping up Abigail! WE HAVE TO GO BACK TO THE BIRTHDAY!");
      fireCelebrationConfetti(false);
    });
  }

  const extraBtn = document.getElementById("extraConfettiBtn");
  if (extraBtn) {
    extraBtn.addEventListener("click", () => {
      fireCelebrationConfetti(true);
    });
  }
}

/* ==========================================================================
   Sparkle Canvas
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

  const sparkles = Array.from({ length: 40 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2.5 + 1,
    speedY: Math.random() * 0.35 + 0.1,
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
      ctx.fillStyle = `rgba(235, 120, 140, ${Math.max(0, s.opacity)})`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = "rgba(255, 180, 195, 0.4)";
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

  document.addEventListener("click", (e) => {
    const polaroid = e.target.closest(".polaroid");
    if (polaroid) {
      const src = polaroid.getAttribute("data-src") || polaroid.querySelector("img").src;
      const caption = polaroid.getAttribute("data-caption") || "";

      lightboxImg.src = src;
      lightboxCaption.innerHTML = caption;
      lightbox.classList.add("active");
    }
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}
