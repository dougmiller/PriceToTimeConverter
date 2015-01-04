// ==UserScript==
// @name        Ebay Prices in Time Worked
// @namespace   http://greasemonkey.themetacity.com/EBayPricesInTimeWorked
// @description Display prices on ebay.com by the equilivant time it would take to earn that money
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.js
// @include     //www.ebay.com*
// @version     0.1
// @grant       none
// ==/UserScript==

$(document).ready(function () {
    'use strict';

    var c = unsafeWindow.console;
    var hourlyRate = 30.0;
    var loc = location.pathname.split("/");
    function changePrice(priceString) {
        var stripped = priceString.replace(/[$,]/g,'')       
        return ((stripped / hourlyRate).toFixed(2) + "hrs");
    }
});

