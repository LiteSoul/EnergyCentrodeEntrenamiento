"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","86bc50dbac144eef9d468011f190d5e3"],["service-worker.js","783245cede65152fd6878e0db5500a07"],["static/css/app.397504586212cb474a4a8be913a48a5a.css","1658e0a8b3653791ea3ce16a4e9ea2cd"],["static/js/0.e84ed69a38e572426df7.js","f2e6554e6ff513cc8d7891d239f1edfd"],["static/js/1.770d47d5d219d82a05b4.js","119dc49e5bf12c5286ccdc462389afe3"],["static/js/10.3e6dfb8ddc2b38a57623.js","afc0783d2da3f1b0bfde80028995bb5f"],["static/js/11.395ca8e5099c93929329.js","561a6ba67343646644641eea4937ef21"],["static/js/12.f7205b785b948840afb7.js","67a6b1f2e49034c9ef2fb63312e8bc38"],["static/js/2.9eeda1cc3d9d191c32b9.js","e3fa8fb417f740abdd313458709768e9"],["static/js/3.8d6b1dbee169f8bda37b.js","8afe8acccab7ba5fdec819e233f998ff"],["static/js/4.67bbe8c6d77e84bafdbf.js","4e50a0fe7648a53d61c909adcc9ba113"],["static/js/5.9f9eaa7120769df12ed7.js","cea98dbaf6503b0482bf0b28af3d3a94"],["static/js/6.2f9e984078c604ca530b.js","57126f578af44746056aa9b5b2d11bcd"],["static/js/7.a673e9bcbeb944aaee9c.js","cb40ec64e56387e2c75859e7528bbfe7"],["static/js/8.27e6deb518db001368a3.js","866ad75320c86af7ec5a795196958bf7"],["static/js/9.f32fe4853db0f1b3c4e7.js","d80c9ff44133439f435cce7f20633968"],["static/js/app.21faeb7bad35162f230e.js","438f6c9e48407fa2c1bb07ffdb312f17"],["static/js/manifest.db7f489b33ab55195995.js","9c1f2627edcc84a0066877c247a46e08"],["static/js/vendor.7e766375db9659ccaca7.js","80cfaec1420403e9831ae2fdeccbabb4"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});