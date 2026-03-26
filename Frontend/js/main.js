// function for the tabs
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");
tabs.forEach(tab => {
    tab.addEventListener("click",() => {
        const target = tab.getAttribute("data-tab");

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(target).classList.add("active");
    })
})
 // function for thw start screen
const startScreen = document.getElementById("start-screen");
const app = document.getElementById("app");
const enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", () => {
  startScreen.classList.remove("active");
  app.classList.add("active");
});

//function for ativate the tabs
function activate(){
    const btn = document.getElementById("button1");
    btn.classList.add("active");
}


