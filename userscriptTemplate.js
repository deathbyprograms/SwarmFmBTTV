// ==UserScript==
// @name         SwarmFM BTTV
// @description  Modified BTTV for Swarm FM.
// @source       https://github.com/<repo>
// @version      <ver>
// @match        https://*.twitch.tv/*
// @match        https://*.youtube.com/*
// @grant        GM_addElement
// @resource     bttvScript https://cdn.jsdelivr.net/gh/<repo>@<ver>/build/betterttv.js:sha256-<hash>
// ==/UserScript==

GM_addElement('script', {
  src: 'https://cdn.jsdelivr.net/gh/<repo>@<ver>/build/betterttv.js',
  type: 'text/javascript',
});
