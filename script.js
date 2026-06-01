// ============================================
// TIMELINE DATA (ordered chronologically)
// ============================================
const timelineData = [
  {
    id: "nrc",
    year: "1916",
    accent: "blue",
    image: "assets/images/nrc.png",
    title: "National Research Council of Canada",
    org: "The Canadian Encyclopedia",
    url: "https://thecanadianencyclopedia.ca/en/article/national-research-council-of-canada",
    summary:
      "The NRC is the Canadian government's leading agency for science and technology research. Established in 1916, it expanded massively during WWII for military technology, then shifted to peacetime industrial and medical research, contributing to inventions like the pacemaker, anti-gravity suits, and the Canadarm.",
    facts: [
      "The Canadian government's leading agency for science and technology research, established in 1916",
      "Grew massively during WWII to research military technology like radar and atomic energy",
      "Shifted to peacetime industrial and medical research after the war",
      "Contributed to many major global inventions, including the heart pacemaker, anti-gravity suits, and the Canadarm",
    ],
  },
  {
    id: "air-canada",
    year: "1937",
    accent: "rose",
    image: "assets/images/air_canada.png",
    title: "Air Canada",
    org: "The Canadian Encyclopedia",
    url: "https://thecanadianencyclopedia.ca/en/article/air-canada",
    summary:
      "Air Canada is Canada's largest airline, originally named Trans-Canada Air Lines (TCA). Created in 1937 by the national railway to handle mail and passenger travel, it was renamed to Air Canada in 1965 and became a fully private company in 1989.",
    facts: [
      "It is Canada's largest airline, originally named Trans-Canada Air Lines (TCA)",
      "Created in 1937 by the national railway to handle mail and passenger travel",
      "Renamed to Air Canada in 1965",
      "Started as a government-owned corporation but became a fully private company in 1989",
    ],
  },
  {
    id: "pacemaker",
    year: "1950",
    accent: "emerald",
    image: "assets/images/pacemaker.png",
    title: "John Alexander Hopps & the Pacemaker",
    org: "The Canadian Encyclopedia",
    url: "https://thecanadianencyclopedia.ca/en/article/john-a-hopps",
    summary:
      "John Hopps is known as the pioneer of biomedical engineering in Canada for inventing the first cardiac pacemaker. Working at the NRC in 1950 while researching how cold temperatures affect the heart, he discovered that electrical stimulation could restart or regulate heart rhythm.",
    facts: [
      "John Hopps is known for being the pioneer of biomedical engineering in Canada, for inventing the first pacemaker",
      "The invention happened at the NRC in 1950 while researching how cold temperatures affect the heart during surgery",
      "Discovered that electricity could be used to restart or control the rhythm of a heart that had stopped",
      "The prototype was external and very large, but it laid the foundation for the tiny internal devices used today",
      "He later led international organisations dedicated to merging engineering with medical science",
    ],
  },
  {
    id: "trans-canada-hwy",
    year: "1950–1971",
    accent: "amber",
    image: "assets/images/highway.png",
    title: "Trans-Canada Highway",
    org: "The Canadian Encyclopedia",
    url: "https://thecanadianencyclopedia.ca/en/article/trans-canada-highway",
    summary:
      "The Trans-Canada Highway is a massive road system linking all ten provinces. Spanning approximately 7,821 km, it is the longest national highway in the world. Authorised by a 1949 federal act, construction started in 1950, it officially opened in 1962, and was completed in 1971.",
    facts: [
      "Massive road system linking all ten provinces",
      "Total length is approximately 7,821 km, making it a global record-holder",
      "Started in 1950, officially opened in 1962, but finished in 1971",
      "Authorised by a 1949 federal act to improve national transportation",
    ],
  },
  {
    id: "cbc",
    year: "1952",
    accent: "indigo",
    image: "assets/images/cbc.png",
    title: "CBC Television Launches",
    org: "The Canadian Encyclopedia",
    url: "https://thecanadianencyclopedia.ca/en/article/canadian-broadcasting-corporation",
    summary:
      "CBC Television debuted on CBFT Montreal on September 6, 1952, and on CBLT Toronto two nights later. Initially reaching only 26% of the population, coverage expanded rapidly to 85% by 1957, making Canada the second-highest producer of live television in the world.",
    facts: [
      "Television service started on CBFT Montreal on September 6, 1952, and on CBLT Toronto two nights later",
      "Initial television access was limited to 26% of the population, but grew rapidly to 60% by 1954",
      "Canada became the second-highest producer of live television programming in the world",
      "New CBC stations opened in Ottawa, Vancouver, Winnipeg, and Halifax",
      "Both English and French networks were broadcasting up to 10 hours a day by 1957",
      "Total network coverage reached 85% of the population through a mix of CBC-owned stations and private affiliates",
      "The rise of television hurt CBC's radio service by pulling away talent, funds, and market share",
      "A major revolution in the 1970s transformed CBC's radio service and made it the pride of the corporation",
    ],
  },
  {
    id: "st-lawrence",
    year: "1959",
    accent: "cyan",
    image: "assets/images/seaway.png",
    title: "St. Lawrence Seaway",
    org: "The Canadian Encyclopedia",
    url: "https://thecanadianencyclopedia.ca/en/article/st-lawrence-seaway",
    summary:
      "The St. Lawrence Seaway is a 3,700 km shipping route from the Atlantic Ocean to Lake Superior. Completed in 1959 as a joint effort between Canada and the U.S., it uses a system of locks, canals, and dredged waterways to allow large ocean ships to reach inside North America.",
    facts: [
      "3,700 km shipping route from the Atlantic Ocean to Lake Superior",
      "Joint effort between Canada and the U.S. that was finished in 1959",
      "Uses a system of locks, canals, and dredged waterways",
      "Allows large ocean ships to reach inside North America",
    ],
  },
  {
    id: "space-tech",
    year: "1962",
    accent: "violet",
    image: "assets/images/space_tech.png",
    title: "Canadian Space Technology",
    org: "The Canadian Encyclopedia",
    url: "https://thecanadianencyclopedia.ca/en/article/space-technology",
    summary:
      "Canada became the third country to build its own satellite, launching Alouette 1 in 1962 to study the ionosphere. The focus shifted to communications in the 1970s with Anik A1, the first domestic communications satellite. Canada also created the iconic Canadarm, first used on the Space Shuttle in 1981.",
    facts: [
      "Canada was the third country to build its own satellite, starting with Alouette 1 in 1962",
      "Initial research focused on the atmosphere, but shifted to communication technology in the 1970s",
      "Launched Anik A1 in 1972, which was the first domestic communications satellite in a fixed orbit",
      "Created the Canadarm, a robotic limb first used in 1981 to handle equipment on the Space Shuttle",
    ],
  },
  {
    id: "transoceanic",
    year: "1956–1971",
    accent: "orange",
    image: "assets/images/telephony.png",
    title: "Direct Transoceanic Dialling",
    org: "EBSCO",
    url: "https://www.ebsco.com/research-starters/history/direct-transoceanic-dialing-begins",
    summary:
      "Direct transoceanic dialling allowed people to call overseas without operator assistance. Made possible by underwater cables and communication satellites, the technology evolved from the first transatlantic phone cable in 1956 to full public availability in 1971.",
    facts: [
      "Direct transoceanic dialling means calling overseas without needing an operator",
      "Worked because of underwater cables and satellites, which gave more lines and better quality",
      "Bell showed off faster service at the World's Fair in NYC",
      "WWII delayed the technology",
      "Direct long-distance dialling started in the US in the 50s",
      "By the early 60s, a bit over half of Bell customers had direct dialling",
      "Touch-tone phones came out in the 60s, and overseas operators started using dialling around the same time",
      "By the end of the 60s, pretty much all of the US phone system was automated",
      "Regular people could finally dial overseas calls themselves in the early 70s",
      "The first underwater telegraph cable was laid in the 1850s, but the first transatlantic phone cable didn't come until almost 100 years later",
      "AT&T tried using shortwave radio instead of cables to save money",
      "It didn't work because the weather messed up the signal, and each call needed two different frequencies",
      "Cables ended up winning over radio",
    ],
  },
];

