function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hs = window.location.host;
var hs2 = window.location.href;
var ua = navigator.userAgent;	
				
direct_link_lists=[
	'https://apprefaculty.pro/bB3aV.0-Ph3/pVv/b/mcVZJYZYDR0S0MMyz/EY5IMXzWk/1OLmTgQdzPM/T-kizsORTuYA',
];
		
function getURL() {
	return direct_link_lists[random(0, (direct_link_lists.length - 1))];
}

var direct_link = getURL();

document.write('<center><a href="'+direct_link+'" style="margin-left: 1em; margin-right: 1em;" target="_blank" title="claim airdrop" rel="sponsored"><img alt="claim airdrop" data-original-height="250" data-original-width="300" src="https://kyubi18.github.io/CLAIM2.png" width="300" height="250"><\/a><\/center>')
