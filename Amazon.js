// ==UserScript==
// @name        Amazon Prices in Time Worked
// @namespace   http://greasemonkey.themetacity.com/AmazonPricesInTimeWorked
// @description Display prices on Amazon.com by the equilivant time it would take to earn that money
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.js
// @include     //www.amazon.com*
// @version     0.5
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
        
    $(".s9Price").each(function (){
        $(this).text(changePrice($(this).text()));
    });
    
    $(".newListprice").each(function (){
        $(this).text(changePrice($(this).text()));
    });
    
    $(".listprice").each(function (){
        $(this).text(changePrice($(this).text()));
    });
        
    if (loc[1] === "") {
        $(".price").each(function (){
            $(this).text(changePrice($(this).text()));
        });

        // this is the "Your Recently Viewed Items and Featured Recommendations" section
        // It is put in with an ajax call so we need to poll to see if the info is there
        // before doing the conversion
        var recentViewed = setInterval(function(){
            if ($("div.price").length > 0) {
                $("div.price").each(function (){
                    //$("img", this).remove();
                    if ($(this).text().indexOf('Click') != 0){ // Some items dont have a price (NaN error if you try this)
                        $(this).text(changePrice($(this).text()));
                    }
                }); 
                clearInterval(recentViewed);           
            }
        }, "1000");
    } 
        
    if (loc[1] === "gp") {
        $(".priceLarge").each(function (){
            $(this).text(changePrice($(this).text()));
        });
        
        $(".price3P").each(function (){
            $(this).text(changePrice($(this).text()));
        });
        
        $("#priceblock_saleprice").each(function (){
            $(this).text(changePrice($(this).text()));
        });

        $("#price").each(function (){
        console.log($this);
            //$(this).text(changePrice($(this).text()));
        });        

        $("#regularprice_savings .a-span12").each(function (){
            if ($(this).text().split("	")[0]) {
                $(this).text(changePrice($(this).text().split("	")[0]) + " " + $(this).text().split("	")[2]);
            } else {
                $(this).text(changePrice($(this).text()));    
            }
        });
        
        $(".a-color-base").each(function (){
            $(this).text(changePrice($(this).text()));
        });
        
        $(".a-color-price").each(function (){
            $(this).text(changePrice($(this).text()));
        });
           
        $(".a-color-secondary").each(function (){
            console.log($(this));
            console.log($(this).text());
            console.log($(this).text().split(" ");
            $(this).text(changePrice($(this).text()));
        });
        


        var alsoBought = setInterval(function(){
            if ($("div.price").length > 0) {
                $("div.price").each(function (){
                    //$("img", this).remove();
                    if ($(this).text().indexOf('Click') != 0){ // Some items dont have a price (NaN error if you try this)
                        $(this).text(changePrice($(this).text()));
                    }
                }); 
                clearInterval(alsoBought);           
            }
        }, "1000");
    }  

    if (loc[2] === "dp") {
        $(".priceLarge").each(function (){
            $(this).text(changePrice($(this).text()));
        });
        
        $(".price").each(function (){
            if ($(this).text().split(" ")[6]) {
                $(this).text(changePrice($(this).text().split(" ")[6]) + " " + $(this).text().split(" ")[12]);
            } else {
                $(this).text(changePrice($(this).text()));    
            }
        });
    }  

});

