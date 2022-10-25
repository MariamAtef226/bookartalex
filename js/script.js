let slideIndex = 1;

let pageMapFolder = new Map([
    ["bookmarks","bm"],
    ["stickers","stickers"],
    ["pens","pens"]
]);

let pageMapSSCount = new Map([
    ["index",8],
    ["bookmarks",14]
]);

let pageMapSSFolder = new Map([
    ["index","samples"],
    ["bookmarks","bm-real"]
]);

let sliderNum = new Map([
    ["bookmarks",17],
    ["pens",8]
]);

function pageName(){
    let page = window.location.pathname.split(".");
    page = page[page.length-2].split("/");
    page = page[page.length-1];
    return page;
}

window.onload = () => {
  let page = pageName();
  //Slideshow Building - home page
  let ssContainer = document.querySelector(".slideshow-container");
  slideShowCreator(ssContainer,pageMapSSCount.get(page),pageMapSSFolder.get(page));
  productsSlider(pageMapFolder.get(page),sliderNum.get(page));

};

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {

  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

}

function productsSlider(name,num){
  if(num!==undefined){
    let div = document.querySelector(".prod-slider");
        for (let i = 1; i <= num; i++) {
          let img = document.createElement("img");
          img.src = "img/"+name+"/" + i + ".jpg";
          img.style.height="200px";
          img.style.width = "200px";
          img.style.margin="10px";
          img.alt = "Available Product Image";
          img.classList.add("slide");
          div.prepend(img);
    }
  }
}

function slideShowCreator(obj, num, folder){
      if (folder !== undefined && num!== undefined){
        for (let i = 1; i <= num; i++) {
          let div1 = document.createElement("div");
          div1.classList.add("mySlides", "fade");
          let img = document.createElement("img");
          img.src = "img/"+folder+"/" + i + ".jpg";
          img.style.width = "100%";
          img.alt = "Realife Products";
          div1.append(img);
          obj.prepend(div1);
        }
    
        showSlides(slideIndex);
    
        let slideShow = setInterval(() => {
          plusSlides(1);
        }, 3000);
    
        obj.onmouseover = () => {
          clearInterval(slideShow);
        };
    
        obj.onmouseout = () => {
          slideShow = setInterval(() => {
            plusSlides(1);
          }, 3000);
        };
      
    }
  }
