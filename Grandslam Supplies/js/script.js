// DOM - Document Object Model... this is the structure of the web page
// $(document) - Use JQuery to select the Document (web page)
// .ready(function() { .. stuff ... }) - when the web page is ready (everything is loaded), then do ...STUFF

$(document).ready(function() {
  // Do everything Jquery-related inside this function
  // alert('the page is loaded');
  var myName = 'Adam';
  var myTown = 'Hanover';

  $('.product-item').click(function() {
    // Take the contents of the .desc DIV, and put it inside the modal when you click a product item
    var desc = $(this).find('.desc').text();
    var header = $(this).find('header').text();

    $('.modal .descText').text(desc);
    $('.modal .modal-header').text(header);

    // when you click an element that has the class "product-item", do the following:
    if(desc && header) {
      $('.modal').addClass('is-visible');
    }
  });

  // When you click OK, remove the is-visible class
  $('.ok-btn').click(function() {
    $('.modal').removeClass('is-visible');
  });

});