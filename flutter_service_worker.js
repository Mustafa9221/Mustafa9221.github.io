'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d51ff3b3866e25c52d6ceda2485d200f",
"assets/AssetManifest.bin.json": "c3de54d32dc9eadc8b92b883d6d35f79",
"assets/assets/fonts/Agdasima/Agdasima-Bold.ttf": "1041c71540d6c99bb481b7ed7f3c3a60",
"assets/assets/fonts/Agdasima/Agdasima-Regular.ttf": "2d6b552d9764503dfcdf09fa542fb45a",
"assets/assets/fonts/Space_Mono/SpaceMono-Bold.ttf": "87357b7223ab3ed8c3da24f77f51d85f",
"assets/assets/fonts/Space_Mono/SpaceMono-Regular.ttf": "59c83e1fe244568db558bab69755a6dd",
"assets/assets/icons/company_logos/solutionave.svg": "c0d1c681613ed8e5a83ba43a0fe322ba",
"assets/assets/icons/skill_icons/bash.svg": "ace8ca295ac16d4dd7b56149b9c489cb",
"assets/assets/icons/skill_icons/cpp.svg": "44ebec8df5c99495bbd0005b163b7b34",
"assets/assets/icons/skill_icons/dart.svg": "423184deb153fa3d825f3b17d08225a1",
"assets/assets/icons/skill_icons/git.svg": "063b729e57da63d4b7334171ca604dff",
"assets/assets/icons/skill_icons/linux.svg": "211a8eb1e4d9de6b47a2e3583944a6ee",
"assets/assets/icons/skill_icons/mysql.svg": "8fe3df7bd4554cc5a539bab28e9a6339",
"assets/assets/icons/skill_icons/python.svg": "ab4eab1d8512e7a914cd3f42ab2104c3",
"assets/assets/icons/skill_icons/splunk.svg": "58a20c6d383f584010bbbdf12bfd5397",
"assets/assets/icons/social_icons/email.svg": "8c6305718fb93e10407f50569520ecc1",
"assets/assets/icons/social_icons/github.svg": "1d63d45aea9690a0f86cc1a2a5972e8f",
"assets/assets/icons/social_icons/linkedin.svg": "15cf9ebef4a8ddc72756fd6d8d2be471",
"assets/assets/icons/social_icons/x.svg": "9e82dc1955f17e809205a558ee1ce524",
"assets/assets/images/AboutMeHero.png": "b1b13a27582bc87af0ca09ef8bfea940",
"assets/assets/images/Banner.png": "e488a2bf45f311d42950e3199e93d3d7",
"assets/assets/images/projects/blink.png": "f808c22bc9fb77227d445b32b7b310e4",
"assets/assets/images/projects/encryptiondecryption.jpg": "f525e9f9e2ea93bf2382e6108fd1f95f",
"assets/assets/images/projects/fortinetFirewallBreacher.jpg": "b9a5a04fbd9c46af1efedc89acfcabb7",
"assets/assets/logo.png": "fc86c8bd6197a02c148e843d71270786",
"assets/FontManifest.json": "4e3a6b363dafaf89725e5656d39ac88c",
"assets/fonts/MaterialIcons-Regular.otf": "03fa8fd0b11b0d807641a42f8a9ea025",
"assets/NOTICES": "19e1e7fac453130a704f2ad4b92c918b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "fc86c8bd6197a02c148e843d71270786",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "3a576c04fcb48866e5309f25602ab6b1",
"icons/Icon-192.png": "fc86c8bd6197a02c148e843d71270786",
"icons/icon-512.png": "fc86c8bd6197a02c148e843d71270786",
"icons/icon-maskable-192.png": "fc86c8bd6197a02c148e843d71270786",
"icons/icon-maskable-512.png": "fc86c8bd6197a02c148e843d71270786",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "bfcf2bb6da4b0c567d3794cbb834c6a2",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
