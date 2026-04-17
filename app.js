import { siteData } from "./data.js";

const app = document.querySelector("#app");
const nav = document.querySelector("#nav");
const mobileNav = document.querySelector("#mobile-nav-list");
const mobileToggle = document.querySelector("#mobile-nav-toggle");
const chartRegistry = new Map();
const chartInstances = new Map();

function setSiteMetadata() {
  document.title = `${siteData.metadata.title} | ${siteData.metadata.subtitle}`;
  document.querySelector("#site-title").textContent = siteData.metadata.title;
  document.querySelector("#site-subtitle").textContent = `${siteData.metadata.subtitle} - ${siteData.metadata.group}, ${siteData.metadata.className}`;
  document.querySelector("#site-quote").textContent = siteData.metadata.quote;
}

function annotateGlossary(text) {
  if (!text) return "";
  const terms = Object.keys(siteData.glossary).sort((a, b) => b.length - a.length);
  let result = text;

  for (const term of terms) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    result = result.replace(
      new RegExp(`\\[\\[${escaped}\\]\\]`, "g"),
      `<button class="term-chip" type="button" data-term="${term}" aria-label="Giai thich ${term}">${term}<span class="term-chip__icon">i</span></button>`,
    );
  }

  return result;
}

function renderNavigation() {
  const navMarkup = siteData.sections
    .map(
      (section, index) => `
        <a class="nav-link${index === 0 ? " is-active" : ""}" href="#${section.id}" data-target="${section.id}">
          <span class="nav-link__index">${String(index + 1).padStart(2, "0")}</span>
          <span class="nav-link__label">${section.title}</span>
        </a>
      `,
    )
    .join("");

  nav.innerHTML = navMarkup;
  mobileNav.innerHTML = navMarkup;
}

function renderMedia(section) {
  if (!section.media) return "";

  return `
    <figure class="media-card" data-media-card>
      <div class="media-card__frame">
        <img
          class="media-card__image"
          src="./${section.media.path}"
          alt="${section.media.alt}"
          loading="lazy"
        >
        <div class="media-card__placeholder">
          <p class="media-card__placeholder-label">${section.media.label}</p>
          <p class="media-card__placeholder-path">${section.media.path}</p>
          <p class="media-card__placeholder-note">${section.media.hint}</p>
        </div>
      </div>
    </figure>
  `;
}

