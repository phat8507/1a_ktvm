import { siteData } from "./data.js";

const app = document.querySelector("#app");
const nav = document.querySelector("#nav");
const mobileNav = document.querySelector("#mobile-nav-list");
const mobileToggle = document.querySelector("#mobile-nav-toggle");
const loadingState = document.querySelector("#loading-state");
const backToTop = document.querySelector("#back-to-top");

const chartRegistry = new Map();
const chartInstances = new Map();

function setSiteMetadata() {
  document.title = `${siteData.metadata.title} | ${siteData.metadata.subtitle}`;
  document.querySelector("#site-title").textContent = siteData.metadata.title;
  document.querySelector("#site-subtitle").textContent =
    `${siteData.metadata.subtitle} · ${siteData.metadata.group} · ${siteData.metadata.className}`;
  document.querySelector("#site-quote").textContent = siteData.metadata.quote;
  backToTop.textContent = siteData.metadata.backToTop;
}

function annotateGlossary(text) {
  if (!text) return "";

  return Object.keys(siteData.glossary)
    .sort((a, b) => b.length - a.length)
    .reduce((result, term) => {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return result.replace(
        new RegExp(`\\[\\[${escaped}\\]\\]`, "g"),
        `<button class="term-chip" type="button" data-term="${term}" aria-label="Giải thích thuật ngữ ${term}">
          <span>${term}</span>
          <span class="term-chip__icon">i</span>
        </button>`,
      );
    }, text);
}

function renderNavigation() {
  const links = siteData.sections
    .map(
      (section, index) => `
        <a class="nav-link${index === 0 ? " is-active" : ""}" href="#${section.id}" data-target="${section.id}">
          <span class="nav-link__index">${String(index + 1).padStart(2, "0")}</span>
          <span class="nav-link__meta">
            <span class="nav-link__label">${section.navLabel}</span>
            <span class="nav-link__title">${section.title}</span>
          </span>
        </a>
      `,
    )
    .join("");

  nav.innerHTML = links;
  mobileNav.innerHTML = links;
}

function renderMedia(section) {
  if (!section.media) return "";

  return `
    <figure class="media-card">
      <div class="media-card__frame" data-media-frame>
        <img class="media-card__image" src="./${section.media.path}" alt="${section.media.alt}" loading="lazy">
        <div class="media-card__placeholder">
          <p class="media-card__label">${section.media.label}</p>
          <p class="media-card__path">${section.media.path}</p>
          <p class="media-card__hint">${section.media.hint}</p>
        </div>
      </div>
    </figure>
  `;
}

function renderInsightPanel(section) {
  return `
    <div class="panel-copy">
      ${section.intro.map((paragraph) => `<p>${annotateGlossary(paragraph)}</p>`).join("")}
      <div class="mini-card-grid">
        ${section.keyPoints.map((point) => `<article class="mini-card">${annotateGlossary(point)}</article>`).join("")}
      </div>
    </div>
  `;
}

