function myFunction() {
  document.getElementById("top-nav").classList.toggle("responsive");
}

var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('footer');
el.innerHTML = '<p>&copy;' + year + ' HelloJacq. All Rights Reserved. </p>';