// ============================================
// DOM ELEMENTS
// ============================================
const track = document.getElementById("timeline-track");
const viewport = document.getElementById("timeline-viewport");
const progressFill = document.getElementById("progress-fill");
const yearNav = document.getElementById("year-nav");
const introOverlay = document.getElementById("intro-overlay");
const introBtn = document.getElementById("intro-btn");
const bgImagesContainer = document.getElementById("bg-images");

// ============================================
// STATE
// ============================================
let scrollX = 0;
let targetScrollX = 0;
let scrollY = 0;
let targetScrollY = 0;
let maxScroll = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartScroll = 0;
let animationId = null;
let isIntroVisible = true;
let expandedCardId = null;

// ============================================
// BUILD TIMELINE CARDS
// ============================================
function buildTimeline() {
  timelineData.forEach((item, index) => {
    const position = "above";

    const card = document.createElement("div");
    card.className = `timeline-card timeline-card--${position}`;
    card.dataset.accent = item.accent;
    card.dataset.index = index;
    card.id = `card-${item.id}`;

    // Build facts list
    const factsHTML = item.facts
      .map((f) => `<li>${f}</li>`)
      .join("");

    card.innerHTML = `
      <div class="timeline-card__dot"></div>
      <div class="timeline-card__connector"></div>
      <div class="timeline-card__body">
        <span class="timeline-card__year">${item.year}</span>
        <h2 class="timeline-card__title">${item.title}</h2>
        <p class="timeline-card__org">${item.org}</p>
        <p class="timeline-card__summary">${item.summary}</p>
        <ul class="timeline-card__facts" id="facts-${item.id}">${factsHTML}</ul>
        <button class="timeline-card__toggle" id="toggle-${item.id}" aria-expanded="false">
          <span>Key Details</span>
          <span class="timeline-card__toggle-arrow">▼</span>
        </button>
        <a class="timeline-card__source" href="${item.url}" target="_blank" rel="noopener noreferrer">
          <svg class="timeline-card__source-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          View Source
        </a>
      </div>
    `;

    track.appendChild(card);

    // Toggle facts
    const toggleBtn = card.querySelector(`#toggle-${item.id}`);
    const factsList = card.querySelector(`#facts-${item.id}`);
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const expanded = factsList.classList.toggle("expanded");
      toggleBtn.classList.toggle("expanded", expanded);
      toggleBtn.setAttribute("aria-expanded", expanded);
      toggleBtn.querySelector("span:first-child").textContent = expanded
        ? "Hide Details"
        : "Key Details";

      // Collapse any previously expanded card
      if (expanded && expandedCardId && expandedCardId !== item.id) {
        const prevFacts = document.getElementById(`facts-${expandedCardId}`);
        const prevToggle = document.getElementById(`toggle-${expandedCardId}`);
        if (prevFacts) prevFacts.classList.remove("expanded");
        if (prevToggle) {
          prevToggle.classList.remove("expanded");
          prevToggle.setAttribute("aria-expanded", false);
          prevToggle.querySelector("span:first-child").textContent = "Key Details";
        }
      }

      if (expanded) {
        expandedCardId = item.id;
      } else {
        expandedCardId = null;
      }

      // Recalculate max scroll after expanding
      requestAnimationFrame(calculateMaxScroll);
    });
  });

  // Build year nav dots
  timelineData.forEach((item, index) => {
    const dot = document.createElement("button");
    dot.className = "year-nav__dot";
    dot.dataset.index = index;
    dot.dataset.year = item.year;
    dot.style.background = `var(--accent-${item.accent})`;
    dot.addEventListener("click", () => scrollToCard(index));
    yearNav.appendChild(dot);
  });
}

