$(document).ready(function() {
  //Initiative button
  $(".initiative-value").text(localStorage.initiative)
  $(".change-initiative").on("click", function(){
    let initiativeValue = $(".set-intiative").val();
    $(".set-intiative").val("");
    $('.initiative-value').text(initiativeValue);
    localStorage.initiative = initiativeValue;
    

  });
  // $('.initiative-value').text(localStorage.initiative);
// $("#change-initiative").on("click", function(){
//   let initiativeValue = $("#initiative-box").val();
//   $('.initiative-value').text(initiativeValue);
//   localStorage.initiative = initiativeValue
// });
   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys
  //Armor Class Button
  $(".armor-class-value").text(localStorage.armorClass)
  $(".update-armor").on("click", function(){
    let armorClassValue = $(".update-armor-class").val();
    $(".update-armor-class").val("");
    $(".armor-class-value").text(armorClassValue)
    localStorage.armorClass = armorClassValue;
    

  });
  var health = 20
  var maxHealth = 20
  $(".current-hit-points-value").text(localStorage.currentHealth)
  //Hit Points Button Damage
  $("#damage").on("click", function(){
    var damageDone
    if($(".damage-heal-input").val().length === 0 || Number.isNaN(parseInt($(".damage-heal-input").val()))){
       damageDone = 0
    }else {
       damageDone = $(".damage-heal-input").val();
    }
    $(".damage-heal-input").val("");
    health = Math.max(0, health - parseInt(damageDone))
    localStorage.currentHealth = health
    $(".current-hit-points-value").text(localStorage.currentHealth)

    // $(".current-hit-points-value").text(health)

  });

  //Hit Points Button Heal
  $("#heal").on("click", function(){
    var healingDone
    if($(".damage-heal-input").val().length === 0){
       healingDone = 0
    }else {
       healingDone = $(".damage-heal-input").val();
    }
    $(".damage-heal-input").val("");
    health = Math.min(maxHealth, health + parseInt(healingDone))
    localStorage.currentHealth = health
    $(".current-hit-points-value").text(localStorage.currentHealth)

  });
  var deathSaveSuccess = parseInt(localStorage.deathSaveSuccess || 0)
  var deathSaveFail = parseInt(localStorage.deathSaveFail || 0)
  //Death Saves Button Success
  $(".save-successses").text(localStorage.deathSaveSuccess)
  $("#successful-save").on("click", function(){

    if(deathSaveSuccess < 3){
    deathSaveSuccess = deathSaveSuccess + 1
    }
    localStorage.deathSaveSuccess = deathSaveSuccess
    console.log(deathSaveSuccess)
    $(".save-successses").text(localStorage.deathSaveSuccess)
  });


  //Death Saves Button Fail
  $(".save-failures").text(localStorage.deathSaveFail)
  $("#fail-save").on("click", function(){

    if(deathSaveFail < 3){
    deathSaveFail = deathSaveFail + 1
    }
    localStorage.deathSaveFail = deathSaveFail
    $(".save-failures").text(localStorage.deathSaveFail)
  

  });
  //Death Saves Button Reset
  $("#reset-saves").on("click", function(){
    deathSaveSuccess = 0
    deathSaveFail = 0
    localStorage.deathSaveSuccess = deathSaveSuccess
    localStorage.deathSaveFail = deathSaveFail
    $(".save-failures").text(localStorage.deathSaveFail)
    $(".save-successses").text(localStorage.deathSaveSuccess)

  });
  var hitDiceAvailable = parseInt(localStorage.hitDiceAvailable || 3)
  var hitDiceMax = 3
  //Hit Die
  $("#current-hit-die").text(localStorage.hitDiceAvailable)
  $("#subtract-hit-die").on("click", function(){

    if(hitDiceAvailable > 0){
    hitDiceAvailable = hitDiceAvailable - 1
    }
    localStorage.hitDiceAvailable = hitDiceAvailable
    $("#current-hit-die").text(localStorage.hitDiceAvailable)

  });
});