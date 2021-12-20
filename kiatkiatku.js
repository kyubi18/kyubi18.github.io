document.write('<html lang="id-ID"><head>');

//CHECK IP
function getIP(json) {document.write("IP: ", json.ip);}
document.write('<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"><\/script>');

//GA
document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-0R3NS1C50E-1"><\/script>');
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-0R3NS1C50E-1');

//READ HOST
var hs = window.location.host;
var hs2 = window.location.href;
//READ UA
var ua = navigator.userAgent;

//META ID WEB
var title = window.location.href.replace('https://', '');

var parse_url = title.split('/');
var parse_url_lists = parse_url[3].replace('.html', '').split('-').join(' ');

String.prototype.capitalize = function(){
	return this.replace(/(^|\s)([a-z])/g, 
function(m, p1, p2) {
	return p1 + p2.toUpperCase();
});
};		
document.write('<title>' + parse_url_lists.capitalize() + '  - Kiat-Kiatku | Hidup Sehat<\/title>')
document.write('<meta content="gaya hidup, hidup sehat, diet, beauty, sehat, pola makan, makanan, kiat sehat, perawatan" name="keywords"/>')
document.write('<meta content="' + parse_url_lists.capitalize() + '" property="og:title"/><\/title>')
document.write('<meta content="article" property="og:type"/>');
document.write('<meta property="og:url" content="' + hs2 + '" />');
document.write('<meta content="Kiat-Kiatku | Hidup Sehat" property="og:site_name"/>');
document.write('<link rel="canonical" href="' + hs2 + '" />');
document.write('<meta property="og:locale" content="id_ID" />');

document.write('</head><body>');
document.write('<\/body><\/html>');
