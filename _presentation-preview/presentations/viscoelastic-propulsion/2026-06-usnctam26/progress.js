(function () {
  const sections = [
    ["motivation-slide", "Motivation"],
    ["model-slide", "Model description"],
    ["results-slide", "Results interpretation"],
    ["summary-slide", "Summary"],
  ];

  function activeIndex(slide) {
    return sections.findIndex(([className]) => slide.classList.contains(className));
  }

  function addProgress(slide) {
    if (slide.classList.contains("cover-slide") || slide.querySelector(".section-progress")) {
      return;
    }

    const active = activeIndex(slide);
    if (active < 0) {
      return;
    }

    const progress = document.createElement("div");
    progress.className = "section-progress";

    const row = document.createElement("p");
    sections.forEach(([, label], index) => {
      const item = document.createElement("span");
      item.textContent = label;
      if (index === active) {
        item.className = "active";
      }
      row.appendChild(item);
    });

    progress.appendChild(row);
    slide.appendChild(progress);
  }

  function initProgress() {
    document.querySelectorAll(".reveal .slides section").forEach(addProgress);
  }

  window.initProgress = initProgress;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProgress);
  } else {
    initProgress();
  }
})();
