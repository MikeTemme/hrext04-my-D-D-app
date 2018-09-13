$(document).ready(function() {

  // $(".add-text-btn").on("click", function(){
  //   // store values
  //   let inputKey = $(".user-input-title").val();
  //   let inputValue = $(".user-input-body").val();
  //   // clear values
  //   $(".user-input-title").val("");
  //   $(".user-input-body").val("");
  //   console.log(inputKey, inputValue);
  //   localStorage.setItem(inputKey, inputValue);
  //   // data-
  //   let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';
  //   $(".display").html(itemHtml);
  //   //console.log(localStorage);
  //   // how can we delegate this event to the outer html node?
  //   // https://learn.jquery.com/events/event-delegation/
  //   $(".display-item").on("click", function(e){
  //     // plop the key:value back into the input boxes
  //     // get the values from the the divs?
  //     console.log("key=> ", e.target.dataset.storageKey); // user-input-title
  //     localStorage.getItem(e.target.dataset.storageKey); // user-input-body
  //     // set those values in the form fields
  //     $(".user-input-title").val(e.target.dataset.storageKey);
  //     $(".user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));
  //   });
  // });


// $('.initiative-value').text(localStorage[length - 1])

// console.log(typeof localStorage.initiative)
// console.log(localStorage.initiative[localStorage.initiative.length-1])

$('.initiative-value').text(localStorage.initiative);
$("#change-initiative").on("click", function(){
  let initiativeValue = $("#initiative-box").val();
  $('.initiative-value').text(initiativeValue);
  localStorage.initiative = initiativeValue
  $('#initiative-box').val('')
});

   // TODO add back in later
   // $(".user-input").on("keyup", function(){
   //   let inputValue = $(".user-input").val();
   //   localStorage.setItem("testStorage", inputValue);
   //   $(".display").text(localStorage.getItem("testStorage"));
   // });

   // $(".del-text-btn").on("click", function() {
   //   alert('item deleted? check the console'); // maybe change to a window.confirm
   //   localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
   //   $(".user-input-title").val("");
   //   $(".user-input-body").val("");
   //   // clearing display? what if I have multiple items?
   //   // after item is removed from local storage, redisplay items from local storage
   //   // refresh from storage?
   // });

   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys
});

// let current = 0;
// function damageHpPool(damageValue) {
//   current -= damageValue;
//   updateHPView()
// }
// function healHpPool(healValue) {
//   current += healValue;
//   updateHPView()
// }
// function updateHPView() {
//   $('#hpdisplay').setHTML(`${current} / ${max}`)
// }









