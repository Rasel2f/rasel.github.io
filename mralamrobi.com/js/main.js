
// Portfolio Item Filter

const FilterContainer = document.querySelector(".portfolio-filter"),
filterBtns = FilterContainer.children,
totalFilterBtn = filterBtns.length;
portfolioItems = document.querySelectorAll(".portfolio-item"),
/* console.log(portfolioItems); */
totalPortfolioItem = portfolioItems.length;

for(let i=0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener("click", function(){
        FilterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for(let k=0; k < totalPortfolioItem; k++){
            if(filterValue===portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.add("show");
                portfolioItems[k].classList.remove("hide");
            }
            else{
                portfolioItems[k].classList.add("hide");
                portfolioItems[k].classList.remove("show");
            }
            if(filterValue ==="all"){
                portfolioItems[k].classList.add("show");
                portfolioItems[k].classList.remove("hide");
            }
        }
    });
}


// portfolio lightbox
const lightbox = document.querySelector(".lightbox"),
lightboxImg = lightbox.querySelector(".lightbox-img"),
lightboxclose = lightbox.querySelector('lightbox-close'),
lightboxText = lightbox.querySelector(".caption-text"),
lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;

for(let i=0; i<totalPortfolioItem; i++){
    portfolioItems[i].addEventListener("click", function(){
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem(){
    if(itemIndex === totalPortfolioItem-1){
        itemIndex= 0;
    }else{
        itemIndex++;
    }
    changeItem();
}

function prevItem(){
    if(itemIndex === 0){
        itemIndex = totalPortfolioItem-1;
    }else{
        itemIndex--;
    }
    changeItem();
}


function toggleLightbox(){
    lightbox.classList.toggle("open");
}


function changeItem(){
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex+1)  + "of" + totalPortfolioItem;
}

// Close Lightbox

lightbox.addEventListener("click", function(event){
    if(event.target===lightboxclose || event.target === lightbox){
        toggleLightbox();
    }
});


// Aside Navbar

// const nav =  document.querySelector(".nav"),
//         navlist = nav.querySelectorAll("li"),
//            totalNavList = navlist.length;

//            for(let i=0; i<totalNavList; i++){
//                console.log(navlist[i])
//            }


const nav=document.querySelector(".navitem"),
navlist=nav.querySelectorAll("li"),
totalnavlist=navlist.length,
allSection = document.querySelectorAll(".section");
totalSection = allSection.length;
for(let i=0; i<totalnavlist; i++){
    const a=navlist[i].querySelector("a");
    a.addEventListener("click", function(){

        // Remove Back section class

        for(let i=0; i<totalSection; i++){

            allSection[i].classList.remove("back-section");
        }

        for (let j=0; j<totalnavlist; j++){
            if(navlist[j].querySelector("a").classList.contains("active")){
                // add Back section class
                allSection[j].classList.add("back-section");
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");

        showSection(this);
      
    })
}

function showSection(element){
    for(let i=0; i< totalSection; i++){
        allSection[i].classList.remove("active");
    }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

const navToglerBtn = document.querySelector(".nav-toggler");
aside = document.querySelector(".aside");

navToglerBtn.addEventListener("click",() =>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navToglerBtn.classList.toggle("open");
    for(let i=0; i< totalSection; i++){
        allSection[i].classList.toggle("open");
    }

}