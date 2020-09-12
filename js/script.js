$('.menu_button').on('click', () => {
    $('.section_intro').toggleClass('menu_open')
})

$('.vacancy_button').on('click', function(e) {
    e.preventDefault();
    // var $this = this;
    // console.log($this.parent());
    // this.toggleClass('active');
    // console.log(e.target.parent());
    // var elem = this;
    // console.log(elem);
    // e.target.addClass('active');
    // alert('Вы кликнули по ссылке с классом ' + this.className);
    // $(this).parent().toggleClass('active');
    $(this).parent().parent().toggleClass('card_active');
    // var clickedBtnID = $(this).attr('class');   
    var text = $(this).text();
    $(this).text(
        text == "Подробнее" ? "Спрятать" : "Подробнее");

})