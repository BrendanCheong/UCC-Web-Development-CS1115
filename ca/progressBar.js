const progressBarScroll = () => {
    const docElement = document.documentElement;
    const winScroll = document.body.scrollTop || docElement.scrollTop; 
    const height = docElement.scrollHeight - docElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("body__progressContainer--progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
    progressBarScroll();
};