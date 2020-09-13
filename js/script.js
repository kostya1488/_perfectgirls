$('.menu_button').on('click', () => {
    $('.section_intro').toggleClass('menu_open')
})

$('.vacancy_button').on('click', function(e) {
    e.preventDefault();

    $(this).parent().parent().toggleClass('card_active');
    var text = $(this).text();
    $(this).text(
        text == "Подробнее" ? "Спрятать" : "Подробнее");

})