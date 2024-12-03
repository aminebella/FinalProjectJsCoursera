var div=document.getElementById("image");
function showImgInBox (CurrentElment){
    var urlImg=CurrentElment.src;
    var urlAlt=CurrentElment.alt;

    div.style.backgroundImage= "url('"+urlImg+"')";
    div.textContent=urlAlt;

}


function showMsgInBox (){
    div.style.backgroundImage= "url('')";
    div.textContent="Hover over an image below to display here.";

}

var images=document.getElementsByClassName("preview");
for(let i=0;i<images.length;i++){
    images[i].setAttribute("tabindex",0);
}
var links=document.getElementsByTagName("a");
for(let i=0;i<links.length;i++){
    links[i].setAttribute("tabindex",-1);
}

function loadingPage() {
    const loadingDiv = document.getElementById("loading");
    // Wait 3 seconds before hiding the loading indicator
    setTimeout(() => {
        if (loadingDiv) {
            loadingDiv.classList.add("hidden"); // Add the hidden class
            loadingDiv.style.display = "none"; // Ensure it doesn't block events
        }
    }, 1000); // 3000 milliseconds = 3 seconds
}