function renderDataPanel(section) {
  return `
    <div class="stats-grid">
      ${section.dataCards
        .map(
          (card) => `
            <article class="stat-card">
              <p class="stat-card__label">${card.label}</p>
              <p class="stat-card__value">${card.value}</p>
              <p class="stat-card__note">${annotateGlossary(card.note)}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderChartVisual(sectionId, visual, active) {
  const chartId = `${sectionId}-${visual.chartId}`;
  chartRegistry.set(chartId, siteData.charts[visual.chartId]);
  const chart = siteData.charts[visual.chartId];

  return `
    <section class="visual-card${active ? " is-active" : ""}" data-visual-panel="${chartId}">
      <header class="visual-card__header">
        <p class="visual-card__eyebrow">${visual.label}</p>
        <h4>${chart.title}</h4>
      </header>
      <div class="chart-wrap">
        <canvas id="${chartId}" aria-label="${chart.title}" role="img"></canvas>
      </div>
      <p class="visual-card__caption">${chart.caption}</p>
      <p class="visual-card__note">${chart.note}</p>
    </section>
  `;
}

function renderTimelineVisual(visual, active) {
  return `
    <section class="visual-card${active ? " is-active" : ""}" data-visual-panel="${visual.label}">
      <header class="visual-card__header">
        <p class="visual-card__eyebrow">${visual.label}</p>
      </header>
      <div class="timeline-steps">
        ${visual.steps
          .map(
            (step, index) => `
              <article class="timeline-step">
                <span class="timeline-step__index">${index + 1}</span>
                <p>${annotateGlossary(step)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTimelineLanesVisual(visual, active) {
  return `
    <section class="visual-card${active ? " is-active" : ""}" data-visual-panel="${visual.label}">
      <header class="visual-card__header">
        <p class="visual-card__eyebrow">${visual.label}</p>
      </header>
      <div class="timeline-lanes">
        ${visual.lanes
          .map(
            (lane) => `
              <article class="timeline-lane">
                <div class="timeline-lane__meta">
                  <h4>${lane.title}</h4>
                  <span>${lane.span}</span>
                </div>
                <p>${annotateGlossary(lane.detail)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
      <p class="timeline-gap">${visual.gapLabel}</p>
    </section>
  `;
}

function renderComparisonVisual(visual, active) {
  return `
    <section class="visual-card${active ? " is-active" : ""}" data-visual-panel="${visual.label}">
      <header class="visual-card__header">
        <p class="visual-card__eyebrow">${visual.label}</p>
      </header>
      <div class="comparison-grid">
        ${visual.items
          .map(
            (item) => `
              <article class="comparison-card">
                <h4>${item.title}</h4>
                <p>${annotateGlossary(item.detail)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFrameworkVisual(visual, active) {
  return `
    <section class="visual-card${active ? " is-active" : ""}" data-visual-panel="${visual.label}">
      <header class="visual-card__header">
        <p class="visual-card__eyebrow">${visual.label}</p>
      </header>
      <div class="framework-grid">
        ${visual.items
          .map(
            (item) => `
              <article class="framework-card${item.emphasis ? " framework-card--emphasis" : ""}">
                <p class="framework-card__title">${item.title}</p>
                <p class="framework-card__subtitle">${item.subtitle}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderRouteVisual(visual, active) {
  return `
    <section class="visual-card${active ? " is-active" : ""}" data-visual-panel="${visual.label}">
      <header class="visual-card__header">
        <p class="visual-card__eyebrow">${visual.label}</p>
      </header>
      <div class="route-grid">
        ${visual.routes
          .map(
            (route) => `
              <article class="route-card">
                <h4>${route.title}</h4>
                <p>${route.detail}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderQuoteVisual(visual, active) {
  return `
    <section class="visual-card visual-card--quote${active ? " is-active" : ""}" data-visual-panel="${visual.label}">
      <header class="visual-card__header">
        <p class="visual-card__eyebrow">${visual.label}</p>
      </header>
      <blockquote>${visual.quote}</blockquote>
    </section>
  `;
}

function renderTeamVisual(visual, active) {
  return `
    <section class="visual-card visual-card--team${active ? " is-active" : ""}" data-visual-panel="${visual.label}">
      <header class="visual-card__header">
        <p class="visual-card__eyebrow">${visual.label}</p>
      </header>
      <div class="team-grid">
        ${visual.members
          .map(
            (member, index) => `
              <article class="member-card">
                <div class="member-card__avatar">
                  <span>TV ${index + 1}</span>
                  <p>Ảnh thành viên nhóm</p>
                </div>
                <div class="member-card__body">
                  <p class="member-card__name">${member.name}</p>
                  <p class="member-card__role">${member.role}</p>
                  <p class="member-card__focus">${member.focus}</p>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderVisual(section, visual, index) {
  const active = index === 0;
  if (visual.type === "chart") return renderChartVisual(section.id, visual, active);
  if (visual.type === "timeline") return renderTimelineVisual(visual, active);
  if (visual.type === "timeline-lanes") return renderTimelineLanesVisual(visual, active);
  if (visual.type === "comparison") return renderComparisonVisual(visual, active);
  if (visual.type === "framework") return renderFrameworkVisual(visual, active);
  if (visual.type === "route") return renderRouteVisual(visual, active);
  if (visual.type === "team") return renderTeamVisual(visual, active);
  return renderQuoteVisual(visual, active);
}

function renderChartPanel(section) {
  const tabs = section.visuals
    .map(
      (visual, index) => `
        <button class="visual-tab${index === 0 ? " is-active" : ""}" type="button"
          data-visual-target="${visual.type === "chart" ? `${section.id}-${visual.chartId}` : visual.label}">
          ${visual.label}
        </button>
      `,
    )
    .join("");

  const panels = section.visuals.map((visual, index) => renderVisual(section, visual, index)).join("");

  return `
    <div class="visual-switcher">
      <div class="visual-tabs">${tabs}</div>
      <div class="visual-panels">${panels}</div>
    </div>
  `;
}

function renderSourcePanel(section) {
  return `
    <div class="source-grid">
      ${section.sources
        .map(
          (source) => `
            <article class="source-card">
              <p class="source-card__name">${source.name}</p>
              <p class="source-card__uses">${source.uses}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderCoverActions() {
  return `
    <div class="hero-actions">
      <button class="hero-action hero-action--primary" type="button" data-scroll-to="hook">${siteData.metadata.ctaStart}</button>
      <button class="hero-action" type="button" data-scroll-to="team">${siteData.metadata.ctaTeam}</button>
    </div>
  `;
}

function renderSection(section, index) {
  const panels = [
    { key: "insight", label: siteData.metadata.panelLabels.insight, content: renderInsightPanel(section) },
    { key: "data", label: siteData.metadata.panelLabels.data, content: renderDataPanel(section) },
    { key: "chart", label: siteData.metadata.panelLabels.chart, content: renderChartPanel(section) },
    { key: "source", label: siteData.metadata.panelLabels.source, content: renderSourcePanel(section) },
  ];

  return `
    <section id="${section.id}" class="slide-section slide-section--${section.layout} accent-${section.accent}" data-section="${section.id}">
      <div class="slide-section__header">
        <div class="slide-section__headline">
          <p class="slide-section__eyebrow">${section.eyebrow}</p>
          <h2 class="slide-section__title">${section.title}</h2>
          <p class="slide-section__subtitle">${section.subtitle}</p>
        </div>
        <aside class="slide-section__key">
          <span>${siteData.metadata.sectionBadge}</span>
          <p>${section.keyMessage}</p>
        </aside>
      </div>
      <div class="slide-section__hero">
        <div class="slide-section__body">
          ${section.id === "cover" ? renderCoverActions() : ""}
          ${renderMedia(section)}
          <div class="panel-switcher">
            <div class="panel-switcher__tabs">
              ${panels
                .map(
                  (panel, panelIndex) => `
                    <button class="panel-tab${panelIndex === 0 ? " is-active" : ""}" type="button" data-panel-target="${panel.key}">
                      ${panel.label}
                    </button>
                  `,
                )
                .join("")}
            </div>
            <div class="panel-switcher__content">
              ${panels
                .map(
                  (panel, panelIndex) => `
                    <div class="panel-surface${panelIndex === 0 ? " is-active" : ""}" data-panel="${panel.key}">
                      ${panel.content}
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
      <div class="section-nav">
        ${
          index > 0
            ? `<button class="section-nav__button" type="button" data-scroll-to="${siteData.sections[index - 1].id}">${siteData.metadata.previous}</button>`
            : `<span class="section-nav__spacer"></span>`
        }
        ${
          index < siteData.sections.length - 1
            ? `<button class="section-nav__button section-nav__button--primary" type="button" data-scroll-to="${siteData.sections[index + 1].id}">${siteData.metadata.next}</button>`
            : `<button class="section-nav__button section-nav__button--primary" type="button" data-scroll-to="cover">${siteData.metadata.backToTop}</button>`
        }
      </div>
    </section>
  `;
}

function renderApp() {
  const introMarkup = `
    <section class="app-intro">
      <p class="app-intro__eyebrow">${siteData.metadata.sectionBadge}</p>
      <h1>${siteData.metadata.title}</h1>
      <p>${siteData.metadata.heroIntro}</p>
    </section>
  `;

  const sectionsMarkup = siteData.sections.map((section, index) => renderSection(section, index)).join("");
  app.innerHTML = `${introMarkup}${sectionsMarkup}`;
  if (loadingState) loadingState.hidden = true;
}

function buildBaseChartConfig(chart) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 900, easing: "easeOutQuart" },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#20304c",
          font: { family: "Be Vietnam Pro", size: 12, weight: "600" },
          boxWidth: 12,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "rgba(14, 27, 52, 0.92)",
        titleColor: "#fffdf8",
        bodyColor: "#fffdf8",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
      },
    },
    scales: {},
  };
}

function createChart(chartId, chart) {
  if (!window.Chart || chartInstances.has(chartId)) return;
  const canvas = document.getElementById(chartId);
  if (!canvas) return;

  const palette = ["#f05d52", "#ff9b71", "#1d3557", "#d6a84f", "#4f8fbf", "#edc988"];
  const baseOptions = buildBaseChartConfig(chart);
  const commonDataset = {
    borderColor: palette[0],
    backgroundColor: chart.type === "line" ? "rgba(240, 93, 82, 0.16)" : palette,
    borderWidth: 2,
    pointRadius: 4,
    pointHoverRadius: 6,
  };

  const datasets = chart.data.datasets.map((dataset, index) => ({
    ...commonDataset,
    ...dataset,
    backgroundColor:
      chart.type === "bar"
        ? dataset.backgroundColor || palette[index % palette.length]
        : chart.type === "doughnut" || chart.type === "pie"
          ? palette
          : dataset.backgroundColor || commonDataset.backgroundColor,
    borderColor: dataset.borderColor || palette[index % palette.length],
  }));

  if (chart.options?.yTitle) {
    baseOptions.scales.y = {
      beginAtZero: chart.type !== "line",
      grid: { color: "rgba(29, 53, 87, 0.08)" },
      ticks: { color: "#51607a" },
      title: { display: true, text: chart.options.yTitle, color: "#20304c" },
    };
  }

  baseOptions.scales.x = {
    grid: { display: false },
    ticks: { color: "#51607a" },
  };

  if (chart.options?.dualAxis) {
    baseOptions.scales = {
      x: { grid: { display: false }, ticks: { color: "#51607a" } },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(29, 53, 87, 0.08)" },
        ticks: { color: "#51607a" },
        title: { display: true, text: chart.options.yTitle, color: "#20304c" },
      },
      y1: {
        beginAtZero: true,
        position: "right",
        grid: { drawOnChartArea: false },
        ticks: { color: "#51607a" },
        title: { display: true, text: chart.options.y1Title, color: "#20304c" },
      },
    };
  }

  const instance = new window.Chart(canvas, {
    type: chart.type === "mixed" ? "bar" : chart.type,
    data: { labels: chart.data.labels, datasets },
    options: {
      ...baseOptions,
      elements: { line: { tension: chart.options?.tension ?? 0.25 } },
    },
  });

  chartInstances.set(chartId, instance);
}

function initializeCharts() {
  for (const [chartId, chart] of chartRegistry.entries()) {
    createChart(chartId, chart);
  }
}

function setupPanelSwitchers() {
  document.querySelectorAll(".panel-switcher").forEach((switcher) => {
    const tabs = switcher.querySelectorAll(".panel-tab");
    const panels = switcher.querySelectorAll(".panel-surface");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.panelTarget;
        tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
        panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === target));
      });
    });
  });

  document.querySelectorAll(".visual-switcher").forEach((switcher) => {
    const tabs = switcher.querySelectorAll(".visual-tab");
    const panels = switcher.querySelectorAll(".visual-card");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.visualTarget;
        tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
        panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.visualPanel === target));
      });
    });
  });
}

