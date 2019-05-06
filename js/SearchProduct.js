function searchButton() {
  var mainSearch = document.getElementById("mainSearch").value;
  console.log(mainSearch);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //Respond text to the demo
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  //Post to the getProductInformation route
  xhttp.open("POST", "getProductInformation", true);
  //urlencoded
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //Send the data with main search
  //xhttp.send("fname=Henry&lname=Ford");
  xhttp.send("id="+mainSearch);
}
