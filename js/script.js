function redirect(id,url){
    let ID = document.getElementById(id);
    ID.addEventListener("click", function(){
        document.location = url;
    });
}
document.addEventListener("DOMContentLoaded", function(){
    redirect("instagram","https://instagram.com/__sagarbiswas");
    redirect("github","https://github.com/sagar040");
});