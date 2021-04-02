//--- costom direct ---//
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var host = window.location.href;

const directCostom="off";//on/off
const directRandom="no";//yes/no
var linkDirectRandom=["https://google.com","https://www.youtube.com"];
var linkDirectOne=linkDirectRandom[random(0, (linkDirectRandom.length-1))];

//--- get Date ---
var month = new Array();
month[0] = 1;
month[1] = 2;
month[2] = 3;
month[3] = 4;
month[4] = 5;
month[5] = 6;
month[6] = 7;
month[7] = 8;
month[8] = 9;
month[9] = 10;
month[10] = 11;
month[11] = 12;

var date = new Date();
var month = month[date.getMonth()];
var year = date.getFullYear();
//--- random Post ---

//news - 127 url
var niche_news = [
	'abc7chicago.com',
	'abc7news.com',
	'abc7ny.com',
	'asia.nikkei.com',
	'augustachronicle.com',
	'bbc.co.uk',
	'boston.cbslocal.com',
	'buzzfactory.ch',
	'cbs17.com',
	'cbs8.com',
	'charlotteobserver.com',
	'chicagohealthonline.com',
	'communitypharmacyni.co.uk',
	'covid-19.acgov.org',
	'covid.joinzoe.com',
	'cp24.com',
	'discoverweyburn.com',
	'economictimes.indiatimes.com',
	'en.wikipedia.org',
	'fayettecountyrecord.com',
	'fox40.com',
	'fox59.com',
	'fox8.com',
	'fresno.ca.us',
	'globalnews.ca',
	'hub.arcgis.com',
	'indianexpress.com',
	'ktla.com',
	'lehighvalleylive.com',
	'live5news.com',
	'news.un.org',
	'news.yahoo.com',
	'news4jax.com',
	'newyork.cbslocal.com',
	'ourworldindata.org',
	'pasoroblespress.com',
	'patch.com',
	'reliefweb.int',
	'rep-am.com',
	'sanfrancisco.cbslocal.com',
	'scitechdaily.com',
	'thehindubusinessline.com',
	'thetimes.co.uk',
	'time.com',
	'timesofindia.indiatimes.com',
	'twitter.com',
	'voi.id',
	'voiceofoc.org',
	'wired.co.uk',
	'wmcactionnews5.com',
	'wwaytv3.com',
	'www.aamc.org',
	'www.aarp.org',
	'www.agairupdate.com',
	'www.aljazeera.com',
	'www.arlingtonva.us',
	'www.bayer.com',
	'www.baytoday.ca',
	'www.bbc.com',
	'www.bridgemi.com',
	'www.buttecounty.net',
	'www.cbc.ca',
	'www.cgtn.com',
	'www.cnn.com',
	'www.ctvnews.ca',
	'www.dailyherald.com',
	'www.dawn.com',
	'www.edcgov.us',
	'www.euronews.com',
	'www.facebook.com',
	'www.health.com',
	'www.healthline.com',
	'www.hindustantimes.com',
	'www.inquirer.com',
	'www.kcra.com',
	'www.kpax.com',
	'www.ksdk.com',
	'www.kwch.com',
	'www.kxan.com',
	'www.latimes.com',
	'www.livemint.com',
	'www.localmemphis.com',
	'www.marketwatch.com',
	'www.medpagetoday.com',
	'www.medscape.com',
	'www.mobihealthnews.com',
	'www.mprnews.org',
	'www.nature.com',
	'www.nbcchicago.com',
	'www.nbcdfw.com',
	'www.nbcnews.com',
	'www.ndtv.com',
	'www.nejm.org',
	'www.nhbr.com',
	'www.npr.org',
	'www.nytimes.com',
	'www.outlookindia.com',
	'www.rappler.com',
	'www.redcross.org',
	'www.reuters.com',
	'www.saobserver.net',
	'www.seattlemet.com',
	'www.seattletimes.com',
	'www.skagitcounty.net',
	'www.startribune.com',
	'www.straitstimes.com',
	'www.tapinto.net',
	'www.tbnewswatch.com',
	'www.tctmd.com',
	'www.techrepublic.com',
	'www.thenationalnews.com',
	'www.thestar.com',
	'www.theverge.com',
	'www.timesnownews.com',
	'www.usnews.com',
	'www.voanews.com',
	'www.vox.com',
	'www.wavy.com',
	'www.wbtv.com',
	'www.weareiowa.com',
	'www.wistv.com',
	'www.wkyt.com',
	'www.wmur.com',
	'www.wsbtv.com',
	'www.wsj.com',
	'www.wtnh.com',
	'www.xinhuanet.com',
];