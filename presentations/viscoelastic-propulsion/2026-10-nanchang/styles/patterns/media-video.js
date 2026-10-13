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
// V 键：播放或暂停当前幻灯片中的视频
document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() !== "v") return;

  const video = document.querySelector(".reveal section.present video");
  if (!video) return;

  event.preventDefault();
  if (video.paused) video.play();
  else video.pause();
});
