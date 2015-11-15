/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SenchaCRM.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.dataview.List',
        'Ext.layout.Fit',
        'SenchaCRM.view.main.MainController',
        'SenchaCRM.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'fit',

    items: [
        {
            xtype: 'titlebar',
            title: '顧客リスト',
            docked: 'top',
            cls: 'header',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-list-ul'
                }
            ]
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            cls: 'app-toolbar',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus'
                }
            ]
        },
        {
            xtype: 'list',
            store: 'Customers',
            itemTpl: '{lastName} {firstName}',
            onItemDisclosure: function(record, btn, index) {
                Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('firstName'), Ext.emptyFn);
            }
        }
    ]

});
