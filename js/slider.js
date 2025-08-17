(() => {
    const slides = document.querySelectorAll('.slide');
    let currentslide = 0;

    function showslide(index){
        slides.forEach((slides,i) => {
            slides.classList.toggle('active',i === index);
        })
    }

    function nextslide(){
        currentslide = (currentslide + 1) % slides.length;
        showslide(currentslide);
    }

    showslide(currentslide);
    setInterval(nextslide,7000);
})();


