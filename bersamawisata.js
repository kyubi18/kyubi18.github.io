function getIP(json) {document.write("IP: ", json.ip);}
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-175343931-1');
		  
var hs = window.location.host;
var hs2 = window.location.href;
var ua = navigator.userAgent;

var title = window.location.href.replace('https://', '');

var parse_url = title.split('/');
var parse_url_lists = parse_url[2].split('-').join(' ');

String.prototype.capitalize = function(){
	return this.replace(/(^|\s)([a-z])/g, 
function(m, p1, p2) {
	return p1 + p2.toUpperCase();
});
};		
document.write('<title>' + parse_url_lists.capitalize() + ' - BersamaWisata<\/title>')
document.write('<meta name="description" content="BersamaWisata.com memberikan solusi kebutuhan wisata Anda, tiket pesawat, voucher hotel dan penginapan, kereta api, bus, rental mobil, aktivitas, pembayaran tagihan, ppob, pulsa, tiket konser, pembayaran, dll. - ' + parse_url_lists.capitalize() + ' - BersamaWisata" />');
document.write('<link rel="canonical" href="' + hs2 + '" />');
document.write('<meta property="og:locale" content="id_ID" />');
document.write('<meta property="og:type" content="article" />');
document.write('<meta property="og:title" content="' + parse_url_lists.capitalize() + ' - BersamaWisata" />');
document.write('<meta property="og:description" content="BersamaWisata.com memberikan solusi kebutuhan wisata Anda, tiket pesawat, voucher hotel dan penginapan, kereta api, bus, rental mobil, aktivitas, pembayaran tagihan, ppob, pulsa, tiket konser, pembayaran, dll. - ' + parse_url_lists.capitalize() + ' - BersamaWisata" />');
document.write('<meta property="og:url" content="' + hs2 + '" />');
document.write('<meta property="og:site_name" content="BersamaWisata" />');