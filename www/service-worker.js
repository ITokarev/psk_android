/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","459c5ab9f611077d551a31e421246daa"],["bower_components/app-layout/app-drawer/app-drawer.html","7202f494498037010fa0f8ab4e5b8e38"],["bower_components/app-layout/app-header-layout/app-header-layout.html","5a70b626b680d14cfad7bc8b2ef5979e"],["bower_components/app-layout/app-header/app-header.html","81f655f65c5a3352e68952e2902fbcdf"],["bower_components/app-layout/app-layout-behavior/app-layout-behavior.html","3e717141f9467c6ceb59c8434c6c4bfc"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","1a8e12a45416bcbdd689b0ace02cd89b"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","47ef4a1229fe38f7ebb0b846676908c9"],["bower_components/app-layout/app-scroll-effects/effects/blend-background.html","f7be47bc63ddad378ebb19798a670710"],["bower_components/app-layout/app-scroll-effects/effects/fade-background.html","94bdcaadda2cfc164868fb8295a6ac29"],["bower_components/app-layout/app-scroll-effects/effects/material.html","5e81900fc8e6fb483128ea4c3830c814"],["bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","c6a0b90c8270735b68fd2c2749814b00"],["bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","575649c6918d2d48e5fe1ff583c42050"],["bower_components/app-layout/app-scroll-effects/effects/resize-title.html","95fb08f2750468189974d1715adcd6af"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","acd75cbe104907610e8757c8c19f1849"],["bower_components/app-layout/app-toolbar/app-toolbar.html","be25db6cdd34a226aa6d76cba532e0f5"],["bower_components/app-layout/helpers/helpers.html","71ade604e4727972f0fec9ed0b42daaa"],["bower_components/app-route/app-location.html","f4819c6320f2d1d68581e4fafc88f7fd"],["bower_components/app-route/app-route-converter-behavior.html","b49cf7841e09cdffef84858b2a795dc1"],["bower_components/app-route/app-route.html","298c26839fa960149c7e72c96e1312b4"],["bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-client.html","bc3980ddf59cf4a4e17e0616cce69815"],["bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror.html","1a9514a2468e2cfefeb11d53844d3684"],["bower_components/app-storage/app-indexeddb-mirror/common-worker.html","7f8cb4b39be321d1eb1e61ef2c585be0"],["bower_components/app-storage/app-network-status-behavior.html","1e0c73cb1435119cf506a185f10be6c0"],["bower_components/app-storage/app-storage-behavior.html","929f20c110deeb5d31191be7cd94e151"],["bower_components/firebase/firebase-app.js","af54178026ccfc8592b41c5c90756ab9"],["bower_components/firebase/firebase-auth.js","dffedd32a96dd1bc2c7ed9d89d63e19c"],["bower_components/firebase/firebase-database.js","16497520ea94fd05a1e9992837c54f55"],["bower_components/firebase/firebase-messaging.js","951dd2555bd9d59ce4445d4b2670dbce"],["bower_components/firebase/firebase-storage.js","fb08619253235e00074881c01f97a841"],["bower_components/font-roboto/roboto.html","3dd603efe9524a774943ee9bf2f51532"],["bower_components/geo-location/geo-location.html","132c5a502e997bd36528958b6da1e7ba"],["bower_components/google-apis/google-maps-api.html","9e02da0188e6fb271810ce5f455ac87c"],["bower_components/google-map/google-map-marker.html","372c3d4c3d83ac3f87692c3555c7105f"],["bower_components/google-map/google-map.html","ef550748e9c34bbd873b5379e58bd918"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","ac6e771ca19ce5b5eb70337d6ef9cc77"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","f86200fcbe1a4c7351e303d9808eff9b"],["bower_components/iron-behaviors/iron-button-state.html","fed347a4ff8ae3b98153664f7f925b1c"],["bower_components/iron-behaviors/iron-control-state.html","7e4db589b07f076365d38301fb3c08ea"],["bower_components/iron-flex-layout/iron-flex-layout.html","606d8bd2b9db38cff965cbd5b467fb26"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","5d426cf6bcf1f50f9906db9f0694fac8"],["bower_components/iron-icon/iron-icon.html","3ce778618c6ea7739678cc0a3fadc562"],["bower_components/iron-icons/iron-icons.html","f167b940536136378cba6ddbc6bb00d0"],["bower_components/iron-icons/social-icons.html","56c1e8822dc1f653ba5637e73246a752"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","39fabe232ed152a858a8e3b3113e8bfd"],["bower_components/iron-input/iron-input.html","72ff0e20ce7a0c16907f9677f7f9ea5d"],["bower_components/iron-jsonp-library/iron-jsonp-library.html","3f0455ee420c5840f6c98e7e69b5f519"],["bower_components/iron-location/iron-location.html","ba32b1452cf4bdd54b63965079550d59"],["bower_components/iron-location/iron-query-params.html","2c46ad9c30728b46104791a7ed366f83"],["bower_components/iron-media-query/iron-media-query.html","d1bf86931b43d7e263f31b325dd01fd0"],["bower_components/iron-meta/iron-meta.html","66e9e91fefbd6251a8268cb8c3f28910"],["bower_components/iron-pages/iron-pages.html","b62fc179e27604250b81a0e9c06069da"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","22f9eee6636156dd66d6a6a7b30483f9"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","2a82fa6f8d6ae52fbff77ed0d6f3a7ea"],["bower_components/iron-selector/iron-multi-selectable.html","cd9121423286a7feb2eba32147f9b09c"],["bower_components/iron-selector/iron-selectable.html","4c44d138e61c5017e91cb93b533badb0"],["bower_components/iron-selector/iron-selection.html","64581a310e548e02879cbdce041ff6ef"],["bower_components/iron-selector/iron-selector.html","7bb5e6a98fc1ecc8c622f4fad695604e"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","70d38edf8587e857852b4ebb78fe8752"],["bower_components/paper-behaviors/paper-button-behavior.html","00a35cba14b4a0fe026c51e38e658d05"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","f28b096214b40e41feef91cffd6b9930"],["bower_components/paper-behaviors/paper-ripple-behavior.html","7565a0057328e9ab539dedb34ec691ce"],["bower_components/paper-button/paper-button.html","9f2e613fa7e0791695ef934f1e2f6fad"],["bower_components/paper-icon-button/paper-icon-button.html","eea8e5305e22f196cd3fb3fa0b924633"],["bower_components/paper-input/paper-input-addon-behavior.html","7b49ea712862dd0b4d28e20eefdccb67"],["bower_components/paper-input/paper-input-behavior.html","066419ea8094f3665da1aebcb15f8a33"],["bower_components/paper-input/paper-input-char-counter.html","9dceb01e109441dc16886dc47061e1b3"],["bower_components/paper-input/paper-input-container.html","68a8f0ff2d4449622465322c22e15914"],["bower_components/paper-input/paper-input-error.html","a3a1e1460312a6754437d7d7c5ade99b"],["bower_components/paper-input/paper-input.html","0e6ee6947575704892b9127d85284d6e"],["bower_components/paper-ripple/paper-ripple.html","3cc37485f560b6aac53cfaf290c8c500"],["bower_components/paper-styles/color.html","549925227bc04f9c17b52e2e35cd2e26"],["bower_components/paper-styles/default-theme.html","5357609d26772a270098c0e3ebb1bb98"],["bower_components/paper-styles/element-styles/paper-material-styles.html","8d8d619e6f98be2c5d7e49ca022e423c"],["bower_components/paper-styles/shadow.html","1f23a65a20ed44812df26a9c16468e3f"],["bower_components/paper-styles/typography.html","195497070df39ff889ce243627cf6589"],["bower_components/polymer/lib/elements/array-selector.html","bf73af4a8f88068a5bfef707c7571dad"],["bower_components/polymer/lib/elements/custom-style.html","292d534d6bbdf333992510e5153fddcf"],["bower_components/polymer/lib/elements/dom-bind.html","c9acb3f5b89393127a4d08dbf4338ec0"],["bower_components/polymer/lib/elements/dom-if.html","b7bb1d1a66a8bd6efc03e602616a60c1"],["bower_components/polymer/lib/elements/dom-module.html","918384c78592f42ec3457ef32273673a"],["bower_components/polymer/lib/elements/dom-repeat.html","8e57c1a1e29d14695c2d7b0ced6612dd"],["bower_components/polymer/lib/legacy/class.html","d557c3d922e394929aa534f8e81c7192"],["bower_components/polymer/lib/legacy/legacy-element-mixin.html","78e4e3cd68c6daf024bea96027734728"],["bower_components/polymer/lib/legacy/mutable-data-behavior.html","b5cfca11c76f205392fc66b0467bc710"],["bower_components/polymer/lib/legacy/polymer-fn.html","965e5fceed10bffe0280d72a93eafb16"],["bower_components/polymer/lib/legacy/polymer.dom.html","b7093d580eb00d5eeedbaea7793e73e7"],["bower_components/polymer/lib/legacy/templatizer-behavior.html","3bd7e4796cea6ebc15cb2c49b37fa733"],["bower_components/polymer/lib/mixins/dir-mixin.html","6383106f855b349dc710cc6c3b93ff47"],["bower_components/polymer/lib/mixins/element-mixin.html","2e492052512e63fbe24c8b7b26c7fc9e"],["bower_components/polymer/lib/mixins/gesture-event-listeners.html","122a829a0a8853fe4724a3cb6dc2fbec"],["bower_components/polymer/lib/mixins/mutable-data.html","b0024f042d3c108d49e6fb15f1caec94"],["bower_components/polymer/lib/mixins/properties-changed.html","1f95de4651bab20e57c6299372a5006e"],["bower_components/polymer/lib/mixins/properties-mixin.html","5a97ef7c17a3d5f482c4e78e399b3c6d"],["bower_components/polymer/lib/mixins/property-accessors.html","0af3f7217e4198e7a08fa3d4e4f99636"],["bower_components/polymer/lib/mixins/property-effects.html","09acff8ae71d7aaa5132cf414c88f649"],["bower_components/polymer/lib/mixins/template-stamp.html","43814d5197e3783cbe057ff89abbcbf9"],["bower_components/polymer/lib/utils/array-splice.html","46e262c74f231568e1f2b3611e9ff431"],["bower_components/polymer/lib/utils/async.html","c6bb0c7d3f0d70baa44fadb930c8f364"],["bower_components/polymer/lib/utils/boot.html","22c447dba7762357f2b9115cad1cd839"],["bower_components/polymer/lib/utils/case-map.html","a856a286bd574d63e2daff1eb242c883"],["bower_components/polymer/lib/utils/debounce.html","3551361a3b3aa90084c39db945c7e2ae"],["bower_components/polymer/lib/utils/flattened-nodes-observer.html","4675fb9b44d8fda333fb494bc50b31f2"],["bower_components/polymer/lib/utils/flush.html","3ab0707b6cbbb522540c90cddee4b7a8"],["bower_components/polymer/lib/utils/gestures.html","4acc960af960e6a5e143c750e76b0cc7"],["bower_components/polymer/lib/utils/html-tag.html","146ac55693c500fc95fb718444c8f6d5"],["bower_components/polymer/lib/utils/import-href.html","9ff4a1ce8250c6a319fdd5d5b5baafd7"],["bower_components/polymer/lib/utils/mixin.html","0e402a2846f03bc9b98ed98279afc098"],["bower_components/polymer/lib/utils/path.html","5669afcc7c95d669e13b10082f9e34c4"],["bower_components/polymer/lib/utils/render-status.html","584661754d918a79daf13a9f40681bdd"],["bower_components/polymer/lib/utils/resolve-url.html","cd1147bf7ce929dbadf7011494e9a4ef"],["bower_components/polymer/lib/utils/settings.html","73102a290ee03e85986aa9d7f0f791cf"],["bower_components/polymer/lib/utils/style-gather.html","3d483350c1f242f4f13344c2b0741c4e"],["bower_components/polymer/lib/utils/templatize.html","d3ca9f87e5d0598d7ac6c1c92a9bc074"],["bower_components/polymer/lib/utils/unresolved.html","3e376ec660cb2345fa14280a13cccf62"],["bower_components/polymer/polymer-element.html","de610d0b6dd86765641d2a11a1aa2504"],["bower_components/polymer/polymer.html","d57b03597f9f061bec218da2bdc6fd1a"],["bower_components/polymerfire/firebase-app-script.html","df1897d11acb9c75522859d372873358"],["bower_components/polymerfire/firebase-app.html","ba1f298c3cc754e71ea2e10cb0bf1824"],["bower_components/polymerfire/firebase-auth-script.html","12fe480c116018252246dd4366d1a1ef"],["bower_components/polymerfire/firebase-auth.html","42f649b4e96416d3592cb5ec07337c78"],["bower_components/polymerfire/firebase-common-behavior.html","b9d68d39133ae903b4afa5f2f93afc24"],["bower_components/polymerfire/firebase-database-behavior.html","b4e4ba2d91cae22d66e12ab23166c62e"],["bower_components/polymerfire/firebase-database-script.html","b280409885282a43d9b5dd1ee5226fed"],["bower_components/polymerfire/firebase-document.html","40ede2e6e8b42742f4b86725bceae6b1"],["bower_components/polymerfire/firebase-messaging-script.html","33e0a36b60580c0bcbde7440ce9216e7"],["bower_components/polymerfire/firebase-query.html","f6a651006ac5dbac9e3c8bf3a16e0ad0"],["bower_components/polymerfire/firebase-storage-script.html","73903c0e578289a5910eaad341a730ca"],["bower_components/shadycss/apply-shim.html","5b73ef5bfcac4955f6c24f55ea322eb1"],["bower_components/shadycss/apply-shim.min.js","ae5d678f352c9bc32697d344e3093ada"],["bower_components/shadycss/custom-style-interface.html","7e28230b85cdcc2488e87172c3395d52"],["bower_components/shadycss/custom-style-interface.min.js","beb2bced90a01d4e3e0c9ea89690fe4b"],["bower_components/webcomponentsjs/webcomponents-loader.js","596ad3dc06dfb78ecdc6bcee1d653f04"],["index.html","234610e2f5c9f74020d33b6ecc6be01a"],["manifest.json","1845171d3c4fe9ebe6a48852f4347b34"],["src/my-app.html","7561568977e0b677f9792e4a5fa2bb88"],["src/my-auth.html","85ccb81c4e9d4ae2cb5627dff479b540"],["src/my-icons.html","1618712b865f25904ddffef31c5d9db0"],["src/my-modal.html","94bc9da7e490aa56b989dd059577ed3e"],["src/my-view1.html","7eda3a10070ebda96bd379f2a989a86a"],["src/my-view2.html","69d392d9193d087fa860f27e5a6ca8b4"],["src/my-view3.html","b28397cb27eaa9165f1098eaf4cf75c0"],["src/my-view4.html","d664adab0f9a786dbed1e6b13853307e"],["src/my-view404.html","70c8fed83226aed3f9e05fd10fb6a99f"],["src/not-autorized.html","a1a44a25cbd10cf24e6b67162bfe7c7d"],["src/shared-styles.html","d5133ed0135bb42a87b98527f8f1c7aa"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function (body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function (kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function (kv) {
        return ignoreUrlParametersMatching.every(function (ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function (kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__).*"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function (e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function (){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function (e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function (e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function (r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function (n){n.put(e,r).then(function (){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function (e){return g.setTimestampForUrl(e,o,a)}).then(function (e){return g.expireEntries(e,c,i,a)}).then(function (e){r("Successfully updated IDB.");var n=e.map(function (e){return t.delete(e)});return Promise.all(n).then(function (){r("Done with cache cleanup.")})}).catch(function (e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function (){return Promise.all([caches.open(e),caches.open(t)]).then(function (t){var n=t[0],r=t[1];return n.keys().then(function (e){return Promise.all(e.map(function (e){return n.match(e).then(function (t){return r.put(e,t)})}))}).then(function (){return caches.delete(e)})})})}function u(e,t){return o(t).then(function (t){return t.add(e)})}function f(e,t){return o(t).then(function (t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function (e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function (e,t,n){"use strict";function r(e){return new Promise(function (t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function (){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function (){t(r.result)},r.onerror=function (){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function (r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function (){r(e)},i.onabort=function (){o(i.error)}})}function c(e,t,n){return t?new Promise(function (r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function (e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function (){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function (n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function (){var e=a.result;e>t&&(s.openCursor().onsuccess=function (n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function (){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function (n){return s(e,t).then(function (e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function (e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function (e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function (e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function (t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function (e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function (e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function (e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function (e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function (e,r){t[e.name]=n[r+1]})}return function (e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function (e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function (e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function (){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function (e){s.prototype[e]=function (t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function (e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function (e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function (e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function (e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function (e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function (t){return t.match(e).then(function (t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function (e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function (t){return t.match(e).then(function (e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function (e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function (r,c){var s=!1,a=[],u=function (e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function (e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function (e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function (e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function (t){var s,a,u=[];if(c){var f=new Promise(function (r){s=setTimeout(function (){t.match(e).then(function (e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function (e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function (r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function (e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function (e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function (e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function (e,t,n){t.exports=Array.isArray||function (e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function (e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function (e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function (e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function (n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function (e,t,n){!function (){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function (e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function (){if(arguments.length<1)throw new TypeError;return e=e.map(function (e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function (e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function (r){if(r.some(function (e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function (t,r){return n.put(e[r],t)}))}).then(function (){})},Cache.prototype.add=function (e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/\/bower_components\/webcomponentsjs\/.*.js/, toolbox.fastest, {"cache":{"name":"webcomponentsjs-polyfills-cache"}});




