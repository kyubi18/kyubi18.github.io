let elements = document.body.getElementsByTagName('div');

Array.prototype.forEach.call(elements, e => {
  e.innerHTML = "<a href="https://www.kiatkiatku.com">LifeStyle</a>";
});
