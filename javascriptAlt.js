// Knappen:
let mybutton = document.getElementById("myBtn");

//  Den viser knappen, når brugeren scroller 20px fra top af dokumentet
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Når brugeren klikker på knappen, scroller den til toppen af siden
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });
  
  document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
  });