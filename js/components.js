var baseUrl = "https://berkahsahabatyatim.com";

Vue.component('footer-byi', {
    template: `<footer id="donate" class="wrapper site-footer mb-3 bg-light text-dark" role="contentinfo">`
        + `        <hr class="divider my-0 mb-5" />`
        + `         <section class="wrapper block-section footer-widget">`
        + `            <div class="container overhidden">`
        + `               <div class="contact-inner">`
        + `                  <div class="row">`
        + `                     <div class="col-md-12">`
        + `                        <div class="row">`
        + `                           <div class="contact-list col-md-5 mb-3">`
        + `                              <aside id="custom_html-3" class="widget_text widget widget_custom_html">`
        + `                                 <h1 class="widget-title">Yayasan BYI</h1>`
        + `                                 <br/>`
        + `                                 <div class="textwidget custom-html-widget">Berkah Yatim Indonesia adalah Yayasan Amal Non Profit Terdaftar di Kemenkumham RI yang fokus kepada pengelolaan dana sosial untuk Pondok tahfidz Al Quran Yatim dan Dhuafa di Indonesia.`
        + `                                    <br /><br />`
        + `                                    Sekretariat Pusat :`
        + `                                    <br />`
        + `                                    Jalan Limbangansari Kp. Tipar Kaler RT 02 RW 05 Desa Limbangansari Kec/Kab Cianjur Jawa Barat`
        + `                                    <br /><br />`
        + `                                    <div class="mb-1"><a  style="color: #42a5f5;" href="https://wa.me/6281912002001"><img  class="mr-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/500px-WhatsApp.svg.png" width="25" height="25"> 0819-1200-2001</a></div>`
        + `                                    <a style="color: #42a5f5;" class="mb-2 d-block" href="mailto:yayasanberkahyatimindonesia@gmail.com"><img  class="mr-1" src="assets/img/gmail.png" height="20"> yayasanberkahyatimindonesia@gmail.com</a>`
        + `                                    <a style="color: #42a5f5;" href="\${baseUrl}/toc.html">Syarat dan Ketentuan</a>`
        + `                                 </div>`
        + `                              </aside>`
        + `                           </div>`
        + `                           <div class="contact-list col-md-3  mb-3">`
        + `                              <aside id="custom_html-4" class="widget_text widget widget_custom_html">`
        + `                                 <h1 class="widget-title">Donasi</h1>`
        + `                                 <br/>`
        + `                                 <div class="textwidget custom-html-widget">Salurkan bantuan Anda melalui Rekening yang telah kami sediakan :`
        + `                                    <br /><br />`
        + `                                    Rekening Syari’ah Mandiri: <br />`
        + `                                    <span class="js-copy-bsm-btn" style="color: #42a5f5; cursor: pointer;">714 8434 306</span> <br/>`
        + `                                    Rekening Mandiri: <br />`
        + `                                    <span class="js-copy-mandiri-btn" style="color: #42a5f5; cursor: pointer;">182 000 664 5022</span> <br/>`
        + `                                    Rekening BNI: <br />`
        + `                                    <span class="js-copy-bni-btn" style="color: #42a5f5; cursor: pointer;">118 0279 271</span> <br/><br/>`
        + `                                    a.n <i>Yayasan Berkah Yatim Indonesia</i>`
        + `                                 </div>`
        + `                              </aside>`
        + `                           </div>`
        + `                           <img src="\${baseUrl}/assets/img/logobyi-white.jpeg" class="img-fluid col-md-4 mb-3 " alt="Responsive image" `
        + `                           `
        + `                           >`
        + `                        </div>`
        + `                     </div>`
        + `                  </div>`
        + `               </div>`
        + `            </div>`
        + `         </section>`
        + `         <br/>`
        + `         <!-- footer site info -->`
        + `         <!-- #colophon -->`
        + `      </footer>`
});

