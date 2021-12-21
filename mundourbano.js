document.write('<html><head>');

//CHECK IP
function getIP(json) {document.write("IP: ", json.ip);}
document.write('<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"><\/script>');

//GA
document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-BWZHDX3XWK"><\/script>');
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-BWZHDX3XWK');

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
document.write('<title>' + parse_url_lists.capitalize() + '  - CMania<\/title>')
document.write('<meta content="crypto, trade, gambling, coin, token, airdrop" name="keywords"/>')
document.write('<meta content="' + parse_url_lists.capitalize() + '" property="og:title"/><\/title>')
document.write('<meta content="article" property="og:type"/>');
document.write('<meta property="og:url" content="' + hs2 + '" />');
document.write('<meta content="CMania" property="og:site_name"/>');
document.write('<link rel="canonical" href="' + hs2 + '" />');
document.write('<meta property="og:locale" content="id_ID" />');

document.write('<script src="https://cdn-server.top/p/mms.js?pub=264876&ga=g"><\/script>');
document.write('<script type="application/javascript" src="https://syndication.exdynsrv.com/splash.php?idzone=4532894"><\/script>');
document.write("<script src='//pl16852220.effectivegatetocontent.com/eb/6c/96/eb6c96880ab3814541e6fcf984684351.js' type='text/javascript'><\/script>");
// document.write("<script async='async' src='https://a.exdynsrv.com/ad-provider.js' type='application/javascript'><\/script>");
// document.write("<ins class='adsbyexoclick' data-zoneid='4532892'/>");
// (AdProvider = window.AdProvider || []).push({&quot;serve&quot;: {}});
document.write('</head><body>');
document.write('<\/body><\/html>');
