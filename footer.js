function random(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;};

(function() {
  var d = document, e = d.createElement('a'), p = d.getElementsByTagName('p'), r = p[random(0, (p.length - 1))];
  //e.href = 'https://www.kiatkiatku.com';
  //e.target = '_blank';
  //e.title = 'Lifestyle';
  //e.text = 'LifeStyle ';
  //e.rel = 'sponsored';
  //r.insertBefore(e, r.firstChild);
  
  r.innerHTML += '<br/><br/>Sponsored: <a href="https://www.kiatkiatku.com" target="_blank" title="Lifestyle" rel="sponsored">LifeStyle</a>';
})();
