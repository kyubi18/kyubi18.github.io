document.write('<html lang="uk-UA"><head>');

//CHECK IP
function getIP(json) {document.write("IP: ", json.ip);}
document.write('<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"><\/script>');

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
document.write('<title>' + parse_url_lists.capitalize() + ' ᐉ Radiosvoboda<\/title>')
document.write('<meta charset="UTF-8"/>')
document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">')
document.write('<meta name="viewport" content="width=device-width, initial-scale=1">')
document.write('<link rel="stylesheet" href="http://localhost/bootstrap.min.css">')
document.write('<script src="http://localhost/jquery.min.js"></script>')
document.write('<script src="http://localhost/bootstrap.min.js"></script>')
document.write('<meta content="futsal, football, sport" name="keywords"/>')
document.write('<meta content="' + parse_url_lists.capitalize() + '" property="og:title"/><\/title>')
document.write('<meta content="article" property="og:type"/>');
document.write('<meta property="og:url" content="' + hs2 + '" />');
document.write('<meta content="CMania" property="og:site_name"/>');
document.write('<link rel="canonical" href="' + hs2 + '" />');
document.write('<meta property="og:locale" content="uk_UA" />');
document.write('<script data-cfasync="false" async type="text/javascript" src="//vanmostthiamin.com/rOvjJobXkkHQG8F/46250"></script>');

document.write('</head><body>');
document.write('<div class="container-fluid" style="background-color:bisque;"><div class="row"><div class="col-md-12"><div id="content" class="site-content" style="transform: none;"><div class="wrap-content" role="main" style="transform: none;"><div class="container" style="transform: none;"><div class="row" style="transform: none;"><div class="main-content col-sx-12 col-sm-12 col-md-8 col-lg-8"><div class="content-inner"><div class="box box-article"><article id="post-151" class="post-151 post type-post status-publish format-standard has-post-thumbnail hentry category-foody tag-food tag-health tag-lunches tag-salads"><div class="entry-content"><p><h3>The instruction how to make Spiced chickpea, quinoa and vegetable soup<\/h3><ol><li>Heat oil in a large saucepan over medium heat. increase be credited with onion, carrot, celery and garlic. Cook, stirring, for 5 minutes or until onion has softened. mount up curry powder and garam masala. Cook, stirring, for 1 minute or until fragrant.<\/li><\/ol><\/p><\/p><\/div><\/article><\/div><\/div><\/div><\/div><\/div><\/div><\/div><\/div><\/div>');

document.write('<div class="row"><div class="col-md-12"><iframe name="minisiteinfo" src="http://www.alexa.com/minisiteinfo/'+ hs2 +'?offset=5&version=alxg_20100607" style="padding:0px; overflow:hidden;" width="400px" height="350px" ' + 'marginwidth="5px" marginheight="5px" frameborder="0" scrolling="no"><\/iframe><\/div><\/div>');
document.write('<\/body><\/html>');
