/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function myFunction() {
  var x = document.getElementById("myDIV");
  x.querySelector(".letter").innerHTML =
    "My dear sister,<br><br>If you’ll let me write to you in French, that will really make my letter easier for me. You please me much more by being moved by sculpture than by painting — all the more so since Theo assures me that you also have a good eye for paintings. Naturally, that couldn’t yet be a settled taste, which will never waver, but intuition, instinct, is already a great deal, and precisely what everyone doesn’t always have. But all the same, I’m very curious to know what effect the Luxembourg will have on you.Is it true, as I think in moments when I’m in a good mood, that what is alive in art, and eternally alive, is first the painter and then the painting?Well, what difference does that make — but if one sees people working it’s still something one doesn’t find under glass in museums.<br>...<br /><br />It’s really fine. Enjoy yourself, I kiss you in thought.<br><br>Ever yours,<br>Vincent";
}

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});


