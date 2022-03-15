window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-222909420-1');


function random(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;};

(function() {
  
  
  var d = document, 
      adsHead = d.getElementsByTagName('head'), 
      adsHead2 = adsHead[random(0, (adsHead.length - 1))];
  
  adsHead2.innerHTML += '<center><script src="https://tags.orquideassp.com/tag/13387"></script></center>';

  var adsside = d.getElementByClass('categoryPageHeader__container-popular'), 
      adsside2 = adsside[random(0, (adsside.length - 1))];
  adsside2.innerHTML += '<center><script src="https://tags.orquideassp.com/tag/13385"></script></center>';

})();
