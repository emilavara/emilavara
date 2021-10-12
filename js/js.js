function showPortfolio() {
    document.getElementById("left-container").style.animation = "leftContainerMove 1s";
    document.getElementById("left-container").style.animationFillMode = "forwards";
    
    document.getElementById("right-container").style.display = "block";
    document.getElementById("right-container").style.animation = "rightContainerMove 1s";
    document.getElementById("right-container").style.animationDelay = "0.5s";
    document.getElementById("right-container").style.animationFillMode = "forwards";
    
    document.getElementById("arrow").style.animation = "turnArrow 0.3s";
    document.getElementById("arrow").style.animationFillMode = "forwards";
    
    document.getElementById("tree-link").style.animation = "linkTreeMove 2s";
    document.getElementById("tree-link").style.animationDelay = "1s";
    document.getElementById("tree-link").style.animationFillMode = "forwards";
    document.getElementById("tree-link").style.display = "block";
}