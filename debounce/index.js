module.exports = debounce;

function debounce(func, delay) {
  var pending = false, context, args;
  return function() {
    context = this, args = arguments;
    if (!pending) {
      pending = true;
      setTimeout(function() {
        func.apply(context, args);
        pending = false;
      }, delay);
    }

  }
}

