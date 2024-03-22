// ==UserScript==
// @name         Clean 1fichier URL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Cleans the URL for 1fichier links
// @author       mctypon
// @match        https://1fichier.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the current URL
    var currentUrl = window.location.href;

    // Check if the URL contains the "&af=..." part
    if (currentUrl.includes('&af=')) {
        // Remove the "&af=..." part from the URL
        var cleanUrl = currentUrl.split('&af=')[0];

        // Redirect to the clean URL
        window.location.href = cleanUrl;
    }
})();
