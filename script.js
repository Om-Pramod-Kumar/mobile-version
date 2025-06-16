const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
let open = false;

hamburger.addEventListener('click', () => {
  open = !open;
  navLinks.classList.toggle('show');
  hamburger.innerHTML = open ? '✕' : `
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>`;
});

const images = [
  'https://lnct.ac.in/wp-content/uploads/2024/10/LNCT-Garba-Day-1-31.jpeg',
  'https://lnct.ac.in/wp-content/uploads/2024/09/Induction-Programme-for-our-B-Tech-I-Year-students.jpg',
  'https://lnct.ac.in/wp-content/uploads/2024/10/LNCTU-28.jpeg',
  'https://lnct.ac.in/wp-content/uploads/2024/10/LNCTU-8.jpeg',
  'https://lnct.ac.in/wp-content/uploads/2024/10/LNCT-Garba-Day-2-9.jpeg',
  'https://lnct.ac.in/wp-content/uploads/2023/05/LifeatLNCT-14.jpg',
  'https://lnct.ac.in/wp-content/uploads/2023/05/LifeatLNCT-10.jpg',
  'https://lnct.ac.in/wp-content/uploads/2023/05/LifeatLNCT-16.jpg',
  'https://lnct.ac.in/wp-content/uploads/2024/10/LNCT-Garba-Day-3-50.jpeg'
];

let currentIndex = 0;
const slider = document.getElementById('gallery-slider');

images.forEach((src) => {
  const img = document.createElement('img');
  img.src = src;
  slider.appendChild(img);
});

const imgElements = slider.querySelectorAll('img');

function updateClasses() {
  imgElements.forEach((img, i) => {
    img.className = '';
    if (i === currentIndex) {
      img.classList.add('center');
    } else if (i === (currentIndex - 1 + images.length) % images.length) {
      img.classList.add('left');
    } else if (i === (currentIndex + 1) % images.length) {
      img.classList.add('right');
    } else if (i === (currentIndex - 2 + images.length) % images.length) {
      img.classList.add('hidden-left');
    } else if (i === (currentIndex + 2) % images.length) {
      img.classList.add('hidden-right');
    } else {
      img.classList.add('hidden-right');
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateClasses();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateClasses();
}

document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);

let startX = 0;
slider.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
slider.addEventListener('touchend', (e) => {
  const diff = e.changedTouches[0].clientX - startX;
  if (diff > 50) prevImage();
  else if (diff < -50) nextImage();
});

setInterval(nextImage, 3000);
updateClasses();


///-------flip  code-------------////\

const columns = document.querySelectorAll(".campus-column");

    columns.forEach(column => {
      column.addEventListener("click", () => {
        column.classList.add("flipped");
      });

      column.addEventListener("mouseleave", () => {
        column.classList.remove("flipped");
      });
    });

//// why lnct k slider images--------////
let index = 0;
const track = document.querySelector('.gallery-track-new');
const slides = document.querySelectorAll('.gallery-slide-new');
const totalGroups = Math.ceil(slides.length / 3);

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.nav.left').addEventListener('click', () => {
  index = (index - 1 + totalGroups) % totalGroups;
  updateSlider();
});

document.querySelector('.nav.right').addEventListener('click', () => {
  index = (index + 1) % totalGroups;
  updateSlider();
});

setInterval(() => {
  index = (index + 1) % totalGroups;
  updateSlider();
}, 4000);