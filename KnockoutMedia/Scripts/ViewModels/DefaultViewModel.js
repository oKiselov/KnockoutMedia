var app = window.app || {};
app.DefaultViewModel = (function (ko, db) {
    'use strict';
    var me = {
        catalog: ko.observableArray([]),
        init: init
    };

    function init() {
        db.getCatalog(function (data) {
            var arrMedia = [];
            ko.utils.arrayForEach(data || [], function (item) {
                arrMedia.push(new app.Media(item.ISBN, item.MediaType, item.Name));
            });
            me.catalog(arrMedia);
        });
    }
    return me;
}(ko, app.DataContext));