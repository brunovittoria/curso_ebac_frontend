$(document).ready(function() {
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const taskInserida = $('#nova-tarefa').val();
        const novaTask = $('<li> </li>');

        $(`<p>${taskInserida}</p>`).appendTo(novaTask);

        $(novaTask).appendTo('ul');
        $('ul').slideDown();
    });
});