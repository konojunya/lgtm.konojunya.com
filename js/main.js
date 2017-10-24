(function($){

  $(".grid").masonry({
    itemSelector: '.grid-item'
  })

  var clip = new Clipboard('.grid-item img', {
    text: function(trigger) {
      return trigger.src;
    }
  });
  clip.on('success', function(e){
    //e.text
    showModal();
    e.clearSelection();
  })
  clip.on('error', function(){
    alert('コピーに失敗しました...')
  })

  function showModal() {
    var modal = $(".modal");
    modal.animate({
      right: '0%'
    }, 200)
    setTimeout(function() {
      modal.animate({
        right: '-100%'
      }, 200)
    }, 2000)
  }

})(jQuery);