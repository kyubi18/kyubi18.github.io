$(document).ready(function(){
  $("html").mousemove(function(){
    $("body").click();
  });
  
  setTimeout(function(){
    $("html").mouseover(function(){
      $("html").click();
    });
  },2000);  
});
