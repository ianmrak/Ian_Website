document.getElementById('header').addEventListener('click', function () {
  prompt('Please enter your age.');
    if (answer <= 18) {
      alert("It doesn't matter! Let's go!");
    } else {
      alert("Whatever, anyone can watch this!");
    }
}, false);
