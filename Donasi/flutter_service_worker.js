'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b5ce7bd9bdfe15c774dc523ebc04a9ec",
"index.html": "4007e6e31aa65f09f012f75bd0e738a0",
"/": "4007e6e31aa65f09f012f75bd0e738a0",
"main.dart.js": "f41c4b1058db6145710d2cb0c7e53483",
"favicon.png": "22f347997df00585ac2c835a0fa3afa4",
"icons/Icon-192.png": "22f347997df00585ac2c835a0fa3afa4",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5f4a82460294a8bb0afa2b576e264282",
"assets/AssetManifest.json": "48393ea5ab1abb42970a988c46f86072",
"assets/NOTICES": "fea1037298e7c458467fdab20838f294",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/img/favicon.ico": "556f31acd686989b1afcf382c05846aa",
"assets/assets/img/wakaf/umkm.jpg": "ad6bf37cbb43b1a0a1e1ae34e90a9e2b",
"assets/assets/img/wakaf/masjid.jpg": "0cb17730977b4b94fecfe5c7c0fc4782",
"assets/assets/img/wakaf/tanah.jpg": "8514ada6ec6aa5e9c75f729ff7c27d31",
"assets/assets/img/logobyi.png": "c87e9dd72c20c5632c26f501ad00609e",
"assets/assets/img/logobyi-white.jpeg": "22f347997df00585ac2c835a0fa3afa4",
"assets/assets/img/infaq/duat.jpg": "4a65c04559c38a09128949f1600fa064",
"assets/assets/img/infaq/jumat.jpg": "5ab0d0053cac7b20bbbf43f94e932aec",
"assets/assets/img/infaq/qurban.jpg": "d96d817eb5ae31152c22c217ce857cd5",
"assets/assets/img/infaq/bencana.jpg": "9aa24c0bb075cabab0f11aa38927c69f",
"assets/assets/img/infaq/yatim.jpg": "239bf459da4a3d3de5d36b3c4b52fdab",
"assets/assets/img/bank/BNI.webp": "2c048b0f25a76e2dfad413cf9ff1a325",
"assets/assets/img/bank/gopay.png": "0990883c4bbdd11cccfa57511b2bc8b1",
"assets/assets/img/bank/dana.png": "4232b2f2d70bfd7cc7562a7c48356ffb",
"assets/assets/img/bank/BSM.png": "34351dc32f01594b88090969af894c41",
"assets/assets/img/bank/ovo.png": "0d80cdeb60fe20fc233a7d1aa52763b8",
"assets/assets/img/bank/BNI-logo.png": "b8397be1bff2dd041e49f2ccac3795d9",
"assets/assets/img/bank/Mandiri.webp": "8cee425a56f29501bc7a0e61800db42d",
"assets/assets/img/pembinaan/fidyah.jpeg": "84d4a5bc9362b0f13e7509a82cdce0fd",
"assets/assets/img/pembinaan/lahan.jpeg": "197daefc9a1d8cee3e6ed7a7817155fe",
"assets/assets/img/pembinaan/zakatEmas.jpeg": "09137bbd9591f0c6d60c9af4dc447658",
"assets/assets/img/pembinaan/yatimTajil.jpeg": "898b6d72157fff6a1fd725be5bdda63f",
"assets/assets/img/pembinaan/yatimTHR.jpeg": "573157c5fb37b2a0db172d2d8ef1938d",
"assets/assets/img/pembinaan/santripreneur.jpg": "bfe47157a82f0005b3b6a33eeaf6071a",
"assets/assets/img/pembinaan/beasiswa.jpg": "ccd3502351d6f023e6dad7bfc9c5c866",
"assets/assets/img/pembinaan/tahfidz.jpg": "b5d243514474c18886bc283a7c768717",
"assets/assets/img/pembinaan/zakatFitrah.jpeg": "f2dd343d7a07c4e1f3e0cbb6c9924d91",
"assets/assets/img/pembinaan/profesi.jpeg": "39d8ed4a0524463e5c711526142d30ee",
"assets/assets/img/pembinaan/lomba.jpeg": "d93d5dd96269cadc3eb2414d4ea5b070",
"assets/assets/img/pembinaan/sembako.jpeg": "a442f14c24b23329d7e0f26186666d33",
"assets/assets/img/gmail.png": "cc25f1c11692b0d8677340604e8726b8",
"assets/assets/img/bg-masthead.jpg": "d41f4758c194f857686beb03c49717c0",
"assets/assets/img/program/program1.jpg": "38207ab3a465786ecda751fca4e66b99",
"assets/assets/img/program/program2.jpg": "b07f9f91bf53af305a553fc890dd786e",
"assets/assets/img/program/program3.jpg": "88e3595eb4de8c7a9e81957a451782bd",
"assets/assets/img/program/program7.jpg": "8ddead3411075f9a36654702c4151819",
"assets/assets/img/program/program6.jpg": "0f2eaf766be7d32e6d789a4f78f879b9",
"assets/assets/img/program/program4.jpg": "495f44088a73fe5d7f1cba08e54b1b46",
"assets/assets/img/program/program5.jpg": "2a325d74ef226cca554ebb10fdaeb75a",
"assets/assets/img/program/program8.jpg": "002b71e72cfdcf02cf1c6d4379b8717c",
"assets/assets/img/logobyi.ico": "972470c4df692f68ab24088e7cb20593",
"assets/assets/img/zakat/zakat-emas.webp": "3998c6c08e7ea801bc0cf50ead1530b4",
"assets/assets/img/zakat/zakat-penghasilan.webp": "10a90e130136cf0468a5b6fc75819918",
"assets/assets/img/zakat/zakat.jpg": "67a1527194cc776f78cf4912eda4cbc8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
