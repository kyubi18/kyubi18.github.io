function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hs = window.location.host;
var hs2 = window.location.href;
var ua = navigator.userAgent;	
		
direct_link_lists=[
	'https://bidb1dbidx.com/pFr3oe3e31421d20bee597cccdf3bcd1067170e3577c4',
	'https://bidb1dbidx.com/kdri7a5228ad25886ab547bfe991b2352127c5d4b57e2',
	'https://bidb1dbidx.com/1urGz1a1e2c9c0b056f75b15f1b4ce08a3c8bac882804',
	'https://downloadgate.org/VjrVPd38cd01126bf0f21bdbc9bb790fa6e291d791d48',
	'https://downloadgate.org/oerIP6d0e6c36e0ca68a2f7b8be1c460602167ba60a86',
	'https://downloadgate.org/pprtFce445949b86e7b60f80009ca0ebcd674f47431a9',
	'https://bidb1dbidx.com/pFr3oe3e31421d20bee597cccdf3bcd1067170e3577c4',
	'https://bidb1dbidx.com/kdri7a5228ad25886ab547bfe991b2352127c5d4b57e2',
	'https://bidb1dbidx.com/1urGz1a1e2c9c0b056f75b15f1b4ce08a3c8bac882804',
	'https://downloadgate.org/VjrVPd38cd01126bf0f21bdbc9bb790fa6e291d791d48',
	'https://downloadgate.org/oerIP6d0e6c36e0ca68a2f7b8be1c460602167ba60a86',
	'https://downloadgate.org/pprtFce445949b86e7b60f80009ca0ebcd674f47431a9',

]
function getURL() {
	return direct_link_lists[random(0, (direct_link_lists.length - 1))];
}

var url = window.location.href.replace('https://', '');

var parse_url = url.split('/');
var parse_url_lists = parse_url[3].replace('.html', '').split('-').join(' ')
var direct_link = getURL()+'?q='+encodeURI(parse_url_lists)+'&s2='+hs


(function() {
  var d = document, e = d.createElement('a'), p = d.getElementsByTagName('p'), r = p[random(0, (p.length - 1))];
  //e.href = 'https://www.kiatkiatku.com';
  //e.target = '_blank';
  //e.title = 'Lifestyle';
  //e.text = 'LifeStyle ';
  //e.rel = 'sponsored';
  //r.insertBefore(e, r.firstChild);
  
  r.innerHTML += '<br/><br/>Sponsored: <a href="'+direct_link+'" target="_blank" title="Lifestyle" rel="sponsored">Free Claim Reward</a>';
})();
