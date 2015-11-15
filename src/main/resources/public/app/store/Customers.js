Ext.define('SenchaCRM.store.Customers', {
    extend: 'Ext.data.Store',

    requires: [
        'SenchaCRM.model.Customer'
    ],

    model: 'SenchaCRM.model.Customer',
    autoLoad: true
});