function setupSmoothScroll() {
  document.querySelectorAll("[data-scroll-to]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTo);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      const mobileContainer = mobileNav.closest(".mobile-nav");
      mobileContainer?.classList.remove("is-open");
      mobileNav.hidden = true;
      mobileToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.getElementById(link.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      const mobileContainer = mobileNav.closest(".mobile-nav");
      mobileContainer?.classList.remove("is-open");
      mobileNav.hidden = true;
      mobileToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupActiveSections() {
  const links = [...document.querySelectorAll(".nav-link")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((link) => link.classList.toggle("is-active", link.dataset.target === id));
      });
    },
    { rootMargin: "-35% 0px -45% 0px", threshold: 0.1 },
  );

  document.querySelectorAll(".slide-section").forEach((section) => observer.observe(section));
}

function setupGlossaryTooltips() {
  const tooltip = document.createElement("div");
  tooltip.className = "glossary-tooltip";
  document.body.appendChild(tooltip);

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".term-chip");
    if (!trigger) {
      tooltip.classList.remove("is-visible");
      return;
    }

    const term = trigger.dataset.term;
    tooltip.innerHTML = `<p class="glossary-tooltip__term">${term}</p><p>${siteData.glossary[term]}</p>`;
    const rect = trigger.getBoundingClientRect();
    tooltip.style.top = `${window.scrollY + rect.bottom + 10}px`;
    tooltip.style.left = `${Math.min(window.innerWidth - 280, rect.left + window.scrollX)}px`;
    tooltip.classList.add("is-visible");
  });
}

function setupMediaFallbacks() {
  document.querySelectorAll(".media-card__image").forEach((image) => {
    const frame = image.closest("[data-media-frame]");
    if (!frame) return;

    image.addEventListener("error", () => frame.classList.add("is-missing"));
    if (image.complete && image.naturalWidth === 0) frame.classList.add("is-missing");
    if (image.complete && image.naturalWidth > 0) frame.classList.add("has-image");
    image.addEventListener("load", () => frame.classList.add("has-image"));
  });
}

function setupMobileNav() {
  mobileToggle.addEventListener("click", () => {
    const container = mobileToggle.closest(".mobile-nav");
    const isOpen = container.classList.toggle("is-open");
    mobileNav.hidden = !isOpen;
    mobileToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupBackToTop() {
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 600);
  });
}

function revealSections() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.16 },
  );

  document.querySelectorAll(".slide-section, .app-intro").forEach((node) => observer.observe(node));
}

function init() {
  setSiteMetadata();
  renderNavigation();
  renderApp();
  initializeCharts();
  setupPanelSwitchers();
  setupSmoothScroll();
  setupActiveSections();
  setupGlossaryTooltips();
  setupMediaFallbacks();
  setupMobileNav();
  setupBackToTop();
  revealSections();
}

init();
