$(document).ready(function ($) {
    function animateElements() {
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100,10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / -11,
                    value: percent / 100,
                    size: 180,
                    thickness: 5,
                    emptyFill: "rgba(0,0,0, .2)",
                    fill: {
                        color: '#ff0036'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue*100).toFixed(0));
                }).stop();
            }
        });
    }
    animateElements();
    $(window).scroll(animateElements);
});


