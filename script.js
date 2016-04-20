$(document).ready(function() {

  $("#bouton").on("click", function() {

       $(".livreur").css('visibility', 'visible');
  });
    $(".close").on("click", function() {
    $(".livreur").hide();
    });

      $('#chec').on('click', function(){
      $(".livraison").css('visibility', 'visible');

    });
      $('.delete-btn').on('click', function(){
      $(".livraison").hide();
      });
});
