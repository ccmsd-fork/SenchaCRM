Ext.define('SenchaCRM.store.Customers', {
    extend: 'Ext.data.Store',

    requires: [
        'SenchaCRM.model.Customer'
    ],

    model: 'SenchaCRM.model.Customer',

    autoLoad: {
        page: 1,
        limit: 10
    },

    pageSize: 10,

    proxy: {
        type: 'rest',
        url: '/customers',
        limitParam: 'size',
        reader: {
            type: 'json',
            rootProperty: 'content',
            totalProperty: 'totalElements'
        },
        writer: {
            writeAllFields: true,
            writeRecordId: false
        }
    },

    listeners: {
        'beforeload': function (store, operation) {
            var current = operation.getPage();
            operation.setPage(current - 1);
            return true;
        }
    }

});
