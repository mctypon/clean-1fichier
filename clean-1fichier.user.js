// ==UserScript==
// @name         1fichier Cleaner
// @namespace    Violentmonkey Scripts
// @version      0.2
// @description  Clean 1fichier URLs from affiliation codes
// @author       mctypon
// @match        https://1fichier.com/*
// @run-at       document-start
// @grant        none
// @icon         https://asset.brandfetch.io/idJKXoZmwL/id_Wgx2TvS.png
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
