HAVATEAM BAKIM SAYFASI
======================

Bu paket Cloudflare Pages üzerinde yayınlanan mevcut HavaTeam sitesinin
geçici bakım ekranıdır.

DOSYALAR
- index.html   : Sayfa içeriği
- styles.css   : Tasarım ve mobil uyum
- script.js    : Alt bilgideki yılı otomatik günceller

GITHUB'A YÜKLEME
1. GitHub'da havateam-website deposunu açın.
2. Depodaki mevcut index.html, styles.css ve script.js dosyalarını bu pakettekilerle değiştirin.
3. Dosyaları deponun ana dizinine (root) yükleyin; alt klasöre koymayın.
4. Commit changes ile kaydedin.
5. Cloudflare Pages otomatik yayınlamayı tamamlayınca havateam.tr adresini kontrol edin.

ÖNEMLİ
- liveries klasörünü silmeyin.
- README_TR.txt gibi diğer dosyaları silmeniz gerekmiyor.
- Bu paket mevcut site dosyalarının yerini alır. Önceki ana sayfayı korumak isterseniz
  GitHub commit geçmişinden geri dönebilirsiniz.
- Google Fonts internet bağlantısıyla yüklenir; fontlar yüklenemezse sistem fontları kullanılır.
