var d = document, p = d.getElementsByTagName('html'), r = p[0];
r.innerHTML += '<div id="myNav" class="overlay"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a><div class="overlay-content"><center><a href="https://minilemon.co.id" title="MiniLemon" target="_blank"><img src="https://kyubi18.github.io/minilemon300.jpg" alt="MiniLemon"></a></center></div></div>';

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
openNav();
