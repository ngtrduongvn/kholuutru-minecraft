// Chèn video nền vào body
document.addEventListener("DOMContentLoaded", function() {
    let video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("muted", true);
    video.setAttribute("loop", true);
    video.setAttribute("id", "bg-video");

    let source = document.createElement("source");
    source.setAttribute("src", "video/nature.mp4");
    source.setAttribute("type", "video/mp4");

    video.appendChild(source);
    document.body.prepend(video); // thêm video vào đầu body
});
