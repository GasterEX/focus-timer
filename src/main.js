$(function(){
    $('.timer').startTimer({
        onComplete: function(element){
            element.addClass('is-complete');
        }
    });
});