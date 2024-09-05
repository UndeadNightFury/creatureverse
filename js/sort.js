window.onload = function() {
  var ul = document.getElementById('sort');
  var li = Array.prototype.slice.call(ul.getElementsByTagName('div'), 0);
  li.sort(function(a, b) {
      var aText = a.querySelector('a').textContent;
      var bText = b.querySelector('a').textContent;
      return aText.localeCompare(bText);
  });
  while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
  }
  for (var i = 0; i < li.length; i++) {
      ul.appendChild(li[i]);
  }
};