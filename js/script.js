const video = document.querySelector('.video-bg__showreel');
const isMobile = window.innerWidth < 992;

if (isMobile) {
  video.src = './video/showreel_720_min.mp4';
} else {
  video.src = './video/showreel_1920_min.mp4';
}
video.load();