// ============================================
// BUILD BACKGROUND IMAGES
// ============================================
function buildBackgroundImages() {
  if (!bgImagesContainer) return;
  timelineData.forEach((item, index) => {
    const bgItem = document.createElement("div");
    bgItem.className = "bg-effects__image-item";
    bgItem.id = `bg-image-${item.id}`;
    bgItem.style.backgroundImage = `url('${item.image}')`;
    bgImagesContainer.appendChild(bgItem);
  });
}

// ============================================
// SCROLL CALCULATIONS
// ============================================
function calculateMaxScroll() {
  const trackWidth = track.scrollWidth;
  const viewportWidth = viewport.clientWidth;
  maxScroll = Math.max(0, trackWidth - viewportWidth);
}

function clampScroll(value) {
  return Math.max(0, Math.min(value, maxScroll));
}

function scrollToCard(index) {
  const cards = track.querySelectorAll(".timeline-card");
  if (!cards[index]) return;

  const card = cards[index];
  const cardCenter =
    card.offsetLeft + card.offsetWidth / 2 - viewport.clientWidth / 2;
  targetScrollX = clampScroll(cardCenter);
  targetScrollY = 0;
}

// ============================================
// ANIMATION LOOP
// ============================================
function animate() {
  // Smooth lerp towards target (horizontal)
  const diffX = targetScrollX - scrollX;
  scrollX += diffX * 0.1;
  if (Math.abs(diffX) < 0.5) {
    scrollX = targetScrollX;
  }

  // Smooth lerp towards target (vertical)
  const diffY = targetScrollY - scrollY;
  scrollY += diffY * 0.1;
  if (Math.abs(diffY) < 0.5) {
    scrollY = targetScrollY;
  }

  // Apply transform (both axes)
  track.style.transform = `translateX(${-scrollX}px) translateY(${scrollY}px)`;

  // Update progress bar
  const progress = maxScroll > 0 ? (scrollX / maxScroll) * 100 : 0;
  progressFill.style.width = `${progress}%`;

  // Update card visibility / parallax
  updateCardVisibility();

  // Update background image dynamic states
  updateBackgroundImages();

  // Update nav dots
  updateNavDots();

  animationId = requestAnimationFrame(animate);
}

