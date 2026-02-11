/* Usa o nome do body para saber em qual página está, e assim destaca o respectivo item da navbar */
/* Roubado do site de 2025 */
window.onload = function(){
    body = document.querySelector("body")
    stringId = "link-" + body.getAttribute("name")
    document.getElementById(stringId).classList.add("active-page")
}