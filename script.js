// Update the text content
const slider = document.querySelector('.slider');

function updateText() {
  const texts = ['FLAT 25% OFF ON YOUR OREDER USE CODE OUTCAST', 'FREE SHIPPING FOR OREDRS ABOVE 999/-', 'SHOP OUR LUNAR COLLECTION']; // Add as many texts as needed
  let currentIndex = 0;

  function update() {
    slider.querySelector('.text').textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }

  setInterval(update, 6000); // Adjust the interval duration (in milliseconds) as needed
}

updateText();


