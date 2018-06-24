var app = window.app || {};
app.DataBindingViewModel = (function (ko) {
    'use strict';
    var me = {
        message: ko.observable(''),
        colors: ["Red", "Green", "Blue", "Yellow", "Black", "White"],
        loadMessage: loadMessage
    };
    function _init() {
        me.message.subscribe(function (v) {
            //alert("Your message is: " + v);
        });
    }

    function loadMessage() {
        me.message("My favorite color is: " + me.colors[Math.floor(Math.random() * me.colors.length)].toLowerCase());
    }

    _init ();
    return me;
}(ko));