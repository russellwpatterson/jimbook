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
        $.post({
            url: "/api/posts/",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function(data, status, xhr) {
                if (typeof callback === 'function') {
                    callback(data, status, xhr);
                }
            }
        });
        
        // $.post("/api/posts/", data, function(data, status, xhr) {
        //     if (typeof callback === 'function') {
        //         callback(data, status, xhr);
        //     }
        // });
    }

    function getPosts(callback) {
        $.get("/api/posts/", function(data, status, xhr) {
            if (typeof callback === 'function') {
                callback(data, status, xhr);
            }
        });
    }
    
    function voteSoGood(postId, callback) {
        $.post("/api/posts/" + postId + "/sogood", function(data, status, xhr) {
            if (typeof callback === 'function') {
                callback(data, status, xhr);
            }
        });
    }
    
    function voteNotSoGood(postId, callback) {
        $.post("/api/posts/" + postId + "/notsogood", function(data, status, xhr) {
            if (typeof callback === 'function') {
                callback(data, status, xhr);
            }
        });
    }

    return {
        getPosts: getPosts,
        createPost: createPost,
        voteSoGood: voteSoGood,
        voteNotSoGood: voteNotSoGood
    };

})(window, jQuery);