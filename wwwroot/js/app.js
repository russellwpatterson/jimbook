if (typeof window.JimBook === "undefined" || window.JimBook === null) {
    window.JimBook = {};
}

window.JimBook.App = (function(window, $, ko, ApiClient) {
    "use strict";

    var posts = ko.observableArray([]);
    var newPostText = ko.observable("");

    function onCreatePost() {
        if (newPostText() === "") {
            alert("Please enter a valid JimBook™ post!");
            return;
        }

        posts.push({
            postId: 1,
            text: newPostText(),
            soGoods: ko.observable(0),
            notSoGoods: ko.observable(0)                        
        });

        newPostText("");
    }

    function onSoGood(post) {
        post.soGoods(post.soGoods() + 1);
    }
    
    function onNotSoGood(post) {
        post.notSoGoods(post.notSoGoods() + 1);
    }

    function init() {
        console.log("Loaded.");

        ApiClient.getPosts(function(data, status, xhr) {
            $(data).each(function(i, item) {
                posts.push(item);
            });
        });

        ko.applyBindings({
            posts: posts,
            newPostText: newPostText,
            onCreatePost: onCreatePost,
            onSoGood: onSoGood,
            onNotSoGood: onNotSoGood
        });
    }

    return {
        init: init
    };
})(window, jQuery, ko, window.JimBook.ApiClient);

$(function() {
    window.JimBook.App.init();
});



    //    (function() {    
    //     var posts = ko.observableArray([
    //         {
    //             postId: 1,
    //             text: "Kids today.",
    //             soGoods: 5,
    //             notSoGoods: 15
    //         },
    //         {
    //             postId: 2,
    //             text: "D.R.Y.E.R.R.: Don't re-use your error-ridden rubbish.",
    //             soGoods: 56,
    //             notSoGoods: 2
    //         },
    //         {
    //             postId: 3,
    //             text: "So good.",
    //             soGoods: 143,
    //             notSoGoods: 0
    //         },
    //         {
    //             postId: 4,
    //             text: "I brought in some fruitsnacks.",
    //             soGoods: 76,
    //             notSoGoods: 32
    //         }
    //         // Subversion is a great datastore technology. I suggest it for all projects.
    //     ]);

    //     return 
