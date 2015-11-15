/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SenchaCRM.view.main.Main', {
    extend: 'Ext.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.layout.container.Absolute',
        'Ext.layout.container.Border',
        'Ext.layout.container.Fit',
        'Ext.layout.container.VBox',
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'SenchaCRM.view.main.MainController',
        'SenchaCRM.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'container',
            height: 38,
            layout: 'absolute',
            cls: 'header',
            items: [
                {
                    xtype: 'label',
                    html: 'SENCHA CRM',
                    cls: 'app-title',
                    x: 15,
                    y: 10
                }
            ]
        },
        {
            layout: 'border',
            flex: 1,
            cls: 'main',
            items: [
                {
                    title: 'CUSTOMER',
                    region: 'center',
                    layout: 'fit',
                    flex: 3,
                    items: [
                        {
                            xtype: 'gridpanel',
                            store: 'Customers',
                            columns: [
                                {
                                    text: 'FIRST NAME',
                                    dataIndex: 'firstName',
                                    flex: 1
                                },
                                {
                                    text: 'LAST NAME',
                                    dataIndex: 'lastName',
                                    flex: 1
                                },
                                {
                                    text: 'AGE',
                                    dataIndex: 'age',
                                    flex: 1
                                },
                                {
                                    text: 'PHONE',
                                    dataIndex: 'phone',
                                    flex: 1
                                },
                                {
                                    text: 'GENDER',
                                    dataIndex: 'gender',
                                    flex: 1
                                },
                                {
                                    xtype: 'actioncolumn',
                                    width: 30,
                                    menuDisabled: true,
                                    items: [
                                        {
                                            iconCls: 'cell-editing-delete-row'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'MENU',
                    region: 'west',
                    flex: 1,
                    split: true,
                    collapsed: true
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'footer',
            height: 30,
            items: [
                {
                    xtype: 'label',
                    html: '<div align="center">Copy</div>'
                }
            ]
        }
    ]


});