function updateCardVisibility() {
  const cards = track.querySelectorAll(".timeline-card");
  const viewportCenter = scrollX + viewport.clientWidth / 2;

  cards.forEach((card) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(viewportCenter - cardCenter);
    const threshold = viewport.clientWidth * 0.55;

    if (distance < threshold) {
      card.classList.add("in-view");
    } else {
      card.classList.remove("in-view");
    }
  });
}

function updateBackgroundImages() {
  const cards = track.querySelectorAll(".timeline-card");
  const viewportCenter = scrollX + viewport.clientWidth / 2;

  timelineData.forEach((item, index) => {
    const card = cards[index];
    if (!card) return;

    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const offsetFromCenter = cardCenter - viewportCenter;
    const maxDistance = viewport.clientWidth * 0.65; // Fade distance

    const t = Math.min(1, Math.abs(offsetFromCenter) / maxDistance);
    const weight = 1 - (t * t * (3 - 2 * t)); // Smoothstep curve

    const bgItem = document.getElementById(`bg-image-${item.id}`);
    if (bgItem) {
      // Set dynamic opacity based on proximity to center
      bgItem.style.opacity = weight;

      // Subtle parallax shift and scale zoom
      const parallaxX = offsetFromCenter * -0.06;
      bgItem.style.transform = `translateX(${parallaxX}px) scale(${1.02 + weight * 0.03})`;
    }
  });
}

function updateNavDots() {
  const cards = track.querySelectorAll(".timeline-card");
  const viewportCenter = scrollX + viewport.clientWidth / 2;
  let closestIndex = 0;
  let closestDist = Infinity;

  cards.forEach((card, i) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const dist = Math.abs(viewportCenter - cardCenter);
    if (dist < closestDist) {
      closestDist = dist;
      closestIndex = i;
    }
  });

  const dots = yearNav.querySelectorAll(".year-nav__dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === closestIndex);
  });
}

// ============================================
// EVENT HANDLERS
// ============================================

// Scroll wheel → horizontal
function handleWheel(e) {
  if (isIntroVisible) return;
  e.preventDefault();
  const delta = e.deltaY || e.deltaX;
  targetScrollX = clampScroll(targetScrollX + delta * 1.5);
  // Reset vertical offset when scrolling horizontally
  targetScrollY = 0;
}

// Mouse drag
function handleMouseDown(e) {
  if (isIntroVisible) return;
  // Don't start drag if clicking a button or link
  if (e.target.closest("button, a")) return;
  isDragging = true;
  dragStartX = e.clientX;
  dragStartScroll = targetScrollX;
  document.body.style.cursor = "grabbing";
}

function handleMouseMove(e) {
  if (!isDragging) return;
  const dx = dragStartX - e.clientX;
  targetScrollX = clampScroll(dragStartScroll + dx);
  targetScrollY = 0;
}

function handleMouseUp() {
  isDragging = false;
  document.body.style.cursor = "grab";
}

// Touch drag
let touchStartX = 0;
let touchStartScroll = 0;

function handleTouchStart(e) {
  if (isIntroVisible) return;
  touchStartX = e.touches[0].clientX;
  touchStartScroll = targetScrollX;
}

function handleTouchMove(e) {
  if (isIntroVisible) return;
  e.preventDefault();
  const dx = touchStartX - e.touches[0].clientX;
  targetScrollX = clampScroll(touchStartScroll + dx);
}

// Keyboard arrows
function handleKeyDown(e) {
  if (isIntroVisible) return;
  const step = 300;
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    targetScrollX = clampScroll(targetScrollX + step);
    targetScrollY = 0;
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    targetScrollX = clampScroll(targetScrollX - step);
    targetScrollY = 0;
  }
}

// Resize
function handleResize() {
  calculateMaxScroll();
  targetScrollX = clampScroll(targetScrollX);
}

// Intro dismiss
function dismissIntro() {
  introOverlay.classList.add("hidden");
  isIntroVisible = false;
  // Start at first card
  setTimeout(() => scrollToCard(0), 200);
}

// ============================================
// INIT
// ============================================
function init() {
  buildTimeline();
  buildBackgroundImages();
  calculateMaxScroll();

  // Events
  viewport.addEventListener("wheel", handleWheel, { passive: false });
  viewport.addEventListener("mousedown", handleMouseDown);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
  viewport.addEventListener("touchstart", handleTouchStart, {
    passive: true,
  });
  viewport.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("resize", handleResize);
  introBtn.addEventListener("click", dismissIntro);

  // Start animation loop
  animate();
}

document.addEventListener("DOMContentLoaded", init);
