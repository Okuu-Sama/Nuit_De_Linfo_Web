
window.onload = function(){
    var redmate = document.getElementById("crewmategif");
    var button = document.getElementById("kill_button");
    button.addEventListener("click", crewmateAnimation);
    function crewmateAnimation(){
        redmate.src="./media/reddead.gif";
        redmate.style.animationPlayState = "paused";
    }
    

}
