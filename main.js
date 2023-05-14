const sections = document.querySelectorAll('section');
const options = {
    rootMargin: '-20% 0px',
    threshold: 0.5,
};

const showSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    entry.target.classList.remove('show');
    entry.target.classList.add('hidden');
  } else {
    entry.target.classList.remove('hidden');
    entry.target.classList.add('show');
  }
};

const sectionObserver = new IntersectionObserver(showSection, options);

sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('hidden');
});

// clicking scroll
document.getElementById('group_2').addEventListener('click', function() {
  document.body.classList.toggle('dropped');
});
document.getElementById('Home').addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
document.getElementById('about_me').addEventListener('click', function() {
  document.getElementById('About').scrollIntoView({behavior: 'smooth'});
});
document.getElementById('skills').addEventListener('click', function() {
  document.getElementById('Skill').scrollIntoView({behavior: 'smooth'});
});
document.getElementById('project').addEventListener('click', function() {
  document.getElementById('Pro').scrollIntoView({behavior: 'smooth'});
});
 
// image rotation
var angle = 0;
  setInterval(function() {
    angle = (angle + 1) % 360; // Increment angle by 1 and wrap around at 360
    document.getElementById('gamin').style.transform = 'rotate(' + angle + 'deg)';
  }, 10);

  const img = document.getElementById("joy");

  function rotateImage() {
    img.style.transform = "rotate(" + deg + "deg)";
    deg -= 0.5; // decrease the angle by 1 degree on each frame
    if (deg < -360) {
      deg = 0; // reset the angle once it reaches -360 degrees
    }
    requestAnimationFrame(rotateImage); // request the next animation frame
  }
  
  let deg = 0;
  rotateImage();
