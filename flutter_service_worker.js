'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e8b5dd6a44dea5b75b2fcaa5df246c90",
".git/config": "3b855b2612739249a1561b23a1bcca73",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7fb172b79681a88e4c54ca6d145a5a5a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "abda3f5c329483fa6a5551d511d5c8cd",
".git/logs/refs/heads/main": "056f029826d707e7518bef22a7f4286d",
".git/logs/refs/remotes/origin/main": "76373fa625080d75be8f4884a9e45b53",
".git/objects/06/56a0005a8bdaa96efa6c39a87ae3068577e3f3": "1f4a87f89817386714cb4a702db46cd7",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0a/ce175e6d0cd0691b24ddca72d9f2e699c55c90": "dc765b056b3a7618bb666491f22bbc09",
".git/objects/0a/f21222d7821b7663b212185c4b18603ad8d27f": "b94ab7bb7b7c2f398fe2fcf6809805e2",
".git/objects/0f/dc1a98f6c0b40638a6b89688da8f55b96ab965": "2fe45f6d0f79decb3e137cf65a6e32a5",
".git/objects/17/76d99ef8c3bfac5616aa7adbe36cab8e41e7c5": "747a4be11055ae256dacb6182f8d09af",
".git/objects/17/aea413c43d45bd499bfee324b8538112ec42c8": "02cab025a727952d906aa6a59696ea25",
".git/objects/18/ca696f9c7f9744002cc447f7b024761a5f9d26": "c5ff1fb219e42cc92aaa6e767e32df8d",
".git/objects/1e/a8976b85d9c1fc69a2994d6a72fa1e961a90ff": "9fdc1d22d145fda63129fe23bce7cfae",
".git/objects/2b/4f7c8fc51cabcef4ed93652214b6c470657e4b": "0cc32af0672811982cd8983ec5b0367d",
".git/objects/35/c814152baf97bda0be94f6e671bee2a531e308": "7f9cf944565d8e8fec88af381b4109c2",
".git/objects/36/89f9887161f7cf9fb5468e55d1dee192cd3969": "4331f0ffcd91c26cf8dc2d5589b0278d",
".git/objects/37/919969f05e2ecc95c8f3da68c48c1369e5931b": "addcc65e59a7054135c36cceb787314e",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/4a/a480ff579d2e7a2501be043410c86121b98f70": "9f592adc243da20ca71e6eaaa7c7a1f4",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/55/01355418d0361c225ad0d13360c8daab9f78ca": "cdb3bb5b852b9fc71546bd74a8656acc",
".git/objects/56/0f675fea054e0ae91c33c3b95b99c2a3047cb0": "2c9115228f841c631250b1b6cc65c24f",
".git/objects/56/c32d1792a24f0cd960cebf691ebfcef92b9495": "622369502a1a7f92ef7a08ebfc69868b",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/e6466d126449c175abc3f6575fd99cc8f174fc": "dd6c0fff65fca2e8034e533d888e52e7",
".git/objects/5d/fca2be5397240c5ba6dcbfb13b6562eff301b0": "17961454a89f79e9c08ebd220cef5ada",
".git/objects/5f/080a0e6b20845b53346937321ae2382a4ab09c": "f195006413c1053da0ab4e33781bf19d",
".git/objects/5f/67abdcc75ebd763139997d7419660abfc8f194": "988edc24951cfc594ee42429693eb888",
".git/objects/60/3b9044e9dac5a29b07de771774116c1c307917": "0dc5b698430c2330c230fca9fedae283",
".git/objects/61/7a78dbd165bd8472f3da9e26aedc98c745afa9": "48145f097580dbcf38fafc0d3cabb126",
".git/objects/64/43842424c135ec7c2cb7336db2305ebec57520": "5133812b1bcdc1ec4224ddfd77fe8f0e",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/38f236f12f0a9d062020253e3758f17c7bd628": "68726eca593054dcd9ddba1da29bcc40",
".git/objects/83/6d409eec95c820888d541d9cdef0aad979c6d8": "de8c7a9f20a6d9fba5017f1c523d10b2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/74401d3a90fef1cd6e9f0889a1a5a7906d455a": "c78949c46f28ce54fd53ad3285cb912f",
".git/objects/87/ce9fc9bcef25f8317e04973be2cacb9526fd6a": "b973403bf76376736996da363079d9b6",
".git/objects/8b/f82cece1da361de59df7741ffd80b47df14e4e": "d71fa84be5ec547c615cf2d1a2fe1692",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/1aff303b56038947aba5f59898e839365acdba": "55c84fd8be4882ccd30a3c45b9b2c091",
".git/objects/91/4047a68beb676c867b1394e1e7e0ddc50b472d": "f0a0e85e8000385242dacafdcf47f81f",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9a/79e08e28d44368a23ccb1aac248b4aad0f6ad0": "8891a97bc157c19d109812aba6ab8912",
".git/objects/a0/eabad4fa75feedf22a261268c23c121be5f68c": "88bd0197e6b3648dd4d9d44f624a319d",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/4400941553654be888d97ed45b9f261d1f84a8": "5dbb7d415cb43a64dc0437d6123fe84f",
".git/objects/b3/5d8539fa3759e0d5d55341dbc5075907efa991": "a166b39f5b8b402ea10afb6bd7163279",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/b5dbe338ba5df6877390d54d04dee2b9537d8f": "7014cc6ea6f6ae1246ee91e80a12c617",
".git/objects/b9/cafdbdd9c35f0dec459f7f38f90c83baaf4415": "85c222e9271ab730babfd68db762dd49",
".git/objects/c1/3d418c0679f5abbad3368346f5c259b472c993": "d1001960259861328c8e538bceea3b6e",
".git/objects/c2/187b960d5ab7223528e06b3c3da114dfa6f32a": "85dd651c8d1c6002342e0d281842a32a",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cf/766ec8f9c0fa467f96e2bfc888a73be9602e34": "485ab520609c8956b12b3854c849fac9",
".git/objects/cf/ff112f09e481d485c1c284dad35cdc250d3f4d": "39df873a162a2f90b595ca6e2240e58b",
".git/objects/d2/93f646cae0a9be603976a4073fdbaefdc66b0c": "6066ee9fbd2f13bc75a365e70457b190",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/8175f0e8a3d1ef422595e562f89696af05ce0f": "6c0d523db45a2f69cfd4ceafa053e0a1",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/c45219601da62c10b10c3ec9d91fc632ffc8c8": "a490520d40ef57645435e3e361a7d930",
".git/objects/e7/65852f03fd3dad17604df9520e24d715ea7a27": "a0f8255e63b3858d8ff332285be6df39",
".git/objects/e8/9d9d8855ea86dedf7a693e589e323f486c675a": "0c0f0b0febf155f1d70e5be278c0d145",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/73541960c95e9294fd5c59c64f955011e46ea6": "6946b4843901785e6cfc902ee33851c7",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/4f91e6451e374b9523483543eb1afd4121c860": "3b2c4f1ef97e47a0b56309fa8667ea5e",
".git/objects/fa/3d620fd87c5920b1ac99cc0d04b951bb4af685": "a4b5f65f84c0f7a8cf30580d8cb2791f",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "f12f0a31a291ed807267a5545d97b70e",
".git/refs/remotes/origin/main": "f12f0a31a291ed807267a5545d97b70e",
"assets/AssetManifest.bin": "13a529328d498c792adb93ac8ecbf40c",
"assets/AssetManifest.bin.json": "5cfc60eeff6e401dc44b8ca4fa6f443e",
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
"assets/NOTICES": "09cf667ded496a554e8341420b055616",
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
"flutter_bootstrap.js": "50fe0072194c09c8d9e2e0aa441278cb",
"icons/Icon-192.png": "fc86c8bd6197a02c148e843d71270786",
"icons/icon-512.png": "fc86c8bd6197a02c148e843d71270786",
"icons/icon-maskable-192.png": "fc86c8bd6197a02c148e843d71270786",
"icons/icon-maskable-512.png": "fc86c8bd6197a02c148e843d71270786",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "816d165127d426169c4d684eb4e35304",
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
