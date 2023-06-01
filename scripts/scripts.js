const pills = document.querySelectorAll('.pill-group span');
const fileInput = document.querySelector('input[type="file"]');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const currentYear = document.querySelector('.current-year');
const nav = document.querySelector('nav');
const navLinks = [...document.querySelectorAll('.sub-links li a')];
const navImages = [...document.querySelectorAll('.nav-container__images div')];
const backgroundImage = document.querySelector('.nav-container__images');
currentImgArray = ['investigation.jpg', 'ideation.jpg', 'presentation.jpg'];
currentImg = 0;

if (pills) {
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });
}

if (fileInput) {
  fileInput.addEventListener('change', () => {
    let contentToAdd = '';
    Array.from(fileInput.files).map((file, index) => {
      contentToAdd +=
        index === Array.from(fileInput.files).length - 1
          ? `${file.name}`
          : `${file.name}, `;
    });
    fileInput.setAttribute('data-files', contentToAdd);
  });
}

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active');
  nav.classList.toggle('active');
});


// setting current year
currentYear.innerText = new Date().getFullYear();

function setBackgroundImg() {
  requestAnimationFrame(() => {
    setTimeout(() => {
      backgroundImage.style.backgroundImage = `url('/assets/${currentImgArray[currentImg]}')`
    }, 500);
  });
}

navLinks.forEach((navLi) => {
  navLi.addEventListener('mouseover', (evt) => {
    if (currentImg !== parseInt(evt.target.dataset.index)) {
      navImages.forEach((navImg, idx) => {
        navImg.classList.toggle(
          'active',
          parseInt(evt.target.dataset.index) === idx
        );
        currentImg = parseInt(evt.target.dataset.index);
      });
      setBackgroundImg();
    }
  });
});
