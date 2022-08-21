window.onload=function(){


  //The shuffle section of samples

  function getActiveInShuffle(){
    var current = Array.from(document.getElementsByClassName("active"));
    current = current.filter(function(el){
      if (el.parentElement == allShuffleList[0]){
        return el;
      }
    });
    return current;
  } //get the active category

  function displayShuffle(str){
      let boxes = Array.from(document.getElementsByClassName("shufimg")); //all boxes
      if (Boolean(str) == false){
        boxes.forEach(function(el){
          let parent = el.parentElement;
          parent.style.display="block"; //display them all
        });
      }
      else{ //display only those of that class
        boxes.forEach(function(el){
          let parent = el.parentElement;
          if (parent.className.indexOf(str)!=-1){
            parent.style.display="block";
          }
          else{
            parent.style.display="none";
          }
        });
      }
  } //display the images corresponding to the active category

  let allShuffleList = document.getElementsByClassName("shuffle");
  let shuffleItems = Array.from(allShuffleList[0].children);
  shuffleItems.forEach(function(element){
    element.addEventListener('click',function(){
    //get the currently active element
    let current = getActiveInShuffle();
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    //switch between objects to be displayed
    let active = getActiveInShuffle();
    let c = shuffleMap.get(active[0].id);
    displayShuffle(c);
  });


});

  const shuffleMap = new Map(
    [
      ["bmshuffle","bm"],
      ["pcshuffle","pc"],
      ["penshuffle","pen"],
      ["stickshuffle","stick"],
      ["all","all"]
    ]
  );



};
