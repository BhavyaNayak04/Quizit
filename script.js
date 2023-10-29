    document.addEventListener("DOMContentLoaded", function() {
        const genreCards = document.querySelectorAll(".genre-card");

        genreCards.forEach(function(card) {
            card.addEventListener("click", function() {
                const selectedGenre = card.id;
                alert(`You selected the ${selectedGenre} quiz!`);
            });
        });
    });
   
    const cgridDivs = document.querySelectorAll(".cgrid");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Adjust this threshold as needed
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    cgridDivs.forEach((cgrid) => {
        observer.observe(cgrid);
    });
    

    

    

    
    
    
