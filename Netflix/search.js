const searchButton = document.getElementById("searchButton");
const closeButton = document.getElementById("closeButton");
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");

// Open the search bar
searchButton.addEventListener("click", () => {
    searchContainer.classList.add("active");
    searchInput.focus(); // Focus on the input field
});

// Close the search bar
closeButton.addEventListener("click", () => {
    searchContainer.classList.remove("active");
    searchInput.value = ""; // Clear the input field
});


document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const closeButton = document.getElementById("closeButton");
    const searchContainer = document.getElementById("searchContainer");
    const cards = document.querySelectorAll(".card");

    // Show the search bar when clicking the search icon
    searchButton.addEventListener("click", () => {
        searchContainer.classList.add("active");
        searchInput.focus();
    });

    // Hide the search bar and reset results when closing
    closeButton.addEventListener("click", () => {
        searchContainer.classList.remove("active");
        searchInput.value = "";
        filterMovies(""); // Reset the movie list
    });

    // Filter movies based on the search input
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        filterMovies(searchTerm);
    });

    // Function to filter movies
    function filterMovies(searchTerm) {
        cards.forEach((card) => {
            const title = card.querySelector("img").alt.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = "block"; // Show matching movies
            } else {
                card.style.display = "none"; // Hide non-matching movies
            }
        });
    }
});

// // search.js

// document.querySelectorAll('.card').forEach(card => {
//     card.addEventListener('click', function () {
//         const videoSrc = this.getAttribute('data-video');
//         const movieTitle = this.querySelector('img').alt;

//         // Create a full-screen video player container
//         const videoContainer = document.createElement('div');
//         videoContainer.style.position = 'fixed';
//         videoContainer.style.top = '0';
//         videoContainer.style.left = '0';
//         videoContainer.style.width = '100vw';
//         videoContainer.style.height = '100vh';
//         videoContainer.style.backgroundColor = '#000';
//         videoContainer.style.display = 'flex';
//         videoContainer.style.flexDirection = 'column';
//         videoContainer.style.alignItems = 'center';
//         videoContainer.style.justifyContent = 'center';
//         videoContainer.style.zIndex = '9999';

//         // Add video player
//         videoContainer.innerHTML = `
//             <h1 style="color: white; margin-bottom: 10px;">${movieTitle}</h1>
//             <video controls autoplay style="max-width: 90%; max-height: 80%;">
//                 <source src="${videoSrc}" type="video/mp4">
//                 Your browser does not support the video tag.
//             </video>
//             <button id="closeButton" style="
//                 margin-top: 10px;
//                 padding: 10px 20px;
//                 background-color: #e50914;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
//             ">Close</button>
//         `;

//         document.body.appendChild(videoContainer);

//         // Add functionality to close the video
//         document.getElementById('closeButton').addEventListener('click', () => {
//             document.body.removeChild(videoContainer);
//         });

//         // Request full-screen mode for the video container
//         if (videoContainer.requestFullscreen) {
//             videoContainer.requestFullscreen();
//         } else if (videoContainer.webkitRequestFullscreen) {
//             videoContainer.webkitRequestFullscreen(); // Safari
//         } else if (videoContainer.msRequestFullscreen) {
//             videoContainer.msRequestFullscreen(); // IE/Edge
//         }
//     });
// });



