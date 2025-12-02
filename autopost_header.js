(function() {
    "use strict";

    // =================================================================
    // 1. CONFIG & GLOBAL VARIABLES (Histats & atOptions)
    // =================================================================
    
    // A. Histats Tracking
    window._Hasync = window._Hasync || [];
    window._Hasync.push(['Histats.start', '1,4526895,4,1,120,40,00010000']);
    window._Hasync.push(['Histats.fasi', '1']);
    window._Hasync.push(['Histats.track_hits', '']);

    var hs = document.createElement('script');
    hs.type = 'text/javascript';
    hs.async = true;
    hs.src = '//s10.histats.com/js15_as.js';
    (document.head || document.body).appendChild(hs);

    // B. Banner Ad Options (728x90)
    window.atOptions = {
        'key' : '56a53fe1b516182ec510a5fef87730f4',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
    };

    // =================================================================
    // 2. HELPER FUNCTIONS
    // =================================================================

    // Fungsi aman untuk load script eksternal
    function loadScript(src, attributes = {}, target = document.body) {
        var script = document.createElement('script');
        script.src = src;
        script.async = true; 
        for (var key in attributes) {
            script.setAttribute(key, attributes[key]);
        }
        target.appendChild(script);
    }

    // Fungsi untuk menyuntikkan CSS
    function injectCSS(cssContent) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerText = cssContent;
        document.head.appendChild(style);
    }

    // =================================================================
    // 3. MAIN EXECUTION (Dijalankan saat DOM Siap)
    // =================================================================
    
    function initAds() {
        // --- A. INJECT CSS STYLES (Gabungan untuk Overlay) ---
        var cssStyles = `
            .overlay {
                height: 100%;
                width: 0;
                position: fixed;
                z-index: 2147483647;
                top: 0;
                left: 0;
                background-color: rgba(0,0,0, 0.95);
                overflow-x: hidden;
                transition: 0.5s;
            }
            .overlay-content {
                position: relative;
                top: 25%;
                width: 100%;
                text-align: center;
                margin-top: 30px;
            }
            .overlay a {
                padding: 8px;
                text-decoration: none;
                font-size: 36px;
                color: #818181;
                display: block;
                transition: 0.3s;
            }
            .overlay a:hover, .overlay a:focus {
                color: #f1f1f1;
            }
            .closebtn {
                position: absolute;
                top: 20px;
                right: 45px;
                font-size: 60px !important;
                cursor: pointer;
                color: #fff;
            }
            @media screen and (max-height: 450px) {
                .overlay a { font-size: 20px; }
                .closebtn { font-size: 40px !important; top: 15px; right: 35px; }
            }
        `;
        injectCSS(cssStyles);

        // --- B. BANNER AD (Bawah) ---
        // Membuat container agar posisi iklan rapi di tengah
        var bannerContainer = document.createElement('div');
        bannerContainer.style.textAlign = 'center';
        bannerContainer.style.margin = '20px 0';
        document.body.appendChild(bannerContainer);
        
        // Load Script Banner ke dalam container
        loadScript('//www.highperformanceformat.com/56a53fe1b516182ec510a5fef87730f4/invoke.js', {}, bannerContainer);

        // --- C. POPUNDER AD (HighRevenueGate) ---
        loadScript('//pl20014110.highrevenuegate.com/bb/fd/99/bbfd9922fe91c5d18b043e992f3b6a39.js');

        // --- D. OVERLAY AD SYSTEM ---
        
        // 1. Load Overlay Scripts
        loadScript('https://js.wpadmngr.com/static/adManager.js', { 'data-admpid': '398361' });
        loadScript('//pl28176871.effectivegatecpm.com/d6/db/90/d6db9090613bcff091c8c46b7775ca7f.js');
        loadScript('//pl28176894.effectivegatecpm.com/641208a028e5cbce37a0b8fc50ec9aea/invoke.js', { 'data-cfasync': 'false' });

        // 2. Buat HTML Overlay
        var overlayHTML = `
            <a href="javascript:void(0)" class="closebtn" id="closeAdBtn">×</a>
            <div class="overlay-content">
                <center>
                    <div id="container-641208a028e5cbce37a0b8fc50ec9aea"></div>
                </center>
            </div>
        `;
        var overlayDiv = document.createElement('div');
        overlayDiv.id = "myNav";
        overlayDiv.className = "overlay";
        overlayDiv.innerHTML = overlayHTML;
        document.body.appendChild(overlayDiv);

        // 3. Logika Buka/Tutup Overlay
        function openNav() {
            var nav = document.getElementById("myNav");
            if(nav) nav.style.width = "100%";
        }

        function closeNav() {
            var nav = document.getElementById("myNav");
            if(nav) nav.style.width = "0%";
        }

        // Event Listener untuk tombol close
        var closeBtn = document.getElementById("closeAdBtn");
        if(closeBtn) {
            closeBtn.addEventListener("click", closeNav);
        }

        // Eksekusi Overlay
        openNav(); 
    }

    // Jalankan initAds hanya jika body sudah siap
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAds);
    } else {
        initAds();
    }

})();
