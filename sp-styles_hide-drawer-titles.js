
function when(selector, callback) {
  var interval = window.setInterval(function () {
    if (document.querySelectorAll(selector).length > 0) {
      callback();
      window.clearInterval(interval);
    }
  }, 200);
}

function hideElement(el) {
  el.style.display = 'none';
}

function hideWhenVisible(selector) {
  when(selector, function() {
    [].forEach.call(document.querySelectorAll(selector), hideElement);
  });
}

hideWhenVisible('[ng-if="categoryLinks.length"]');
hideWhenVisible('.spb-drawersectiontextcolor');
