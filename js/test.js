let ss = function() {
    $(".wrapper").selectable({
      selected: function() {
        var selectedItemList = $("#block").empty();
        $(".selectable div").each(function(index) {
          if ($(this).hasClass("ui-selected")) {
            selectedItemList.append((index + 1) + ", ");
          }
        });
      }
    });
  };

//   https://codepen.io/codesnips/pen/QNYoyv