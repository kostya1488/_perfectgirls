$('.menu_button').on('click', () => {
    $('.menu_button').toggleClass('active');
    $('.preview').toggleClass('active');
    $('.menu').toggleClass('active')
    $('.section_intro').toggleClass('active')
})