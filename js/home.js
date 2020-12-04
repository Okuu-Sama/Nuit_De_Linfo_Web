window.onload = function(){
    var pres = document.getElementById("presentation");
    var imgsurf = document.getElementById("imgSurfer");
    
    document.addEventListener('mousemove', move);
    
    function move(e)
    {
        posX = e.clientX / 100;
        posX2= e.clientX / 100;
        posY = e.clientY / 100;
        posY2 = e.clientY / 100;
        pres.style.transform = "translate(-" + posX + "px,-" + posY + "px)";
        imgsurf.style.transform = "translate(" + posX2 + "px," +posY2 + "px)";
    }
}
