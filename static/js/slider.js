var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;
var slideInterval = 2000;
var navBtnId = 0;

function nextSlide() {
    $('.slide-nav-btn').eq(slideNow-1).css('background-color', '#fff');
    if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
        $('.slide-nav-btn').eq(slideNow-1).css('background-color', '#000');
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
        $('.slide-nav-btn').eq(slideNow-1).css('background-color', '#000');
    }
}

function prevSlide() {
    $('.slide-nav-btn').eq(slideNow-1).css('background-color', '#fff');
    if (slideNow === 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow = slideCount;
        $('.slide-nav-btn').eq(slideNow-1).css('background-color', '#000');
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow--;
        $('.slide-nav-btn').eq(slideNow-1).css('background-color', '#000');
    }
}

$(document).ready(function () {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('.slide-nav-btn').eq(slideNow-1).css('background-color', '#000');

    $('#viewport').hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 !== slideNow) {
            $('.slide-nav-btn').css('background-color', '#fff');
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
            });
            $(this).css('background-color', '#000');
            slideNow = navBtnId + 1;
        }
    });
});
