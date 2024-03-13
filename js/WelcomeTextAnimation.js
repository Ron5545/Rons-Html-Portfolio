const text = document.querySelector(".secoundText");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Designer";
    }, 0);
    setTimeout(() => {
        text.textContent = "FullStack Student";
    }, 6000);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 12000); //1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad, 18000);
