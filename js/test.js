document.addEventListener("DOMContentLoaded", event => {
  selectNodes = document.getElementsByClassName("selectable", "img");
  selectedItemList = [];

  for (i = 0; i < selectNodes.length; i++) {
    selectNodes[i].onclick = function(e) {
      selectedItemList.push(e.toElement.id);
      if (selectedItemList.length === 2) {
        console.log(selectedItemList);
      }
    };
  }
});

//   https://codepen.io/codesnips/pen/QNYoyv
