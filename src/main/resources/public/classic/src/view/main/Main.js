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
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.grid.plugin.CellEditing',
        'Ext.layout.container.Absolute',
        'Ext.layout.container.Border',
        'Ext.layout.container.Fit',
        'Ext.layout.container.VBox',
        'Ext.plugin.Viewport',
        'Ext.toolbar.Toolbar',
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
            height: 44,
            layout: 'absolute',
            cls: 'header',
            items: [
                {
                    xtype: 'label',
                    html: 'SENCHA CRM',
                    cls: 'app-title',
                    x: 20,
                    y: 13
                },
                {
                    xtype: 'textfield',
                    style: 'right:20',
                    width: 400,
                    style: 'top:6px;right:10px;',
                    emptyText: 'Jump to a contact, case, deal, tag, or search...',
                    triggers: {
                        search: {
                            cls: 'x-form-search-trigger',
                            handler: 'onSearchTriggerClick'
                        }
                    }
                }
            ]
        },
        {
            layout: 'border',
            flex: 1,
            cls: 'main',
            reference: 'mainpanel',
            items: [
                {
                    title: '顧客リスト',
                    region: 'center',
                    layout: 'fit',
                    flex: 3,
                    glyph: 'xf007@FontAwesome',
                    items: [
                        {
                            xtype: 'gridpanel',
                            store: 'Customers',
                            plugins: {
                                ptype: 'cellediting',
                                clicksToEdit: 1
                            },
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    items: [
                                        {
                                            text: '追加',
                                            handler: 'onAddButtonClick',
                                            iconCls: 'framing-buttons-add',
                                            width: 100
                                        }
                                    ]
                                },
                                {
                                    xtype: 'pagingtoolbar',
                                    store: 'Customers',
                                    dock: 'bottom',
                                    displayInfo: true
                                }
                            ],
                            columns: [
                                {
                                    text: 'ID',
                                    dataIndex: 'id',
                                    width: 50

                                },
                                {
                                    text: '名前（性）',
                                    dataIndex: 'lastName',
                                    flex: 1,
                                    editor: 'textfield'
                                },
                                {
                                    text: '名前（名）',
                                    dataIndex: 'firstName',
                                    flex: 1,
                                    editor: 'textfield'
                                },
                                {
                                    text: '年齢',
                                    dataIndex: 'age',
                                    flex: 1,
                                    editor: 'numberfield'
                                },
                                {
                                    text: '電話番号',
                                    dataIndex: 'phone',
                                    flex: 1,
                                    editor: 'textfield'
                                },
                                {
                                    text: '性別',
                                    dataIndex: 'gender',
                                    flex: 1,
                                    editor: 'textfield'
                                },
                                {
                                    xtype: 'actioncolumn',
                                    width: 30,
                                    menuDisabled: true,
                                    items: [
                                        {
                                            iconCls: 'cell-editing-delete-row',
                                            handler: 'onDeleteButtonClick'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            ui: 'footer',
                            layout: {
                                pack: 'end'
                            },
                            items: [
                                {
                                    text: '保存',
                                    glyph: 'xf0c7@FontAwesome',
                                    handler: 'onSaveButtonClick',
                                    width: 100
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'メニュー',
                    reference: 'menupanel',
                    region: 'west',
                    width: 200,
                    glyph: 'xf0ca@FontAwesome',
                    split: true,
                    collapsed: true,
                    floatable: false,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'treepanel',
                            rootVisible: false,
                            store: 'Menus',
                            listeners: {
                                itemclick: 'onMenuItemClick'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'footer',
            height: 33,
            items: [
                {
                    xtype: 'label',
                    html: '<div align="center" style="margin-top:.6em;">© 2015 SenchaCRM</div>'
                }
            ]
        }
    ]


});
