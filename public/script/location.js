
// var myRadios = document.getElementsByName('tabs2');
// var setCheck;
// var x = 0;
// for (x = 0; x < myRadios.length; x++) {
//     myRadios[x].onclick = function () {
//         if (setCheck != this) {
//             setCheck = this;
//         } else {
//             this.checked = false;
//             setCheck = null;
//         }
//     };
// }

$(document).ready(function(){
    let container = $(".container");
    
    let searchButton = $(".container .search-button");
    
    let showSearchBar = false;
    
    container.on("click", function(e){
      if (showSearchBar) {
        container.animate({"top":"-71px"}, "fast", function(){
          searchButton.css({
            "color":"black",
            "background-color":"white"
          });
        });
      } else {
        container.animate({"top":"0px"}, "fast", function(){
          searchButton.css({
            "color":"white",
            "background-color":"black"
          });
        });
      }
      showSearchBar = !showSearchBar;
    });
  });