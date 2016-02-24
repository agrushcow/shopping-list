$(document).ready(function() {
    $('.btn').click(function() {
      if($('.item').val().trim().length == 0) {
        alert('Please enter a longer string!');
      } else {
        var value = $('.item').val();
        var container = $("<div/>", {class:"container"});
        $( container ).appendTo(".cblist");
        var need = $("<div/>", {class:"need"});
        $( need ).appendTo( container );
        var label = $("<label/>", {class:"item-label", text:value});
        $( label ).appendTo( need );
        var chk = $("<input/>", {class:"chkbox", type:"checkbox"});
        $( chk ).prependTo( label );
        var deleteBtn = $("<div/>", {class:"deleteBtn", text:"Remove"});
        $( deleteBtn ).appendTo( container );
        $('.reset').show();

        $('.item').val('');
      }
    });

    $('.item').keypress(function(e) {
      if(e.which == 13)  {
        if($('.item').val().trim().length == 0) {
          alert('Please enter a longer string!');
        } else {
        var value = $('.item').val();
        var container = $("<div/>", {class:"container"});
        $( container ).appendTo(".cblist");
        var need = $("<div/>", {class:"need"});
        $( need ).appendTo( container );
        var label = $("<label/>", {class:"item-label", text:value});
        $( label ).appendTo( need );
        var chk = $("<input/>", {class:"chkbox", type:"checkbox"});
        $( chk ).prependTo( label );
        var deleteBtn = $("<div/>", {class:"deleteBtn", text:"Remove"});
        $( deleteBtn ).appendTo( container );

          $('.reset').show();

          $('.item').val('');
        }
      }
    });

      $('.cblist').on('click', '.deleteBtn', function(event) {
        var removeItem = $(this).parent();

          removeItem.slideUp(700, function() {
            removeItem.remove();         
            if ($('.cblist').length == 0) {
            $('.reset').hide();
            }
          }); 
      });

      $('.reset').click(function() {    
            $('.cblist').empty();
            $('.reset').hide();
      });

      $('.cblist').on('change', 'input', function (event) {
        $(this).parent().toggleClass('item-selected');
        });
});
