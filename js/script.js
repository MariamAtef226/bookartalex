let clickFlag = false;
window.onload=function(){
  document.getElementById("loading").style.display = "none";


  var xDown = null;
  var yDown = null;

  document.getElementById("products").addEventListener('touchstart', handleTouchStart, false);
  document.getElementById("products").addEventListener('touchmove', handleTouchMove, false);

  window.addEventListener('scroll',function(){
    fadingEffect("#bookmarks");
    fadingEffect("#gelpens");
    fadingEffect("#pencilcups");
    fadingEffect("#stickers");
  });

  smoothScroll(".up","#hide", false);


  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    let v1 = hideHeader("#au");
    let v2 = hideHeader("#bmlink");
    let v3 = hideHeader("#p");
    let v4 = hideHeader("#sticklink");
    let v5 = hideHeader("#pclink");
    let v6 = hideHeader("#gplink");

    if (prevScrollpos > currentScrollPos && !v1 && !v2 && !v3 && !v4 && !v5 && !v6 ) {
        document.querySelector("header").style.top = "0";
    }
    else {
        document.querySelector("header").style.top = "-70px";
        clickFlag = false;
    }
    prevScrollpos = currentScrollPos;
  };

  goleft();
  goright();

};


function hideHeader(click){
  let el = document.querySelector(click);

  el.addEventListener('click',function(){
      clickFlag = true;
    });
  return clickFlag;
}

function smoothScroll(click, dest, flag){
  let el = document.querySelector(click);
  el.addEventListener('click',function(){
      document.querySelector(dest).scrollIntoView({
        behavior: "smooth"});
      if(!flag)
          document.querySelector("header").style.top = "-70px";
    });

}

function fadingEffect(selector){
  var element = document.querySelector(selector);
  var position = element.getBoundingClientRect();

  // checking for partial visibility
  if(position.top < window.innerHeight && position.bottom >= 0) {
    element.style.opacity="0";
    element.style.animation="fade 1.5s 0.1s linear both";
  }
}

function goleft(){
  let boxes = Array.from(document.getElementsByClassName("pbox"));
  let befores = Array.from(document.getElementsByClassName("leftarrow"));
  let inDisplay = boxes.filter((v)=>{
    let d = window.getComputedStyle(v).display;
    if (d == "block")
    return v;
  });
  befores.forEach((v) =>{
    v.addEventListener('click',function(){
      let parent = v.parentElement;
      let prev;
      if (parent == parent.parentElement.firstElementChild){
        prev = parent.parentElement.lastElementChild;
      }
      else{
        prev = parent.previousElementSibling;
      }
      parent.style.display="none";
      parent.style.opacity="0";
      prev.style.display="block";
      parent.style.left="0";
      prev.style.left="0";
      prev.style.animation="fade 1.5s both";
    });
  });
  }

function goright(){
  let boxes = Array.from(document.getElementsByClassName("pbox"));
  let afters = Array.from(document.getElementsByClassName("rightarrow"));
  let inDisplay = boxes.filter((v)=>{
    let d = window.getComputedStyle(v).display;
    if (d == "block")
    return v;
  });
  afters.forEach((v) =>{
    v.addEventListener('click', function(){
      console.log("Right is clicked");
      let parent = v.parentElement;
      let next;
      if (parent == parent.parentElement.lastElementChild){
          next = parent.parentElement.firstElementChild;
        }
        else{
          next = parent.nextElementSibling;
        }
        parent.style.display="none";
        parent.style.opacity="0";
        parent.style.left="0";
        next.style.left="0";
        next.style.display="block";
        next.style.animation="fade 1.5s both";
      });
    });
    }

function getTouches(evt) {
    return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( xDiff > 0 ) {
      let b = document.querySelectorAll(".pbox");
      let inDisplay;
      b.forEach((v)=>{
        let d = window.getComputedStyle(v).display;
        if (d == "block")
        inDisplay = v;
      })

      let next;
      if (inDisplay == inDisplay.parentElement.lastElementChild){
          next = inDisplay.parentElement.firstElementChild;
      }
      else{
          next = inDisplay.nextElementSibling;
      }
      inDisplay.style.display="none";
      inDisplay.style.opacity="0";
      next.style.display="block";
      next.style.opacity="100%";
      next.style.left="650px";
      inDisplay.style.left="0px";
      inDisplay.style.animation="slideRight 0.5s both, fade 1.5s both";
      next.style.animation="slideRight 0.5s both, fade 1.5s both";
    }
    else {
      let b = document.querySelectorAll(".pbox");
      let inDisplay;
      b.forEach((v)=>{
        let d = window.getComputedStyle(v).display;
        if (d == "block")
        inDisplay = v;
      })

      let prev;
      if (inDisplay == inDisplay.parentElement.firstElementChild){
          prev = inDisplay.parentElement.lastElementChild;
      }
      else{
          prev = inDisplay.previousElementSibling;
      }
      inDisplay.style.display="none";
      inDisplay.style.opacity="0";
      prev.style.display="block";


      inDisplay.style.left="0px";
      prev.style.left="-650px";
      inDisplay.style.animation="slideLeft 0.5s both, fade 1.5s both";
      prev.style.animation="slideLeft 0.5s both, fade 1.5s both";
    }

    /* reset values */
    xDown = null;
    yDown = null;
}
