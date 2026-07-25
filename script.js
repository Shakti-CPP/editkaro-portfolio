


const button = document.querySelectorAll(".filter-buttons button");


const card = document.querySelectorAll(".cards .video-card");

const popupVideo = document.getElementById("popup-video");


button.forEach(button=>{
  button.addEventListener('click',()=>{
    const category = button.dataset.filter;
    console.log(category);

    card.forEach(card => {

            if(category === "all"){
                card.style.display = "block";
            }

            else if(card.classList.contains(category)){
                card.style.display = "block";
            }

            else{
                card.style.display = "none";
            }
    
  })
})})

card.forEach(card => {
    card.addEventListener("click", () => {
        popupVideo.src = card.dataset.video;
        popup.style.display = "flex";
        popupVideo.play();
    });
});

const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    popupVideo.pause();
    popupVideo.currentTime = 0;
});
