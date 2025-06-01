// ==UserScript==
// @name         SwarmFM BTTV
// @description  Modified BTTV for Swarm FM.
// @source       https://github.com/<repo>
// @version      0.0.1
// @match        https://*.twitch.tv/*
// @match        https://*.youtube.com/*
// @grant        GM_addElement
// @resource     bttvScript    https://cdn.jsdelivr.net/gh/<repo>/build/betterttv.js
// ==/UserScript==

(function betterttv() {
    GM_addElement('script', {
        src: 'https://cdn.jsdelivr.net/gh/<repo>/build/betterttv.js',
        type: 'text/javascript'
    });
})()