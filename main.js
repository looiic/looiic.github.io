var $boxes = $('.box'),
    $boxesReversed = $('.box').get().reverse(),
    $boxesS = $('.boxS'),
    $dot = $('.dot'),
    green = '#89c540';



var tl = new TimelineMax({delay: 0, repeat: 0, onComplete: function(){
  $('#demo').bind('mouseenter', doAction);
}});
function doAction(){

  $('#demo').unbind('mouseenter', doAction);
tl
  .set($dot, {autoAlpha: 1})
  .staggerTo($boxes, 1, {
    cycle:{
      y:[50, -50],
      backgroundColor: ['white', green],
      ease: [Bounce.easeOut, Power4.easeOut]
    }
  }, 0.05)
  .to($dot, 1, {x: '+=1000', ease:Power3.easeOut}, '-=0.98')
  .set($dot, {rotation: 180, transformOrigin: 'center center'})
  .to($dot, 1, {x: '-=1000', ease:Power3.easeOut})
  .staggerTo($boxes, 0.5, {
    cycle:{
      y:['-=50', '+=50'],
      ease: [Power4.easeOut, Bounce.easeOut]
    },
    backgroundColor: 'white'
  }, 0.05, '-=0.6')
  .to($boxesS, 0.3, {backgroundColor: green}, '-=0.5')
  .set($dot, {rotation: 0, autoAlpha: 0});

}

$("#scrollButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#welcome").offset().top
    }, 1000);
});

$(window).scroll(function() {
    // Get scroll position
    var s = $(window).scrollTop(),
    // scroll value and opacity
    opacityVal = 1 - (s / 100 * 0.15);
    // opacity value 0% to 100%
    $('.blurred-img').css('opacity', opacityVal);
});
