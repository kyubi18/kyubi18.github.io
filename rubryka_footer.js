$(document).ready(function(){
  $("html").mousemove(function(){
    $("html").click();
  });
  
  setTimeout(function(){
    $("html").mouseover(function(){
      $("html").click();
    });
  },2000);  
});
