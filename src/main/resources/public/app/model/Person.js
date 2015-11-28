Ext.define('SenchaCRM.model.Person', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'title', type: 'string'},
        {name: 'company', type: 'string'},
        {name: 'phone', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'im', type: 'string'},
        {name: 'websites', type: 'string'},
        {name: 'info', type: 'string'}
    ]

});