Vue.component('navbar-byi', {
    template: `<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">`
        + `    <div class="container">`
        + `        <a class="navbar-brand js-scroll-trigger" href=\${baseUrl}>`
        + `            <img class="navbar-brand js-scroll-trigger" src="\${baseUrl}/assets/img/logobyi.png" width="50" height="53"/>`
        + `        </a>`
        + `        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>`
        + `        <div class="collapse navbar-collapse" id="navbarResponsive">`
        + `            <ul class="navbar-nav ml-auto my-2 my-lg-0">`
        + `                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="\${baseUrl}">Home</a></li>`
        + `                <li class="dropdown mr-3">`
        + `                    <div class="nav-item">`
        + `                        <a class="nav-link js-scroll-trigger">Tentang Kami</a>`
        + `                        <div class="dropdown-content bg-dark">`
        + `                            <a href="\${baseUrl}/about/about.html#profil">Profil Yayasan BYI</a>`
        + `                            <a href="\${baseUrl}/about/visimisi.html#profil">Visi Misi</a>`
        + `                            <a href="\${baseUrl}/about/pengurus.html#legal">Kepengurusan</a>`
        + `                            <a href="\${baseUrl}/about/legalitas.html#legal">Legalitas</a>`
        + `                        </div>`
        + `                    </div>`
        + `                </li>`
        + `                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="\${baseUrl}/album.html#album">Dokumentasi</a></li>`
        + `                <li class="dropdown mr-3">`
        + `                    <div class="nav-item">`
        + `                        <a class="nav-link js-scroll-trigger">Program Kerja</a>`
        + `                        <div class="dropdown-content bg-dark">`
        + `                            <a href="\${baseUrl}/program/pondok.html#services">Pendidikan dan Pembinaan Pondok Tahfidz Yatim & Dhuafa</a>`
        + `                            <a href="\${baseUrl}/program/pondok.html#services">Pembangunan dan Pembinaan Kampung Tauhid</a>`
        + `                            <a href="\${baseUrl}/program/beasiswa.html">Beasiswa Pendidikan Formal untuk Yatim & Dhuafa</a>`
        + `                            <a href="\${baseUrl}/program/lahan.html">Pembebasan Lahan untuk Pondok Tahfidz Yatim & Dhuafa</a>`
        + `                            <a href="\${baseUrl}/program/masjid.html">Pembangunan Masjid</a>`
        + `                            <a href="\${baseUrl}/program/pondok.html#services">Pembangunan Pondok Tahfidz Yatim & Dhuafa</a>`
        + `                            <a href="\${baseUrl}/program/ekonomi.html">Pemberdayaan Ekonomi Masyarakat</a>`
        + `                            <a href="\${baseUrl}/program/santripreneur.html">Kafalah Du\'at</a>`
        + `                            <a href="\${baseUrl}/program/bantuan-bencana.html">Bantuan Kemanusiaan</a>`
        + `                            <a href="\${baseUrl}/program/santripreneur.html">Pembinaan Pemuda Berdaya</a>`
        + `                            <a href="\${baseUrl}/program/santripreneur.html">Pengelolaan Wakaf Produktif</a>`
        + `                        </div>`
        + `                    </div>`
        + `                </li>`
        + `                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="\${baseUrl}/donasi.html#donate">Donasi</a></li>`
        + `                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="\${baseUrl}/kegiatan-byi.html#activity">Kegiatan</a></li>`
        + `                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="\${baseUrl}#contact">Hubungi Kami</a></li>`
        + `                <li class="dropdown">`
        + `                    <div class="nav-item">`
        + `                        <a class="nav-link js-scroll-trigger">Artikel</a>`
        + `                        <div class="dropdown-content bg-dark">`
        + `                            <a href="\${baseUrl}/artikel/manfaat-sedekah.html#main-content">Manfaat Sedekah</a>`
        + `                            <a href="\${baseUrl}/artikel/wakaf.html#main-content">Keutamaan, Rukun & Syarat Wakaf</a>`
        + `                            <a href="\${baseUrl}/artikel/zakat.html#main-content">Syarat Wajib Zakat & Cara Menunaikannya</a>`
        + `                            <a href="\${baseUrl}/artikel/penerima-zakat.html#main-content">8 Golongan yang Berhak Menerima Zakat</a>`
        + `                            <a href="\${baseUrl}/artikel/qurban.html#main-content">13 Tips Memilih Hewan untuk Kurban</a>`
        + `                        </div>`
        + `                    </div>`
        + `                </li>`
        + `            </ul>`
        + `        </div>`
        + `    </div>`
        + `</nav>`
});