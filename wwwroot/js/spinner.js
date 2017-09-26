if (typeof window.JimBook === "undefined" || window.JimBook === null) {
    window.JimBook = {};
}

window.JimBook.Spinner = (function(window) {
    "use strict";

    var spinner = null;

    function start() {
        spinner = new Spinner({
            lines: 13, 
            length: 7, 
            width: 5, 
            radius: 10, 
            scale: 1, 
            corners: 1, 
            color: '#000', 
            opacity: 0.25, 
            rotate: 0, 
            direction: 1, 
            speed: 1.6, 
            trail: 78, 
            fps: 20, 
            zIndex: 2e9,
            className: 'spinner', 
            top: '50%', 
            left: '50%', 
            shadow: false, 
            hwaccel: false, 
            position: 'absolute'
        }).spin();

        window.document.body.appendChild(spinner.el);

        return spinner;
    }

    function stop() {
        if (spinner !== null) {
            spinner.stop();
        }
    }

    return {
        start: start,
        stop: stop
    };
})(window);