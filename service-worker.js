if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return o[e]||(c=new Promise(async c=>{if("document"in self){const o=document.createElement("script");o.src=e,document.head.appendChild(o),o.onload=c}else importScripts(e),c()})),c.then(()=>{if(!o[e])throw new Error(`Module ${e} didn’t register its module`);return o[e]})},c=(c,o)=>{Promise.all(c.map(e)).then(e=>o(1===e.length?e[0]:e))},o={require:Promise.resolve(c)};self.define=(c,d,s)=>{o[c]||(o[c]=Promise.resolve().then(()=>{let o={};const t={uri:location.origin+c.slice(1)};return Promise.all(d.map(c=>{switch(c){case"exports":return o;case"module":return t;default:return e(c)}})).then(e=>{const c=s(...e);return o.default||(o.default=c),o})}))}}define("./service-worker.js",["./workbox-14746471"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"https://colmexcode.github.io/frontend_code/./index.html",revision:"b0f1a894de3a80b24fce0d4b96a6a218"},{url:"https://colmexcode.github.io/frontend_code/assets/205002524f02ea8cbba3287ce0dea7ce.svg",revision:"22a20ed0b7e14d38855a96856657a8be"},{url:"https://colmexcode.github.io/frontend_code/assets/29355e5b98be61de1216fe9684f4c624.svg",revision:"b8450f682b24a01328fb470f5df80e73"},{url:"https://colmexcode.github.io/frontend_code/assets/2cd44edf31982265f2f78e77227d4fbc.svg",revision:"0028916ef95989a74ba6ec2800b01413"},{url:"https://colmexcode.github.io/frontend_code/assets/35a0741e77b2a6f9faf79006985bc9ba.svg",revision:"157dc860c6ecaacc80d6b776d34993a6"},{url:"https://colmexcode.github.io/frontend_code/assets/3bcb6b2393abbca524391137857eab2c.svg",revision:"e12e54316af48d7ce2b9d5837ac50467"},{url:"https://colmexcode.github.io/frontend_code/assets/4f38cedfd2fe58ddf06040dd860aa6c4.svg",revision:"829d1d2b5df6320ef227bc745d1fe215"},{url:"https://colmexcode.github.io/frontend_code/assets/72c554042e716c07a5538d572987a82e.svg",revision:"bc06f33a32283c6ea0ca3667c0e08ce5"},{url:"https://colmexcode.github.io/frontend_code/assets/77920cec412113bf6883d4f9f2bb5ac8.jpg",revision:"4dbd97113c79ae4480a25eb576684886"},{url:"https://colmexcode.github.io/frontend_code/assets/8069dbc466698fe4cb5b24a091dd7795.svg",revision:"dcd78a2733b8323698b595b06c3fc09c"},{url:"https://colmexcode.github.io/frontend_code/assets/9b25ca81e2f0e8d8b28ea3b6697481cf.svg",revision:"a28e0af8f887141366db6a34cc1187e4"},{url:"https://colmexcode.github.io/frontend_code/assets/9c12ae0fd59be79c8fe5251b7d912170.svg",revision:"40080d1fc4457b40794b1fff7f5de40e"},{url:"https://colmexcode.github.io/frontend_code/assets/9e4770139075b39fcaf236d2a4532ddd.svg",revision:"17a049edc5f7b499216065dbd3df39f9"},{url:"https://colmexcode.github.io/frontend_code/assets/a0a28ad063897d6a223662b8cfc8fbc0.svg",revision:"25709fe7eaa2c48d3786ea37b649cd31"},{url:"https://colmexcode.github.io/frontend_code/assets/b8f66a63a6dc714238ce6c2cb1c43fb3.svg",revision:"87136f22b09f0d857fc6f0db8d486e83"},{url:"https://colmexcode.github.io/frontend_code/assets/bae0a5c360822b51a00c146e41fbb070.svg",revision:"35620301ca78db53e1aa6a022f58c48a"},{url:"https://colmexcode.github.io/frontend_code/assets/dc0ca7555f12ea081f3f2eb1002acc49.svg",revision:"195b20ef92c805ffc3dce18325dd0af5"},{url:"https://colmexcode.github.io/frontend_code/assets/e7df7cb7c0075c61930d7115047ac1ac.jpg",revision:"3155259669e26361f01eae5917e8cc13"},{url:"https://colmexcode.github.io/frontend_code/assets/ee1a0b485389daa6455092e7be956dd1.svg",revision:"3895b0e9cf7167f14db215ee190d8b97"},{url:"https://colmexcode.github.io/frontend_code/assets/f6189a921c9992aca0c5891d583acbc1.jpg",revision:"180cf63d0681b448b58979d304c5d206"},{url:"https://colmexcode.github.io/frontend_code/icon_128x128.ee082751b8ad14b39d68e40fb286a534.png",revision:"ee082751b8ad14b39d68e40fb286a534"},{url:"https://colmexcode.github.io/frontend_code/icon_192x192.902151f62d6e6b5850b7093e8390e1e6.png",revision:"902151f62d6e6b5850b7093e8390e1e6"},{url:"https://colmexcode.github.io/frontend_code/icon_256x256.d74512acaccbf74aba55417c4223c9b9.png",revision:"d74512acaccbf74aba55417c4223c9b9"},{url:"https://colmexcode.github.io/frontend_code/icon_384x384.4e433bbd9d5f47b70db4d657e91d4efb.png",revision:"4e433bbd9d5f47b70db4d657e91d4efb"},{url:"https://colmexcode.github.io/frontend_code/icon_512x512.a9ab90cb9c8bf3fe906c8775dcf8c195.png",revision:"a9ab90cb9c8bf3fe906c8775dcf8c195"},{url:"https://colmexcode.github.io/frontend_code/icon_96x96.b82576ae85612451afda8fbc0f4640b1.png",revision:"b82576ae85612451afda8fbc0f4640b1"},{url:"https://colmexcode.github.io/frontend_code/js/31.b722886bdd6d4b524a1f.js",revision:"5a5006e7e358f8c1852ee6fd0e1a5459"},{url:"https://colmexcode.github.io/frontend_code/js/421.d1f8a3e06611467051af.js",revision:"9351a21f7b203e8f97a5a3ac96ff06db"},{url:"https://colmexcode.github.io/frontend_code/js/432.908be23ee29320420b51.js",revision:"f152e7454b0f3680d5f11016c56c7b46"},{url:"https://colmexcode.github.io/frontend_code/js/468.f89e5f5e2bf6bae3234d.js",revision:"164b31bf5115ad55bcb08807af184ca9"},{url:"https://colmexcode.github.io/frontend_code/js/676.520f8a6160bdf3f43096.js",revision:"d8b966b521deaf83e8141d9422a9363f"},{url:"https://colmexcode.github.io/frontend_code/js/699.dfd88e9956c6789a530e.js",revision:"041f24878e26478a50c7a6f9b27e8c66"},{url:"https://colmexcode.github.io/frontend_code/js/bundle.73f03fa89d0263d11a3e.js",revision:"7b3d1703835e6c9286693a062a851d88"},{url:"https://colmexcode.github.io/frontend_code/js/commons.73f03fa89d0263d11a3e.js",revision:"96fc81701a65df3623adbf293f2a639f"},{url:"https://colmexcode.github.io/frontend_code/js/modules.0a30f25a66e3fd037c59.dll.js",revision:"9b25c4c2f4d8c363db94f8d2ce40317c"},{url:"https://colmexcode.github.io/frontend_code/js/modules.0a30f25a66e3fd037c59.dll.js.LICENSE.txt",revision:"9b318b6fb13190fe82c0677e9264b3c7"},{url:"https://colmexcode.github.io/frontend_code/manifest.4b11d95dbc8a888ba11aff5e614e3b8a.json",revision:"4b11d95dbc8a888ba11aff5e614e3b8a"}],{}),e.registerRoute(/https:\/\/cozy-place.vercel.app\//,new e.StaleWhileRevalidate({cacheName:"images",plugins:[]}),"GET"),e.registerRoute(/https:\/\/cozyplace.herokuapp.com\/api\//,new e.NetworkFirst({cacheName:"api",plugins:[]}),"GET")}));
