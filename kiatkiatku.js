document.write('<html lang="id-ID"><head>');

//CHECK IP
function getIP(json) {document.write("IP: ", json.ip);}
document.write('<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"><\/script>');

//GA
document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-0R3NS1C50E"><\/script>');
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-0R3NS1C50E');

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
document.write("<meta content='983cfa3c79488a4c2f502e69aebb58e14693aeb4' name='hilltopads-site-verification'/>");

(function(__htas){
var d = document,
    s = d.createElement('script'),
    l = d.scripts[d.scripts.length - 1];
s.settings = __htas || {};
s.src = "\/\/apprefaculty.pro\/cADl9x6.bp2F5FlqSbWAQT9\/NDDkMmxOOBTPMH5_N\/Sg0F0qM\/zME\/5\/MtzWkT2J";
l.parentNode.insertBefore(s, l);
})({})

document.write('</head><body>');
document.write('<script type="text/javascript" src="https://pppbr.com/bnr.php?section=General&pub=264876&format=300x250&ga=g"><\/script>');
document.write('<script type="text/javascript" src="https://pppbr.com/bnr.php?section=General&pub=264876&format=300x250&ga=g"><\/script>');
document.write('<br/>');
document.write('<iframe src="//a.exdynsrv.com/iframe.php?idzone=4532116&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"><\/iframe>');
document.write('<iframe src="//a.exdynsrv.com/iframe.php?idzone=4532116&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"><\/iframe>');
document.write('<\/body><\/html>');
