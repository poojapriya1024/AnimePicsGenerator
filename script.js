const buttonEl = document.getElementById("btn");

const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

buttonEl.addEventListener("click",async function(){
    try {
        buttonEl.disabled = true;
        buttonEl.innerText = "Loading...";
        animeNameEl.innerText = "Updating...";
        animeImgEl.src = "loader.svg";
        const response= await fetch("https://api.catboys.com/img")
        const data = await response.json();
        buttonEl.disabled = false;
        buttonEl.innerText="Get Anime Character"
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist;
    } catch (error) {
        console.log(error);
    }
})