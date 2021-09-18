'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "3470eb70c4680671e72e779cbcb40fba",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "17725ff5b1771f898aa7cfe07c791f40",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a14133faaed3630d8e3c67e5a730b78f",
".git/logs/refs/heads/main": "a46090736fac85823ba6897b2d4572dd",
".git/logs/refs/remotes/origin/main": "c0f9c246cc062f9ccccdad99201ea395",
".git/objects/01/3ab945c58bf3ee98ce970ce32c6063acce745e": "7c82fac211ee0fb9e7373a515ef0e9ae",
".git/objects/06/14070b9681002b84d9ba4ab2b498ad6a5d3d8c": "8b594172e57ef25ff5541ec292234096",
".git/objects/08/035124468fd4eb74f35560dfa5cb48e5bb4e3b": "4252c9c4dd7c3d1e170f14e253397294",
".git/objects/09/0b1b865cbcc80e08da111707381eaced6e9d99": "dcb7a924e70c3b57dde2290d047db5c0",
".git/objects/0b/95f5c1a5c200650807b2c1f8e164e5388ad416": "522ca42a021b7571d1dce82fcca2d36d",
".git/objects/0c/7933223a4f102d1d7deb47fae0633fd721f69a": "140c05a20df148a2faa5766e2f7f1921",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/1f/71d2ae410a32702545925367b05e52b6ab5946": "c568cec144eb14a7831b8ea85531ac74",
".git/objects/2b/eed79ee71952405cf2743391e1bbbb20908cec": "358580fa37a9b860284dfaa30e857b6c",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/fff411250b4cdf01d5af2e2f16bf0024e3059b": "23901a81650327c9b774df01e8adecc8",
".git/objects/37/28ffbbe909b928b1a556364fa944297b795da3": "3589520130982f000c0a45bf95af2c97",
".git/objects/3b/64606ca83b8d243424e6227e1de7e707532c99": "b8fd222f557c57943fd62358820f710d",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/42/c8429a6f66c16dd434268ddb96c33f3706bc8e": "75316b153d8ae6edaa25e9644174efad",
".git/objects/45/4630e8dabd7436eef695f38779004df350ea5d": "f8e491b3ddfdb262331fd6cd9a745773",
".git/objects/4a/803c898efa6bcd4c33fc0b0c275c022f200e08": "22067b85df2a196b95d774ddab8709c8",
".git/objects/4f/b4cce8f79e0516fce819cb9e017d0c457fe0bd": "94d79efd7985ef323350d350c4692fb4",
".git/objects/55/7cf4eef60189ad5bbd320ba044546561b18054": "f91d3f70fc492407cc7d5c661fe3dbd7",
".git/objects/5e/b7dded7e0ccd264b420c28c7914354c894d4ac": "17875c39b14199fd2f5a81d469edec05",
".git/objects/64/75f45e198f82fd7cf78145422fe221100884c1": "11b50ee2c0e2d8fecc90c109d64e729b",
".git/objects/65/a4f0ee873e17f09e718ddc137c3e55bece9db4": "344bdbf2af1f55968bd548e5ea1801e8",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/6a/295e84818744b3badfc1ea5cebc155d4a76135": "44a23c069a1a4d25a8d0647d9d7b522b",
".git/objects/78/c667364bebfd19d6df491c0785cbfeb9325257": "93474f9f568d7a374ee425abf3ab46a7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/458942830cfbb549a14b05b3018b56c9c0eaec": "bf62aa634aca5a645a62d1eabd35ba46",
".git/objects/81/5a0e267de752f3ae75d4f54c9c2f3e60dcf2df": "38a3d98dc93a2d4482485efb9de5d9e5",
".git/objects/83/19a2537742db073a3b08e840287e7363f1947a": "77dcdf782338f6f3051a6f1fddffa03a",
".git/objects/85/57041d9846f9523a7e5a7dfaf7848265e1307e": "35b84e97b08aaf678cff262b210fa108",
".git/objects/97/0902d94d0b1bb5c680f004981f4c5b14f13ed5": "7b7de234ba682a87ac1ae732f3573c91",
".git/objects/99/ae99b552afef385ba8e14c64379e46795e6253": "bec1f6e0d6579a5620de9d97e4924a53",
".git/objects/9a/02bc6d2a62b235485000b02fd03fa1b92498c2": "7ec2f0ce62219c8c7795cbe73c806e4b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/d40bb36e3d9fb457162d8cee8ee1c04ad957d2": "7ba0f8674eda18ddfd4ddefabfc3be0c",
".git/objects/a2/c8dff56da0a696ab53892a8002a5179684a756": "91ab98d4d7f0a1a6c188866849994210",
".git/objects/a4/c4348c84d8bba5909ef9e6e4b760caeccb9923": "89b6dbaf958ed699ba7bca2bae2e0812",
".git/objects/a7/346dbc4bfa9b3dcf53e54e3e75fd090dbad479": "d4c746f96d66eb91f3ecce83ac92073c",
".git/objects/a8/294f50442daf6c97ba42a098618e6ba652ecee": "1c14370b9395ea3eac957c25b3709af3",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/a33961e311a809fe218e6a9e95916a3901cad6": "2fc2f8963351beebb8ff97a8f61ec665",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/cef366674cb4ae57e7b9d44d61786a7647adcd": "c6c23f14f936010f13cd12ee2026ad70",
".git/objects/b1/31b769131452bb6f95e585f6fc767db347a7be": "55fff013a3e6bc36b53d405fe0146acc",
".git/objects/b4/b24526495a7d1d29e7c5ac3c03afe2dbf377cc": "931ec2b334a701eeeed26462145ac053",
".git/objects/b4/da43f050815d0e67801a196978969f34124d3a": "42f29268fa10e36d7537c6741e1a6994",
".git/objects/b9/5e7ce13ca0dc4fd9749bbd01354c439bdac053": "0fe0b967e67669368766df77400eba7d",
".git/objects/c0/b1eb844b220213c9c83709b92e10c00cbfd344": "b402866e6b22387a18633f8aef610cb7",
".git/objects/c7/fefcde0fd945b78d199fb5b21658616734022f": "8f0cb0aa987e764a774991f577e513e6",
".git/objects/cc/79e4fa70bb0a0a8db6fc5ba66a12b3524ae1b2": "bd8ea49237089d9e837e4eb4bf329cf3",
".git/objects/cd/c83775c8841b7aca4e89baad0fc05c0dfe7073": "eb6220319fa32bc643e1c514255e35e5",
".git/objects/cf/0ae1e7fa6b0c481ef6cdbc598ff1a75397deee": "342c21f0ffc452e87fe998405fa2600c",
".git/objects/d6/b74db79d920540430001592ddfaf12f0cdd8a1": "e0fac6443b2bec15157a5d90be616818",
".git/objects/da/16f6e6e10d409e18e76bd17d4190d88037c54f": "0b04805c724acaf875810786392debb4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/2cca05b81996705153e4dbdc8b9632ce3bc5da": "852d127c8c9169cd6442e94c9ba799b1",
".git/objects/ec/98d670dbda1a87ac85473e53a0c47f14aef97b": "ee6c970b477480e5f8c2a11de0345800",
".git/objects/ed/ae63e72a3a8fed0b410416be8d22162053f07b": "f195f1a1117a0cd2026f63d590f79891",
".git/objects/ee/22efc28100f5e0b56dee1c70e82bc368be82bd": "3ef589fd1105741a49eebc4491ba4ea1",
".git/objects/fa/c6cecc63aba770af29c3d52c39c5e7eabdb559": "475e4a979d4fade6e4f24131a6c37573",
".git/objects/fd/b90a1e0e32119e013d00e7ed1701e8a7d4f2c8": "586df58cb8b0a795000fe53dcdfd2de7",
".git/refs/heads/main": "7169ce51c5a259fd4d4bd5d73139bc78",
".git/refs/remotes/origin/main": "7169ce51c5a259fd4d4bd5d73139bc78",
"assets/AssetManifest.json": "75e6f9caaf5b00e717e3269425dba0f7",
"assets/assets/fonts/KHMMOOL1.ttf": "2bdfb26ca7c50733b046a58739fce996",
"assets/assets/fonts/Siemreap.ttf": "01a09003da4063952afa7734f4f393af",
"assets/assets/images/logo.png": "c1d63087e82bc16f0aa800802708c7eb",
"assets/assets/json/db.json": "c167d9e12f31c792c8ae168525de6998",
"assets/FontManifest.json": "ee81c46d571a5cec139f8576e99ea322",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "644f9f5b744b20d4d61221b3d1996f82",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "1e5c773fd4c92340b05ee2424f10fbbe",
"icons/Icon-192.png": "742d225b614487ae955cddddc880c5a2",
"icons/Icon-512.png": "d518e449b1478535350bafdce649cb4c",
"icons/Icon-maskable-192.png": "7771e978b76b4b42176a9de40bd405d2",
"icons/Icon-maskable-512.png": "84d364c4b5e2ffcaaea693d99908bb43",
"ic_launcher.png": "e50c0b026849f51bc2b8dcfd04fc0c7c",
"index.html": "09077f6fccd8d16585bc4c8a25b16d79",
"/": "09077f6fccd8d16585bc4c8a25b16d79",
"main.dart.js": "b730693e03a5553c6bb787560425e61a",
"manifest.json": "c1e0325e33f23102244b70ff155379ae",
"version.json": "07245ba67b02b34a706d50c15fab299b"
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
