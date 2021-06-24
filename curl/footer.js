function random(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;};

(function() {
  var d = document, e = d.createElement('a'), p = d.getElementsByTagName('p'), r = p[random(0, (p.length - 1))];
  e.href = 'https://www.kiatkiatku.com';
  e.target = '_blank';
  e.text = 'SPONSORED: LifeStyle ';
  e.rel = 'sponsored';
  r.insertBefore(e, r.firstChild);
})();

var el=["channel-live-chat","channel-tanya-dokter","channel-download-aplikasi"];
for (i=0;i<el.length;i++) {
    document.getElementById(el[i]).remove();
}
