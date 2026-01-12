// video bg
const video = document.querySelector(".video-bg__showreel");
const isMobile = window.innerWidth < 992;

if (isMobile) {
  video.src = "./video/showreel_720_min.mp4";
} else {
  video.src = "./video/showreel_1920_min.mp4";
}
video.load();
// video bg end

// data
const posters = [
  {
    id: 1,
    title: "Juliet & Romeo",
    year: 2025,
    poster: "./img/posters/1_juliet_and_romeo.jpg",
    resourceUrl: "https://www.imdb.com/title/tt26597666/",
    stack: "Clean-up works",
  },
  {
    id: 2,
    title: "The Bayou",
    year: 2025,
    poster: "./img/posters/2_the_bayou.jpg",
    resourceUrl: "https://www.imdb.com/title/tt29343289/",
    stack: "Clean-up works",
  },
  {
    id: 3,
    title: "God's Soldier",
    year: 2025,
    poster: "./img/posters/3_gods_soldier.webp",
    resourceUrl: "https://www.imdb.com/title/tt5766694/",
    stack: "Clean-up, Compositing works",
  },
  {
    id: 4,
    title: "Arthur's Whisky",
    year: 2024,
    poster: "./img/posters/4_arthurs_whisky.webp",
    resourceUrl: "https://www.imdb.com/title/tt27158093/",
    stack: "Compositing works",
  },
  {
    id: 5,
    title: "Take Cover",
    year: 2024,
    poster: "./img/posters/5_take_cover.webp",
    resourceUrl: "https://www.imdb.com/title/tt28129054/",
    stack: "Clean-up, Compositing works",
  },
  {
    id: 6,
    title: "Sardaar Ji 3",
    year: 2025,
    poster: "./img/posters/6_sardaar_ji_3.jpg",
    resourceUrl: "https://www.imdb.com/title/tt33022037/",
    stack: "Tracking, Setups, BG renders",
  },
  {
    id: 7,
    title: "Guna Guna Istri Muda",
    year: 2024,
    poster: "./img/posters/7_guna_guna_istri_muda.webp",
    resourceUrl: "https://www.imdb.com/title/tt28363725/",
    stack: "Clean-up, Compositing works",
  },
  {
    id: 8,
    title: "Modi: Three Days on the Wing of Madness",
    year: 2024,
    poster: "./img/posters/8_modi.jpg",
    resourceUrl: "https://www.imdb.com/title/tt5519506/",
    stack: "Clean-up, Compositing works",
  },
  {
    id: 9,
    title: "The Cut",
    year: 2024,
    poster: "./img/posters/9_the_cut.jpg",
    resourceUrl: "https://www.imdb.com/title/tt26697087/",
    stack: "Rotoscoping, Compositing works",
  },
  {
    id: 10,
    title: "The Ark",
    year: 2023,
    poster: "./img/posters/10_the_ark.jpg",
    resourceUrl: "https://www.imdb.com/title/tt17371078/",
    stack: "Keying, Compositing works",
  },
  {
    id: 11,
    title: "Jingle Bell Heist",
    year: 2024,
    poster: "./img/posters/11_jingle_bell_heist.jpg",
    resourceUrl: "https://www.imdb.com/title/tt24852126/",
    stack: "Clean-up, Compositing works",
  },
  {
    id: 12,
    title: "Lluvia",
    year: 2023,
    poster: "./img/posters/12_lluvia.webp",
    resourceUrl: "https://www.imdb.com/title/tt10345346/",
    stack: "Compositing works",
  },
  {
    id: 13,
    title: "The Wasp",
    year: 2024,
    poster: "./img/posters/13_the_wasp.jpg",
    resourceUrl: "https://www.imdb.com/title/tt21958136/",
    stack: "Clean-up, Compositing works",
  },
  {
    id: 14,
    title: "Shakuntala Devi",
    year: 2020,
    poster: "./img/posters/14_devi.jpg",
    resourceUrl: "https://www.imdb.com/title/tt10964468/",
    stack: "Clean-up, Compositing works, Texturing",
  },
  {
    id: 15,
    title: "Fallen",
    year: 2024,
    poster: "./img/posters/15_fallen.jpg",
    resourceUrl: "https://www.imdb.com/title/tt22776032/",
    stack: "Clean-up, Compositing works, Matte painting",
  },
  {
    id: 16,
    title: "Mond",
    year: 2024,
    poster: "./img/posters/16_mond.webp",
    resourceUrl: "https://www.imdb.com/title/tt31746175/",
    stack: "Clean-up, Compositing works, Matte painting",
  },
  {
    id: 17,
    title: "Giant",
    year: 2025,
    poster: "./img/posters/17_giant.jpg",
    resourceUrl: "https://www.imdb.com/title/tt26452616/",
    stack: "Clean-up, Tracking, Compositing works",
  },
  {
    id: 18,
    title: "My Driver & I",
    year: 2024,
    poster: "./img/posters/18_my_driver.jpg",
    resourceUrl: "https://www.imdb.com/title/tt5328818/",
    stack: "Clean-up, Compositing works",
  },
  {
    id: 19,
    title: "Palestine 36",
    year: 2025,
    poster: "./img/posters/19_palestine_36.webp",
    resourceUrl: "https://www.imdb.com/title/tt29271622/",
    stack: "Clean-up, Compositing works",
  },
  {
    id: 20,
    title: "The Pearl Comb",
    year: 2025,
    poster: "./img/posters/20_the_pearl_comb.jpg",
    resourceUrl: "https://www.imdb.com/title/tt33019528/",
    stack: "Clean-up, Compositing works",
  },
];

// data end

// slider
const sliderWrap = document.querySelector(".slider__wrap");
const sliderCont = document.querySelector(".slider__cont");
const nextBtn = document.querySelector(".slider__btn-next");
const prevBtn = document.querySelector(".slider__btn-prev");
let sliderStep = sliderWrap.offsetWidth;
let sliderPosition = 0;

posters.forEach((element) => {
  sliderCont.insertAdjacentHTML(
    "beforeend",
    `
    <div class="slider__item">
                  <a
                    href="${element.resourceUrl}"
                    target="_blank"
                    class="slider__link"
                  >
                    <img src="${element.poster}" alt="" />
                    <div class="slider__descr pt-2 text-center">
                      <h5>${element.title}</h5>
                      <p>${element.year}</p>
                      <p>${element.stack}</p>
                    </div>
                  </a>
                </div>
    `
  );
});

function getMaxPosition() {
  const cards = sliderCont.children;
  const totalCards = cards.length;
  const cardWidth = cards[0].offsetWidth;

  const gap = parseFloat(getComputedStyle(sliderCont).gap) || 0;

  const totalWidth = cardWidth * totalCards + gap * (totalCards - 1);

  return totalWidth - sliderWrap.offsetWidth;
}

nextBtn.addEventListener("click", () => {
  const maxPosition = getMaxPosition();

  sliderPosition += sliderStep;
  if (sliderPosition >= maxPosition) {
    sliderPosition = 0;
  }
  sliderCont.style.transform = `translateX(-${sliderPosition}px)`;
});

prevBtn.addEventListener("click", () => {
  if (sliderPosition == 0) {
    return;
  }

  sliderPosition -= sliderStep;
  sliderCont.style.transform = `translateX(-${sliderPosition}px)`;
});

// slider end
