var one = document.getElementById("bugg");
var two = document.getElementById("open");
var three = document.getElementById("remove");

one.onclick = function(){
    two.style.display = "block";
    one.style.display = "none";
    three.style.display = "block";
}

three.onclick = function(){
    one.style.display = "block";
    two.style.display = "none";
    three.style.display = "none";
}