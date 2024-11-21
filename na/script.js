// Gallery Data
const images = [
    { src: 'OIP.(1)jpeg', hdSrc: 'OIP (1).jpeg', caption: 'Beautiful View 1' },
    { src: 'OIP (2).jpeg', hdSrc: 'OIP (2).jpeg', caption: 'A girl in a black dress looks too hot in the picture and the shadow of her body on the wall makes this pic more better. 2' },
    { src: 'OIP (3).jpeg', hdSrc: 'OIP (3).jpeg', caption: 'Aww, love seeing you two standing strong together! Such a cute couple vibe in this snap!' },
    { src: 'OIP (4).jpeg', hdSrc: 'OIP (4).jpeg', caption: 'What a fun twist! It\'s like a picture within a picture. Very creative' },
    { src: 'OIP (5).jpeg', hdSrc: 'OIP (5).jpeg', caption: 'Those white lines in the air look like a magical dance of light!' },
    { src: 'OIP (6).jpeg', hdSrc: 'OIP (6).jpeg', caption: 'Thats a picturesque scene! Capturing moments in nature with a camera and tripod, how peaceful and creative!' },
    { src: 'OIP (7).jpeg', hdSrc: 'OIP (7).jpeg', caption: 'What a beautiful moment in the sunlit field! Enjoying nature\'s embrace, it looks so peaceful and serene!' },
    { src: 'OIP(8).jpeg', hdSrc: 'OIP(8).jpeg', caption: 'What a peaceful scene by the blue stream and wooden fence! Nature\'s beauty always brings a sense of calm and tranquility' },
    { src: 'OIP(9).jpeg', hdSrc: 'OIP(9).jpeg', caption: 'Wow that reflection is so cool! It\'s like a mirror to nature. Love the peaceful vibe it gives off.' },
    { src: 'OIP 13.jpeg', hdSrc: 'OIP 13.jpeg',caption: 'That book looks like a gateway to another world! Ready to dive into an adventure' },
    { src: 'OIP(11).jpeg', hdSrc: 'OIP(11).jpeg', caption: 'The river winding through the forest looks so serene and peaceful. Nature\'s beauty never fails to amaze!' },
    { src: 'OIP(12).webp', hdSrc: 'OIP(12).webp', caption: 'Books and glasses, a classic combo! Looks like a recipe for a cozy reading night.' },
];
// Select gallery and modal elements
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
modal.style.display="none";

// Load images dynamically
images.forEach((imgData) => {
  const img = document.createElement('img');
  img.src = imgData.src;
  img.alt = imgData.caption;
  img.dataset.caption = imgData.caption;
  img.dataset.details = imgData.details;  // Store additional details in dataset
  gallery.appendChild(img);
});

// Event delegation for displaying HD image and caption with details
gallery.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'IMG') {
      modalImage.src = target.src;  // Assuming src contains HD image path
      modalCaption.innerHTML = `<strong>${target.dataset.caption}</strong><br>${target.dataset.details}`;
      modal.style.display="block";
    }
  });
  
  // Hide modal when clicked
  modal.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });