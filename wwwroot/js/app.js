window.JimBook = (function(window, $) {
    'use strict';

    var selectors = {
        soGoodButton: ".so-good-btn",
        notSoGoodButton: ".not-so-good-btn"
    };

    function init() {
        console.log("Loaded.");
        $(selectors.soGoodButton).on("click", function() {
            alert("So good.");
        });
        $(selectors.notSoGoodButton).on("click", function() {
            alert("Not so good.");
        });
    }

    return {
        init: init
    };
})(window, jQuery);

$(document).ready(function() {
    window.JimBook.init();
});