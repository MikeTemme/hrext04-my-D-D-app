$(document).ready(function() {
	  var itemStorage = {
  };
  var deserializedItemStorage = JSON.parse(localStorage.getItem('itemStorage'))
  for(key in deserializedItemStorage){
    $(".inventory-list").append('<div class="display-item" data-storage-key="'+ key +'"> ' + key + ' ' +  itemStorage[key] + '</div>');
  };
  $(".add-item").on("click", function(){
    var itemVal = $(".item-input").val();
    $(".item-input").val("");
    if(!itemStorage.hasOwnProperty(itemVal)){
      itemStorage[itemVal] = 1
     
    let itemHtml = '<div class="display-item" data-storage-key="'+ itemVal +'"> ' + itemVal + ' ' +  itemStorage[itemVal] + '</div>';
    $(".inventory-list").append(itemHtml);
   } else {
      itemStorage[itemVal]++
      $("[data-storage-key='" + itemVal + "']").text(itemVal + ' ' + itemStorage[itemVal])
   }
   localStorage.setItem('itemStorage', JSON.stringify(itemStorage))
  });
});