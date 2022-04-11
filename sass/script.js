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
        btnText.innerHTML = "Chci vědět míň 😒"; 
      moreText.style.display = "inline";
    }
  }