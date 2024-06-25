window.onload = function () {
function buttonClick(){
    var Text = document.getElementById("input").value;
    Text = Text.replace("。",".");
    Text = Text.replace("，",",");
    var blob=new Blob([Text],{type:"text/plain"});
    const link=document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="document.tex";
    link.click();
    };
document.getElementById("button").addEventListener("click",buttonClick);
};