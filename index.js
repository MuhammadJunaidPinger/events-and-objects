function eventWork(e) {
    //console for 
    console.log("e ==> = " + e );
    // console for in which button event fire 
    console.log(e.target.innerHTML);

    // onmouseClick change the background color
    e.target.style.backgroundColor = "red"
 }

 function changeColor(e) {
     e.target.style.backgroundColor;
     if (e.target.style.backgroundColor === "red") {
        e.target.style.backgroundColor = "white"
     } else {
        e.target.style.backgroundColor = "red"
     }
 }

 function click_anyBtn() {
     var btn = document.getElementsByTagName("button")
     for (var i = 0; i < btn.length; i++) {
         btn[i].style.backgroundColor = "Blue"
     }
 }

function change() {
    var btn = document.getElementsByTagName("button")
    for (var i = 0; i <btn.length; i++) {
      if (btn[i].innerHTML === "Click Here") {
          btn[i].style.backgroundColor = "red"
      }
    }
}
