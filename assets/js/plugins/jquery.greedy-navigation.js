/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {
  if (!$nav || !$nav.length || $nav.width() <= 0) return;
  // Re-measure all links after viewport changes.
  $hlinks.children().appendTo($vlinks);
  $btn.addClass('hidden');
  $hlinks.addClass('hidden');
  var availableSpace = $nav.width();
  if ($vlinks.width() > availableSpace) {
    $btn.removeClass('hidden');
    availableSpace = $nav.width() - $btn.outerWidth() - 30;
    var remaining = $vlinks.children().length;
    while (remaining > 0 && $vlinks.width() > availableSpace) {
      $vlinks.children().last().prependTo($hlinks);
      remaining -= 1;
    }
  }
  var count = $hlinks.children().length;
  $btn.toggleClass('hidden', count === 0);
  $btn.attr('count', count);
  breaks = [];
}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();