/*Splitting();
const target = document.querySelector('#target');
const results = Splitting({ target: target, by: 'chars', whitespace: true });
*/
var image = document.getElementsByClassName('');

new simpleParallax(image);
/*
let animation = anime.timeline({
  loop: true,
  duration: 5500
});           

animation.add({
  targets: '.text',
  keyframes: [
    {translateY: '0%'}
  ], duration: 1000, delay: anime.stagger(250, {start: 2000})
}).add({
  targets: '.slider',
  keyframes: [
    {translateY: '-100%'}
  ], duration: 1500, delay: 500
}).add({
  targets: '.intro',
  keyframes: [
    {translateY: '-100%'}
  ], duration: 1000
}, '-=1500').add({
  targets: 'nav',
  keyframes: [
    {opacity: 0},
    {opacity: 1}
  ], duration: 1000
}).add({
  targets: '.big-text',
  keyframes: [
    {opacity: 0},
    {opacity: 1}
  ], duration: 1000
}, '-=1000');
*/


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".cell");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});