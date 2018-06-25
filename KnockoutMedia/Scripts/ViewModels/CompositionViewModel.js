var app = window.app || {};
app.CompositionViewModel = (function (m, b) {
    'use strict';
    var me = {
        mediaViewModel: m,
        borrowerViewModel: b,

        details: details
    };

    function details(obj) {
        alert(obj.toString());
    };

    return me;
}(app.MediaViewModel, app.BorrowerViewModel));