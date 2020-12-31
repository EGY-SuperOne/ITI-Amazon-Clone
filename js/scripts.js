function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("closebtn").style.display = "block";
  document.getElementsByTagName("body")[0].style = "overflow: hidden;";
  document.getElementsByTagName("body")[0].style =
    "background-color: rgba(0,0,0,0.7);";
  document.getElementsByClassName("MM_links")[0].style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("closebtn").style.display = "none";
  document.getElementsByTagName("body")[0].style = "overflow: visible;";
  document.getElementsByTagName("body")[0].style = "background-color: none;";
  document.getElementsByClassName("MM_links")[0].style.display = "flex";
}
