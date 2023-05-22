var number= document.querySelectorAll(".drum").length;
for (var i = 0; i<number; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var button = this.innerHTML;
    Sound(button);
    Animation(button);
  });

}

document.addEventListener("keypress", function(event) {
  Sound(event.key);
  Animation(event.key);
});


function Sound(key) {
  switch (key) {
    case "w":
      var t1 = new Audio("sounds/tom-1.mp3");
      t1.play();
      break;

    case "a":
      var t2 = new Audio("sounds/tom-2.mp3");
      t2.play();
      break;

    case "s":
      var t3 = new Audio('sounds/tom-3.mp3');
      t3.play();
      break;

    case "d":
      var t4 = new Audio('sounds/tom-4.mp3');
      t4.play();
      break;

    case "j":
      var t5 = new Audio('sounds/snare.mp3');
      t5.play();
      break;

    case "k":
      var t6= new Audio('sounds/crash.mp3');
      t6.play();
      break;

    case "l":
      var t7= new Audio('sounds/kick-bass.mp3');
      t7.play();
      break;


    default: console.log(key);
  }
}

function Animation(currentKey) {
  var active= document.querySelector("." + currentKey);
  active.classList.add("pressed");
  setTimeout(function() {
    active.classList.remove("pressed");
  }, 100);
}
