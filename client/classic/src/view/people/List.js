/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SenchaCRM.view.people.List', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.grid.plugin.CellEditing',
        'Ext.layout.container.Fit',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Paging',
        'SenchaCRM.view.people.Controller',
        'SenchaCRM.view.people.Model'
    ],

    xtype: 'people-list',

    controller: 'people',
    viewModel: 'people',
    modelValidation: true,

    title: '担当者一覧',
    region: 'center',
    layout: 'fit',
    glyph: 'xf022@FontAwesome',

    items: [
        {
            xtype: 'gridpanel',
            store: 'People',
            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1,
                listeners: {
                    'edit': 'onUpdateRecord'
                }
            },
            viewConfig: {
                listeners: {
                    refresh: 'onUpdateRecord'
                }
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
                        },
                        '->',
                        {
                            text: '編集内容の保存',
                            glyph: 'xf0c7@FontAwesome',
                            handler: 'onSaveGridButtonClick',
                            bind: {
                                disabled: '{storeEditing}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    store: 'People',
                    dock: 'bottom',
                    displayInfo: true
                }
            ],
            columns: [
                {
                    xtype: 'actioncolumn',
                    width: 30,
                    menuDisabled: true,
                    items: [
                        {
                            iconCls: 'cell-edit-row',
                            handler: 'onEditButtonClick'
                        }
                    ]
                },
                {
                    text: '名前（性）',
                    dataIndex: 'lastName',
                    width: 100,
                    editor: 'textfield'
                },
                {
                    text: '名前（名）',
                    dataIndex: 'firstName',
                    width: 100,
                    editor: 'textfield'
                },
                {
                    text: '会社',
                    dataIndex: 'company',
                    flex: 1,
                    editor: 'textfield'
                },
                {
                    text: '肩書き',
                    dataIndex: 'title',
                    width: 150,
                    editor: 'textfield'
                },
                //{
                //    text: 'Eメール',
                //    dataIndex: 'email',
                //    flex: 1,
                //    editor: 'textfield'
                //},
                //{
                //    text: '電話番号',
                //    dataIndex: 'phone',
                //    width: 150,
                //    editor: 'textfield'
                //},
                //{
                //    text: 'IM',
                //    dataIndex: 'im',
                //    flex: 1,
                //    editor: 'textfield',
                //    hidden: true
                //},
                //{
                //    text: 'Webサイト',
                //    dataIndex: 'websites',
                //    flex: 1,
                //    editor: 'textfield',
                //    hidden: true
                //},
                //{
                //    text: '特記事項',
                //    dataIndex: 'info',
                //    flex: 1,
                //    editor: 'textfield',
                //    hidden: true
                //},
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
    ]

    //dockedItems: [
    //    {
    //        xtype: 'toolbar',
    //        dock: 'bottom',
    //        ui: 'footer',
    //        layout: {
    //            pack: 'end'
    //        },
    //        items: [
    //            {
    //                text: '一括保存',
    //                glyph: 'xf0c7@FontAwesome',
    //                handler: 'onSaveGridButtonClick',
    //                width: 100
    //            }
    //        ]
    //    }
    //]

});
