window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-222909420-1');

document.write('<script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"><\/script>');
document.write('<script src="//tags.orquideassp.com/tag/18104"><\/script>');

var interstitialSlot;
window.googletag = window.googletag || {
    cmd: []
};
googletag.cmd.push(function() {
    googletag.defineSlot('/211182487,22679029955/www.ceritakuliner.com_Display_728x90', [
        [970, 250],
        [970, 200],
        [970, 90],
        [728, 90]
    ], 'banner-2').addService(googletag.pubads());

    interstitialSlot = googletag.defineOutOfPageSlot('/211182487,22679029955/www.ceritakuliner.com_Interstitial', googletag.enums.OutOfPageFormat.INTERSTITIAL).addService(googletag.pubads());

    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().setCentering(true);
    googletag.pubads().setTargeting('finance', 'health', 'food', 'sports', 'movies');
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
    googletag.display("interstitialSlot");
});

document.write('<br\/>');
document.write('<center><div id="banner-2"><script>googletag.cmd.push(function() { googletag.display("banner-2"); });<\/script><\/div><\/center><br\/>');
