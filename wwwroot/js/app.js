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

        var post = {
            text: newPostText(),
            soGoods: 0,
            notSoGoods: 0                        
        };

        ApiClient.createPost(post, function(data, status, xhr) {
            posts.push(ko.mapping.fromJS(data));
            newPostText("");
        });
    }

    function onKeyPress(element, event) {
        event.keyCode === 13 && onCreatePost();  
        return true;
    }

    function onSoGood(post) {
        ApiClient.voteSoGood(post.id(), function(data, status, xhr) {
            post.soGoods(post.soGoods() + 1);            
        });
    }
    
    function onNotSoGood(post) {
        ApiClient.voteNotSoGood(post.id(), function(data, status, xhr) {
            post.notSoGoods(post.notSoGoods() + 1);
        });
    }

    function init() {
        ApiClient.getPosts(function(data, status, xhr) {
            $(data).each(function(i, item) {
                var convertedItem = ko.mapping.fromJS(item);
                posts.push(convertedItem);
            });

        });
        
        ko.applyBindings({
            posts: posts,
            newPostText: newPostText,
            onCreatePost: onCreatePost,
            onKeyPress: onKeyPress,
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