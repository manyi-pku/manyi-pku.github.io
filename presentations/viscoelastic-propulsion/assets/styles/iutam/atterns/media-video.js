(() => {
  document.querySelectorAll(".media-video video").forEach((video) => {
    video.setAttribute("data-autoplay", "");
    video.muted = true;
    video.setAttribute("muted", "");
    video.loop = true;
    video.setAttribute("loop", "");
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.removeAttribute("controls");

    const setAspectRatio = () => {
      if (video.videoWidth && video.videoHeight) {
        const player = video.closest(".video-js");
        player?.style.setProperty(
          "--mv-video-aspect-ratio",
          `${video.videoWidth} / ${video.videoHeight}`,
        );
      }
    };

    video.addEventListener("loadedmetadata", setAspectRatio, { once: true });
    setAspectRatio();
  });
})();

