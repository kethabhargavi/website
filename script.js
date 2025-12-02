// Smooth scroll for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Lightbox for Images
function openImageLightbox(element) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    const video = document.getElementById("lightbox-video");

    lightbox.style.display = "flex";

    img.src = element.src;
    img.style.display = "block";
    video.style.display = "none";
}

// Lightbox popup for Videos
function openVideoLightbox(videoElement) {
    const src = videoElement.querySelector("source").src;
    const popup = window.open("", "_blank");
    popup.document.write(`
        <video src="${src}" controls autoplay style="width:100%; height:100vh;"></video>
    `);
}

// Close Image Lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
