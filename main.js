// Slider functionality
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Scroll to next card
function scrollToNextCard() {
    slider.scrollBy({
        left: slider.offsetWidth + 15, // 15px for margin between cards
        behavior: 'smooth'
    });
}

// Scroll to previous card
function scrollToPrevCard() {
    slider.scrollBy({
        left: -(slider.offsetWidth + 15), // 15px for margin between cards
        behavior: 'smooth'
    });
}

// Event listeners for navigation
prevBtn.addEventListener('click', scrollToPrevCard);
nextBtn.addEventListener('click', scrollToNextCard);

// Get the search input element
const searchInput = document.getElementById('search');

// Get all the cards
const cards = document.querySelectorAll('.card');

// Add an event listener to the search input for input event
searchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase(); // Get the search text and convert it to lowercase

    // Loop through all the cards
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase(); // Get the card title and convert it to lowercase
        const details = card.querySelector('.card-text').textContent.toLowerCase(); // Get the card details and convert it to lowercase

        // Check if the title or details contain the search text
        if (title.includes(searchText) || details.includes(searchText)) {
            card.style.display = 'block'; // Show the card if it matches the search text
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match the search text
        }
    });
});
