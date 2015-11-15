Ext.define('SenchaCRM.model.Customer', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    fields: [
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'age', type: 'int'},
        {name: 'phone', type: 'string'},
        {name: 'gender', type: 'string'}
    ],

    proxy: {
        type: 'rest',
        url: '/customers',
        pageParam: '',
        reader: {
            rootProperty: 'content'
        },
        writer: {
            writeAllFields: true,
            writeRecordId: false
        }
    }

});
