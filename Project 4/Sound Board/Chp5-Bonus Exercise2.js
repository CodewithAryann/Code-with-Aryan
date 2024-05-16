// Variable to store the currently playing audio
let currentAudio = null;
// Function to play a sound
function playSound(filename) {
    // Create a new Audio object with the specified filename
    const audio = new Audio(filename);
     // If there's already an audio playing, pause it
    if (currentAudio) {
        currentAudio.pause();
    }
    // Play the new created audio
    audio.play();
    // Update the currentAudio variable to the newly created audio
    currentAudio = audio;
}

// Getting the speak button and text input elements
const speakButton = document.getElementById('speak-button');
const textInput = document.getElementById('text-input');
// Event listener for the speak button
speakButton.addEventListener('click', () => {
    // Getting the text from the input field
    const text = textInput.value;
    // If the text is not empty, speak it; otherwise, show an alert
    if (text.trim() !== '') {
        speak(text);
    } else {
        alert('Please type something to speak.');
    }
});
// Function to speak the given text using the Speech  API
function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

// Function to display the next set of audio files
function showNextAudios() {
    // Increasing the current start index by the number of samples per page
    currentStartIndex += audioPerPage;
    // Update the visibility of buttons
    updateButtonsVisibility();
}
// Function to display the previous set of audio files
function showPreviousAudios() {
    // Decrement the current start index by the number of samples per page
    currentStartIndex -= audioPerPage;
      // Update the visibility of buttons
    updateButtonsVisibility();
}
// Number of audio files to display per page
const samplesPerPage = 9;
// Variable to store the current page
let currentPage = 0;
// Array containing the list of sample filenames
const samples = [
    'ah-ha.mp3', , 'dan.mp3', 'back-of-the-net.mp3', 'bangoutoforder.mp3',
    'jurassic-park.mp3', 'smell-my-cheese.mp3', 'goal.mp3', 'kiss-my-face.mp3', 'hellopartridge.mp3',
    'Big-beacon.mp3', 'imconfused.mp3', 'iateascotchegg.mp3', 'emailofthevening.mp3'
];
// Function to display audio files for the given page
function displaySamples(page) {
    // Calculate the start and end indexes of files to display
    const start = page * samplesPerPage;
    const end = start + samplesPerPage;
      // Get the files to display for the current page
    const samplesToShow = samples.slice(start, end);
    // Get the sample container element
    const sampleContainer = document.getElementById(".soundboard");
      // Clear previous samples and display the new samples
    sampleContainer.innerHTML = samplesToShow.map(sample =>
        `<div class="sample">${sample}</div>`
    ).join("");
}
// Function to scroll samples in the specified direction
function scrollSamples(direction) {
    if (direction === 'left') {
        if (currentPage > 0) {
            // Decrement current page if not already at the first page
            currentPage--;
              // Update visibility of buttons
            document.getElementById("right-arrow").removeAttribute("hidden");
            if (currentPage === 0) {
                document.getElementById("left-arrow").setAttribute("hidden", "true");
            }
            // Display samples for the updated current page
            displaySamples(currentPage);
        }
    } else if (direction === 'right') {
        const totalPages = Math.ceil(samples.length / samplesPerPage);
        if (currentPage < totalPages - 1) {
            // Increment current page if not already at the last page
            currentPage++;
            // Update visibility of navigation buttons
            document.getElementById("left-arrow").removeAttribute("hidden");
            if (currentPage === totalPages - 1) {
                document.getElementById("right-arrow").setAttribute("hidden", "true");
            }
            // Display samples for the updated current page
            displaySamples(currentPage);
        }
    }
}
// Initial display
displaySamples(currentPage);
document.getElementById("left-arrow").setAttribute("hidden", "true");
