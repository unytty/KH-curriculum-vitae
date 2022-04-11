function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Chci vědět víc"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
        btnText.innerHTML = "Stačí míň 😒"; 
      moreText.style.display = "inline";
      window.location='#pruvodni-dopis';
    }
    if (dots.style.display === "inline") { 
      window.location='#work-experience';
    }

  }
  