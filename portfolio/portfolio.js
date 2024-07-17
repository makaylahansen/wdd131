document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('theme');
    const imageElement = document.getElementById('footerImage');

    selectElement.addEventListener('change', function () {
        const selectedValue = this.value;
        if (selectedValue == 'Dark') {
            document.body.classList.add('dark');
            imageElement.src = 'logo-white.png';
        } else {
            document.body.classList.remove('dark');
            imageElement.src = 'logo.png';
        }
    });

    // Viewer template function
    function viewerTemplate(pic, alt) {
        return `<div class="overlay"></div>
                <div class="viewer">
                    <button class="close-viewer">X</button>
                    <img src="${pic}" alt="${alt}">
                </div>`;
    }

    // Image mapping for specific images
    const imageMapping = {
        "wordle_img": "proimg/r_wordle.png",
        "meal_prep_img": "proimg/r_meal_prep.png",
        "bash_img": "proimg/r_bash.png"
    };

    // View handler function
    function viewHandler(event) {
        const target = event.target;
        if (target.tagName === 'IMG') {
            const id = target.getAttribute('id');
            const fullImageSrc = imageMapping[id]; // Get the mapped full image source
            if (fullImageSrc) {
                const altText = target.getAttribute('alt');
                const viewerHTML = viewerTemplate(fullImageSrc, altText);
                document.body.insertAdjacentHTML('afterbegin', viewerHTML);
                document.querySelector('.close-viewer').addEventListener('click', closeViewer);
                document.querySelector('.overlay').addEventListener('click', closeViewer);
            }
        }
    }

    // Close viewer function
    function closeViewer() {
        const viewer = document.querySelector('.viewer');
        const overlay = document.querySelector('.overlay');
        if (viewer) {
            viewer.remove();
        }
        if (overlay) {
            overlay.remove();
        }
    }

    // Add event listener to the gallery
    document.querySelector('.project').addEventListener('click', viewHandler);
});