function renderKeyPanel(section) {
  return `
    <div class="panel-copy">
      ${section.intro.map((paragraph) => `<p>${annotateGlossary(paragraph)}</p>`).join("")}
      <div class="panel-copy__points">
        ${section.keyPoints
          .map((point) => `<article class="mini-card"><p>${annotateGlossary(point)}</p></article>`)
          .join("")}
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

function renderChartVisual(visual, sectionId, isActive) {
  const chartId = `${sectionId}-${visual.chartId}`;
  chartRegistry.set(chartId, siteData.charts[visual.chartId]);

  return `
    <section class="visual-card${isActive ? " is-active" : ""}" data-visual-panel="${chartId}">
      <header class="visual-card__header">
        <p class="visual-card__eyebrow">${visual.label}</p>
        <h4>${siteData.charts[visual.chartId].title}</h4>
      </header>
      <div class="chart-wrap">
        <canvas id="${chartId}" role="img" aria-label="${siteData.charts[visual.chartId].title}"></canvas>
      </div>
      <p class="visual-card__caption">${siteData.charts[visual.chartId].caption}</p>
      <p class="visual-card__note">${siteData.charts[visual.chartId].note}</p>
    </section>
  `;
}

function renderTimelineVisual(visual, isActive) {
  return `
    <section class="visual-card${isActive ? " is-active" : ""}" data-visual-panel="${visual.label}">
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

function renderTimelineLanesVisual(visual, isActive) {
  return `
    <section class="visual-card${isActive ? " is-active" : ""}" data-visual-panel="${visual.label}">
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

function renderComparisonVisual(visual, isActive) {
  return `
    <section class="visual-card${isActive ? " is-active" : ""}" data-visual-panel="${visual.label}">
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

function renderFrameworkVisual(visual, isActive) {
  return `
    <section class="visual-card${isActive ? " is-active" : ""}" data-visual-panel="${visual.label}">
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

function renderRouteVisual(visual, isActive) {
  return `
    <section class="visual-card${isActive ? " is-active" : ""}" data-visual-panel="${visual.label}">
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

function renderQuoteVisual(visual, isActive) {
  return `
    <section class="visual-card visual-card--quote${isActive ? " is-active" : ""}" data-visual-panel="${visual.label}">
      <header class="visual-card__header">
        <p class="visual-card__eyebrow">${visual.label}</p>
      </header>
      <blockquote>${visual.quote}</blockquote>
    </section>
  `;
}

function renderVisuals(section) {
  const tabs = section.visuals
    .map(
      (visual, index) => `
        <button
          class="visual-tab${index === 0 ? " is-active" : ""}"
          type="button"
          data-visual-target="${visual.type === "chart" ? `${section.id}-${visual.chartId}` : visual.label}"
        >
          ${visual.label}
        </button>
      `,
    )
    .join("");

  const content = section.visuals
    .map((visual, index) => {
      const isActive = index === 0;

      if (visual.type === "chart") return renderChartVisual(visual, section.id, isActive);
      if (visual.type === "timeline") return renderTimelineVisual(visual, isActive);
      if (visual.type === "timeline-lanes") return renderTimelineLanesVisual(visual, isActive);
      if (visual.type === "comparison") return renderComparisonVisual(visual, isActive);
      if (visual.type === "framework") return renderFrameworkVisual(visual, isActive);
      if (visual.type === "route") return renderRouteVisual(visual, isActive);
      if (visual.type === "quote") return renderQuoteVisual(visual, isActive);

      return "";
    })
    .join("");

  return `
    <div class="visual-switcher">
      <div class="visual-tabs" role="tablist" aria-label="Lua chon visual cho ${section.title}">
        ${tabs}
      </div>
      <div class="visual-panels">
        ${content}
      </div>
    </div>
  `;
}

function renderSourcesPanel(section) {
  return `
    <div class="sources-drawer">
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

function renderSection(section, index) {
  const previous = siteData.sections[index - 1];
  const next = siteData.sections[index + 1];

  return `
    <section id="${section.id}" class="slide-section" data-section="${section.id}">
      <div class="slide-section__header">
        <div>
          <p class="slide-section__eyebrow">${section.eyebrow}</p>
          <h2 class="slide-section__title">${section.title}</h2>
          <p class="slide-section__subtitle">${section.subtitle}</p>
        </div>
        <div class="slide-section__key">
          <p>${annotateGlossary(section.keyMessage)}</p>
        </div>
      </div>

      <div class="slide-section__hero">
        <div class="slide-section__text">
          ${renderKeyPanel(section)}
        </div>
        ${renderMedia(section)}
      </div>

      <div class="action-row" role="tablist" aria-label="Dieu huong panel cho ${section.title}">
        <button class="action-pill is-active" type="button" data-view="key">Xem y chinh</button>
        <button class="action-pill" type="button" data-view="data">Xem so lieu</button>
        <button class="action-pill" type="button" data-view="chart">Xem chart</button>
        <button class="action-pill" type="button" data-view="source">Xem nguon</button>
      </div>

      <div class="panel-stack">
        <section class="content-panel is-active" data-panel="key">
          ${renderKeyPanel(section)}
        </section>
        <section class="content-panel" data-panel="data">
          ${renderDataPanel(section)}
        </section>
        <section class="content-panel" data-panel="chart">
          ${renderVisuals(section)}
        </section>
        <section class="content-panel" data-panel="source">
          ${renderSourcesPanel(section)}
        </section>
      </div>

      <div class="section-pagination">
        <button class="pager" type="button" ${previous ? `data-jump="${previous.id}"` : "disabled"}>Previous</button>
        <button class="pager" type="button" ${next ? `data-jump="${next.id}"` : "disabled"}>Next</button>
      </div>
    </section>
  `;
}

function renderSections() {
  app.innerHTML = `
    <header class="app-intro">
      <p class="app-intro__eyebrow">${siteData.metadata.group} - ${siteData.metadata.className}</p>
      <h1>${siteData.metadata.title}</h1>
      <p>${siteData.metadata.subtitle}</p>
      <p class="app-intro__note">${siteData.metadata.footerNote}</p>
    </header>
    ${siteData.sections.map(renderSection).join("")}
  `;
}

function paletteForChart(type) {
  if (type === "doughnut" || type === "pie") return ["#f2c14e", "#13233d", "#5b7c99", "#e9eef5"];
  return ["#f2c14e"];
}

function createChart(canvasId, config) {
  if (!window.Chart) return;
  const canvas = document.getElementById(canvasId);
  if (!canvas || chartInstances.has(canvasId)) return;

  const colors = paletteForChart(config.type);
  const datasets = config.data.datasets.map((dataset, index) => ({
    ...dataset,
    borderColor: dataset.type === "line" || config.type === "line" || config.type === "mixed" ? colors[index] || "#f2c14e" : "#f2c14e",
    backgroundColor:
      config.type === "doughnut" || config.type === "pie"
        ? colors
        : dataset.type === "bar" || config.type === "bar" || config.type === "mixed"
          ? ["#f2c14e", "#335c81", "#88a0b7", "#e9eef5"]
          : "rgba(242, 193, 78, 0.2)",
    pointBackgroundColor: "#f2c14e",
    pointBorderColor: "#081421",
    borderWidth: 2,
  }));

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#eef3f8",
          font: { family: "Manrope", size: 12 },
        },
      },
      tooltip: {
        backgroundColor: "#081421",
        titleColor: "#fefefe",
        bodyColor: "#d3deea",
      },
    },
    scales:
      config.type === "doughnut" || config.type === "pie"
        ? {}
        : {
            x: {
              ticks: { color: "#c2d3e3" },
              grid: { color: "rgba(194, 211, 227, 0.08)" },
            },
            y: {
              beginAtZero: true,
              ticks: { color: "#c2d3e3" },
              title: {
                display: Boolean(config.options?.yTitle),
                text: config.options?.yTitle,
                color: "#c2d3e3",
              },
              grid: { color: "rgba(194, 211, 227, 0.08)" },
            },
          },
  };

  if (config.options?.dualAxis) {
    options.scales.y1 = {
      beginAtZero: true,
      position: "right",
      ticks: { color: "#f2c14e" },
      title: {
        display: Boolean(config.options?.y1Title),
        text: config.options?.y1Title,
        color: "#f2c14e",
      },
      grid: { drawOnChartArea: false },
    };
  }

  const chart = new window.Chart(canvas, {
    type: config.type === "mixed" ? "bar" : config.type,
    data: { labels: config.data.labels, datasets },
    options,
  });

  chartInstances.set(canvasId, chart);
}

function bootCharts() {
  chartRegistry.forEach((config, canvasId) => createChart(canvasId, config));
}

function setupPanelToggles() {
  document.querySelectorAll(".slide-section").forEach((sectionEl) => {
    const pills = sectionEl.querySelectorAll(".action-pill");
    const panels = sectionEl.querySelectorAll(".content-panel");

    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        pills.forEach((button) => button.classList.toggle("is-active", button === pill));
        panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === pill.dataset.view));
      });
    });
  });
}

function setupVisualTabs() {
  document.querySelectorAll(".visual-switcher").forEach((switcher) => {
    const tabs = switcher.querySelectorAll(".visual-tab");
    const panels = switcher.querySelectorAll(".visual-card");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
        panels.forEach((panel) => {
          panel.classList.toggle("is-active", panel.dataset.visualPanel === tab.dataset.visualTarget);
        });
      });
    });
  });
}

function setupPagination() {
  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById(button.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupNavigation() {
  const allNavLinks = document.querySelectorAll(".nav-link");

  allNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById(link.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (!mobileNav.hidden) {
        mobileNav.hidden = true;
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      allNavLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.target === visible.target.id);
      });
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.2, 0.35, 0.5, 0.7],
    },
  );

  document.querySelectorAll(".slide-section").forEach((section) => observer.observe(section));
}

function setupGlossaryTooltips() {
  document.addEventListener("click", (event) => {
    const chip = event.target.closest(".term-chip");
    document.querySelectorAll(".term-tooltip").forEach((tooltip) => tooltip.remove());

    if (!chip) return;

    const tooltip = document.createElement("div");
    tooltip.className = "term-tooltip";
    tooltip.textContent = siteData.glossary[chip.dataset.term];
    document.body.appendChild(tooltip);

    const rect = chip.getBoundingClientRect();
    tooltip.style.top = `${window.scrollY + rect.bottom + 8}px`;
    tooltip.style.left = `${Math.max(16, Math.min(window.innerWidth - 320, window.scrollX + rect.left))}px`;

    const dismiss = (dismissEvent) => {
      if (dismissEvent.target.closest(".term-chip") === chip) return;
      tooltip.remove();
      document.removeEventListener("click", dismiss);
    };

    setTimeout(() => document.addEventListener("click", dismiss), 0);
  });
}

function setupMediaFallbacks() {
  document.querySelectorAll(".media-card__image").forEach((image) => {
    image.addEventListener("load", () => image.closest(".media-card")?.classList.add("is-loaded"));
    image.addEventListener("error", () => {
      image.closest(".media-card")?.classList.remove("is-loaded");
      image.removeAttribute("src");
    });
  });
}

function setupMobileNav() {
  mobileToggle.addEventListener("click", () => {
    const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
    mobileToggle.setAttribute("aria-expanded", String(!expanded));
    mobileNav.hidden = expanded;
  });
}

function init() {
  setSiteMetadata();
  renderNavigation();
  renderSections();
  bootCharts();
  setupPanelToggles();
  setupVisualTabs();
  setupPagination();
  setupNavigation();
  setupGlossaryTooltips();
  setupMediaFallbacks();
  setupMobileNav();
}

init();
