window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-217683934-1');


$(document).ready(function(){
  $("html").mousemove(function(){
    $("body").click();
  });
  
  $("html").mouseover(function(){
    $("html").click();
  });
});
