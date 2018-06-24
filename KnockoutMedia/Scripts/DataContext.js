var app = window.app || {};
app.DataContext = (function () {
    'use strict';
    var me = {
        getCatalog: getCatalog
    };

    function getCatalog(callback) {
        if ($.isFunction(callback)) {
            $.getJSON('/Data/Catalog.json', function (data) {
                callback(data.Catalog);
            });
        }
    }
    return me;
}());