function showImgInBox (CurrentElment){
    var div=document.getElementById("image");
    var urlImg=CurrentElment.src;
    var urlAlt=CurrentElment.alt;

    div.style.backgroundImage= "url('"+urlImg+"')";
    div.textContent=urlAlt;

}


function showMsgInBox (){
    var div=document.getElementById("image");
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

