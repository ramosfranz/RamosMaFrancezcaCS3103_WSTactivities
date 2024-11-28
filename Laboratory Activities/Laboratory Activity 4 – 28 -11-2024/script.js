document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".page");
    const containers = document.querySelectorAll(".content-container");
    const transition = document.getElementById("transition");
    const audio = document.getElementById('background-audio');
    audio.volume = 0.3; 

    const showContainer = (id) => {
        containers.forEach((container) => {
            if (container.id === id) {
                container.style.display = "block";  
            } else {
                container.style.display = "none"; 
            }
        });
    };

    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            const targetId = `${item.id}-container`;
            showContainer(targetId);
        });
    });

    transition.addEventListener("click", () => {
        containers.forEach((container) => {
            container.style.display = "none";  
        });
    });
});
