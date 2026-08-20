(function () {
  const sections = [
    ["motivation-slide", "MOTIVATION", "pku", "motivation"],
    ["model-slide", "MODEL", "pku", "model"],
    ["st-results-slide", "SHEAR THINNING", "blue", "shear-thinning"],
    ["ve-results-slide", "VISCOELASTICITY", "orange", "viscoelasticity"],
    ["summary-slide", "SUMMARY", "pku", "summary"],
  ];

  function activeIndex(slide) {
    const section = slide.dataset.section;
    if (section) {
      return sections.findIndex(([, , , sectionName]) => sectionName === section);
    }
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
    sections.forEach(([, label, tone], index) => {
      const item = document.createElement("span");
      item.textContent = label;
      if (index === active) {
        item.className = `active active-${tone}`;
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

