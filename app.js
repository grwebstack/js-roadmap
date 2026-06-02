const STORAGE_KEY = "js-roadmap-progress";

let roadmap = null;
let progress = {};

// ─── Storage ──────────────────────────────────────────────

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function toggleTopic(topicId) {
  progress[topicId] = !progress[topicId];
  saveProgress();
  updateUI();
}

// ─── Stats ────────────────────────────────────────────────

function getStats() {
  const total = roadmap.modules.reduce((acc, m) => acc + m.topics.length, 0);
  const completed = Object.values(progress).filter(Boolean).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { total, completed, percent };
}

function getModuleStats(module) {
  const total = module.topics.length;
  const completed = module.topics.filter(t => progress[t.id]).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { total, completed, percent };
}

// ─── Components ───────────────────────────────────────────

function createDifficultyDots(level) {
  return [1, 2, 3]
    .map(i => {
      const active = i <= level ? "bg-yellow-400" : "bg-zinc-700";
      return `<span class="inline-block w-1.5 h-1.5 rounded-full ${active}"></span>`;
    })
    .join("");
}

function createTopicItem(topic) {
  const done = !!progress[topic.id];

  const li = document.createElement("li");
  li.className = [
    "flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl cursor-pointer",
    "transition-all duration-200 group select-none",
    done ? "bg-zinc-800/60" : "hover:bg-zinc-800/40",
  ].join(" ");

  const checkIcon = done
    ? `<svg class="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
       </svg>`
    : "";

  const checkBox = `
    <div class="w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all duration-200
      ${done ? "bg-emerald-400 border-emerald-400" : "border-zinc-600 group-hover:border-zinc-400"}">
      ${checkIcon}
    </div>
  `;

  const label = `
    <span class="text-sm transition-colors duration-200
      ${done ? "text-zinc-500 line-through" : "text-zinc-200 group-hover:text-white"}">
      ${topic.title}
    </span>
  `;

  li.innerHTML = `
    <div class="flex items-center gap-3">${checkBox}${label}</div>
    <div class="flex gap-0.5 items-center">${createDifficultyDots(topic.difficulty)}</div>
  `;

  li.addEventListener("click", () => toggleTopic(topic.id));
  return li;
}

function createModuleCard(module) {
  const { total, completed, percent } = getModuleStats(module);
  const allDone = completed === total;
  const barColor = allDone ? "bg-emerald-400" : "bg-yellow-400";

  const card = document.createElement("div");
  card.className = "module-card bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4";

  card.innerHTML = `
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <span class="text-2xl" aria-hidden="true">${module.icon}</span>
        <h2 class="text-white font-semibold text-lg tracking-tight">${module.title}</h2>
      </div>
      <span class="text-xs font-mono text-zinc-400 tabular-nums">${completed}/${total}</span>
    </div>

    <div class="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden" role="progressbar"
      aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
      <div class="h-full rounded-full transition-all duration-500 ${barColor}" style="width: ${percent}%"></div>
    </div>

    <ul class="flex flex-col gap-1.5" id="topics-${module.id}"></ul>
  `;

  return card;
}

// ─── Render ───────────────────────────────────────────────

function renderModules() {
  const container = document.getElementById("modules");
  container.innerHTML = "";

  roadmap.modules.forEach(module => {
    const card = createModuleCard(module);
    container.appendChild(card);

    const list = document.getElementById(`topics-${module.id}`);
    module.topics.forEach(topic => list.appendChild(createTopicItem(topic)));
  });
}

function renderHeader() {
  const { total, completed, percent } = getStats();
  const allDone = percent === 100;

  document.getElementById("stat-completed").textContent = completed;
  document.getElementById("stat-total").textContent = total;
  document.getElementById("stat-percent").textContent = `${percent}%`;
  document.getElementById("stat-percent").className = [
    "text-2xl font-bold font-mono transition-colors duration-500",
    allDone ? "text-emerald-400" : "text-yellow-400",
  ].join(" ");

  const bar = document.getElementById("progress-bar");
  bar.style.width = `${percent}%`;
  bar.className = `h-full rounded-full transition-all duration-700 ${allDone ? "bg-emerald-400" : "bg-yellow-400"}`;
}

function updateUI() {
  renderHeader();
  renderModules();
}

// ─── Reset ────────────────────────────────────────────────

function resetProgress() {
  if (confirm("Resetar todo o progresso?")) {
    progress = {};
    saveProgress();
    updateUI();
  }
}

// ─── Init ─────────────────────────────────────────────────

async function init() {
  try {
    const res = await fetch("data.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    roadmap = await res.json();
    progress = loadProgress();

    document.getElementById("roadmap-title").textContent = roadmap.title;
    updateUI();
  } catch (err) {
    console.error("Erro ao carregar data.json:", err);
    document.getElementById("modules").innerHTML = `
      <p class="text-red-400 text-sm font-mono">
        Erro ao carregar o roadmap.<br>
        <span class="text-zinc-500">Execute um servidor local: <code>npx serve .</code></span>
      </p>
    `;
  }
}

init();