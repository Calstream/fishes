var rotated = false;

let rotation = 0; //degrees
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let deg = 0;

document.querySelector("#fish").onclick = function() {
    var div = document.querySelector("#fish");
        deg = getRandomInt(-180, 180);
        console.log("deg: ", deg);

    div.style.webkitTransform = 'rotate('+deg+'deg)';
    div.style.mozTransform    = 'rotate('+deg+'deg)';
    div.style.msTransform     = 'rotate('+deg+'deg)';
    div.style.oTransform      = 'rotate('+deg+'deg)';
    div.style.transform       = 'rotate('+deg+'deg)';
}

document.querySelector("#b").onclick = function() {
  var elem = document.getElementById("fish");
  var pos = 0;
  var id = setInterval(frame, 100);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;

      let top_m = 15 * Math.cos(deg * 0.0174533);
      let left_m = 15 * Math.sin(deg * 0.0174533);
      console.log("T: ", top_m);
      console.log("L: ", left_m);
      elem.style.top = elem.offsetTop + top_m + 'px';
      elem.style.left = elem.offsetLeft - left_m + 'px';
    }
  }
}

function myMove() {

}
