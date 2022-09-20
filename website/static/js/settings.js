const tanBtn = document.querySelectorAll(".tab");
const tab = document.querySelectorAll(".tabShow");

function tabs(i){
    tab.forEach(function(node){
        node.style.display = "none";
    });
    tab[i].style.display = "block";
}
tabs(0);

$(".tab").click(function(){
    $(this).addClass("active").siblings().removeClass("active");})