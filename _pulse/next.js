/*! For license information please see next.js.LICENSE.txt */
module.exports=(globalThis.webpackChunkpulse_framework=globalThis.webpackChunkpulse_framework||[]).push([["next"],{"./lib/next/index.ts":(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isServer=t.loadServerState=t.preserveServerState=void 0;const r=o("./lib/index.ts");function isServer(){var e;return"undefined"!=typeof process&&"node"===(null===(e=null===process||void 0===process?void 0:process.release)||void 0===e?void 0:e.name)}t.preserveServerState=function preserveServerState(e,t){const o=r.extractAll(r.Collection,t),s=r.extractAll(r.State,t),a={collections:[],state:{}};return s.forEach(e=>{!e.name||!e.isSet||e instanceof r.Computed||(a.state[e.name]=e._value)}),o.forEach(e=>{const t={data:{},groups:{}};for(let o in e.data)e.data[o].isSet&&(t.data[o]=e.data[o]._value);for(let o in e.groups)e.groups[o].isSet&&(t.groups[o]=e.groups[o]._value);a.collections.push(t)}),e.props.PULSE_DATA=a,e},t.loadServerState=function loadServerState(e){var t,o,s;if(!isServer()&&(null===(s=null===(o=null===(t=null===globalThis||void 0===globalThis?void 0:globalThis.__NEXT_DATA__)||void 0===t?void 0:t.props)||void 0===o?void 0:o.pageProps)||void 0===s?void 0:s.PULSE_DATA)){const t=globalThis.__NEXT_DATA__.props.pageProps.PULSE_DATA,o=r.extractAll(r.State,e);r.extractAll(r.Collection,e);o.forEach(e=>{!e.name||!t.state[e.name]||e instanceof r.Computed||e.set(t.state[e.name])})}},t.isServer=isServer}},0,[["./lib/next/index.ts","index"]]]);