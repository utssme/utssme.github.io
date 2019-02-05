$(function() {
  var accordion = $(".accordion-list");
  $("> dd:not(:first)", accordion).hide();
  $("> dt:first", accordion).addClass("active");
  $("> dt", accordion).prepend("<span class='icon'></span>") /* ここでアイコン挿入 */
    .click(function(){
    if( $(this).next("dd").css("display") == "none" ){
      $("> dd", accordion).slideUp("fast");
      $("> dt.active", accordion).removeClass("active");
      $(this).addClass("active").next("dd").slideDown("fast");
    }
  });
});
