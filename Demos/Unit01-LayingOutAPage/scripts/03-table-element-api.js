function addCaption() {
  var myTable = document.getElementById("webucator-employees");
  var myCaption = myTable.createCaption();
  myCaption.innerHTML = "New Toronto Group Employees";
  myCaption.style.backgroundColor = "#eee";
  myCaption.style.fontWeight = "bold";
  myCaption.style.borderBottom = "2px solid #006";
}

window.addEventListener("load", addCaption, false);