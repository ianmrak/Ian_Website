document.getElementById('header').addEventListener('click', function () {
  prompt('Please enter your age.');
    if (answer <= 18) {
      alert("It doesn't matter! Let's go!");
    } else {
      alert("Whatever, anyone can watch this!");
    }
}, false);

document.getElementByID('picture-list').addEventListener('click', function() {
  var a_href = this.parentNode.attr('src');
  var href =
  '<a href="' + a_href + '" class="lightbox_trigger">';
   this.append(href);
 }
