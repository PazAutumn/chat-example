$(function() {
    var socket = io('http://34.227.11.223:3000');
    $('form').submit(function() {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function(msg) {
        $('#messages').append($('<li>').html('<img ' +
          'class="photo" src="img/21390632_10214319499' +
          '960034_1640532095_o.jpg" alt="profile-photo">' +
          ' Paz: '+ msg));
        window.scrollTo(0, document.body.scrollHeight);
    });
});