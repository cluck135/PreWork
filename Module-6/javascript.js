document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "200px";
});
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0.5";
});
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
});
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.border = "0";
});
document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").style.borderColor ="pink";
    document.getElementById("box").style.borderWidth = "thick";
    document.getElementById("box").style.borderStyle = "solid";
    
})