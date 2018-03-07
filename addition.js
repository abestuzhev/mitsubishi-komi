$(function(){
    $('.filter-title').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('show-filter');
    })
});