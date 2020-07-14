let slideMenuButton = document.querySelector("#slidemenu");
let operatorMenu = document.querySelector("#operator");
let homePage = document.querySelector("#homepage");
let materialsPage = document.querySelector("#materialspage");
let materialsCard = document.querySelector("#materialscard");
let homeButton = document.querySelector(".backhome");
let root = document.querySelector("#root");

slideMenuButton.addEventListener("click", () => {

    if(operatorMenu.style.display == "none") {
        slideMenuButton.setAttribute("class", "flip180");
        operatorMenu.style.display = "block";
        root.setAttribute("class", "row no-gutters")
    }
    else {
        slideMenuButton.setAttribute("class", "");
        operatorMenu.style.display = "none";
        root.setAttribute("class", "row no-gutters text-center");
    }
})

materialsCard.addEventListener("click", displayMaterials)

homeButton.addEventListener("click", displayHome)




function displayHome() {
    homePage.style.display = "block";
    materialsPage.style.display = "none";
}
function displayMaterials() {
    homePage.style.display = "none";
    materialsPage.style.display = "block";
}