$(document).ready(function() {
  //Initiative button
  $(".initiative-value").text(localStorage.initiative)
  $(".change-initiative").on("click", function(){
    let inputKey = 'initiative'
    let inputValue = $(".set-intiative").val();
    $(".set-intiative").val("");

    localStorage.setItem(inputKey, inputValue)
    

  });

  //Armor Class Button
  $(".update-armor").on("click", function(){
    let inputKey = 'armor-class'
    let inputValue = $(".update-armor-class").val();
    $(".update-armor-class").val("");
    console.log(inputValue);

    localStorage.setItem(inputKey, inputValue)

    $(".armor-class-value").text(inputValue)

  });
  var health = 20
  var maxHealth = 20
  
  //Hit Points Button Damage
  $("#damage").on("click", function(){
    var inputValue
    if($(".damage-heal-input").val().length === 0 || Number.isNaN(parseInt($(".damage-heal-input").val()))){
       inputValue = 0
    }else {
       inputValue = $(".damage-heal-input").val();
    }
    let inputKey = 'damage-done'

    $(".damage-heal-input").val("");
    console.log(inputValue);
    
    localStorage.setItem(inputKey, inputValue)
    health = Math.max(0, health - parseInt(inputValue))
    $(".current-hit-points-value").text(health)

  });

  //Hit Points Button Heal
  $("#heal").on("click", function(){
    var inputValue
    if($(".damage-heal-input").val().length === 0){
       inputValue = 0
    }else {
       inputValue = $(".damage-heal-input").val();
    }
    let inputKey = 'healing-done'

    $(".damage-heal-input").val("");
    console.log(inputValue);
    
    localStorage.setItem(inputKey, inputValue)
    health = Math.min(maxHealth, health + parseInt(inputValue))
    $(".current-hit-points-value").text(health)

  });
  var deathSaveSuccess = 0
  var deathSaveFail = 0
  //Death Saves Button Success
  $("#successful-save").on("click", function(){

    if(deathSaveSuccess < 3){
    deathSaveSuccess = deathSaveSuccess + 1
  }
    $(".save-successses").text("")
    $(".save-successses").text(deathSaveSuccess)

  });
  //Death Saves Button Fail
  $("#fail-save").on("click", function(){

    if(deathSaveFail < 3){
    deathSaveFail = deathSaveFail + 1
  }
    $(".save-failures").text(deathSaveFail)

  });
  //Death Saves Button Reset
  $("#reset-saves").on("click", function(){
    deathSaveSuccess = 0
    deathSaveFail = 0
    $(".save-failures").text("")
    $(".save-failures").text(deathSaveFail)
    $(".save-successses").text("")
    $(".save-successses").text(deathSaveSuccess)

  });
  var hitDiceAvailable = 3
  var hitDiceMax = 3
  //Hit Die
  $("#subtract-hit-die").on("click", function(){

    if(hitDiceAvailable > 0){
    hitDiceAvailable = hitDiceAvailable - 1
  }
    $("#current-hit-die").text(hitDiceAvailable)

  });
  var itemStorage = {
  };
  $(".add-item").on("click", function(){
    var itemVal = $(".item-input").val();
    $(".item-input").val("");
    if(!itemStorage.hasOwnProperty(itemVal)){
      itemStorage[itemVal] = 1
     localStorage.setItem('itemStorage', itemStorage);
    let itemHtml = '<div class="display-item" data-storage-key="'+ itemVal +'"> ' + itemVal + ' ' +  itemStorage[itemVal] + '</div>';
    $(".inventory-list").append(itemHtml);
   } else {
      itemStorage[itemVal]++
      $("[data-storage-key='" + itemVal + "']").text(itemVal + ' ' + itemStorage[itemVal])
   }


  });



});

  // $(".add-text-btn").on("click", function(){
// <span class=""
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



// <span class="current-hit-points-value">20</span>

// });


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









