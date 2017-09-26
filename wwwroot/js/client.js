if (typeof window.JimBook === "undefined" || window.JimBook === null) {
    window.JimBook = {};
}

window.JimBook.ApiClient = (function(window, $) {
    "use strict";

    var urls = {
        list: "/api/posts/",
        create: "/api/posts/",
        soGood: "/api/posts/{{id}}/sogood",
        notSoGood: "/api/posts/{{id}}/notsogood"
    };

    function createPost(data, callback) {
        //$.post()
    }

    function getPosts(successCallback) {
        $.get(urls.list, function(data, status, xhr) {
            if (typeof successCallback === 'function') {
                successCallback(data, status, xhr);
            }
        });
    }

    return {
        getPosts: getPosts
    };

})(window, jQuery);