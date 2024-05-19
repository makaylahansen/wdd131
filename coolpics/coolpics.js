// coolpics.js

const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);

// Call handleResize immediately when the page loads
document.addEventListener("DOMContentLoaded", handleResize);

// Viewer template function
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

// View handler function
function viewHandler(event) {
    const target = event.target;
    if (target.tagName === 'IMG') {
        const src = target.getAttribute('src');
        const [base, ext] = src.split('-');
        const fullImageSrc = `${base}-full.${ext.split('.').pop()}`;
        const altText = target.getAttribute('alt');
        const viewerHTML = viewerTemplate(fullImageSrc, altText);
        document.body.insertAdjacentHTML('afterbegin', viewerHTML);
        document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
}

// Close viewer function
function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

// Add event listener to the gallery
document.querySelector('.gallery').addEventListener('click', viewHandler);
