Ext.define('SenchaCRM.view.people.Detail', {
    extend: 'Ext.window.Window',

    xtype: 'people-detail',
    reference: 'people-detail',

    title: '担当者',
    glyph: 'xf007@FontAwesome',
    height: 400,
    width: 500,
    layout: 'fit',
    modal: true,

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
                    handler: 'onSaveFormButtonClick',
                    width: 100
                }
            ]
        }
    ],

    items: [
        {
            xtype: 'tabpanel',
            tabPosition: 'left',
            items: [
                {
                    xtype: 'form',
                    title: '基本',
                    layout: 'form',
                    scrollable: true,
                    items: [
                        {
                            xtype: 'fieldset',
                            padding: '0',
                            layout: 'form',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'lastName',
                                    fieldLabel: '名前（姓）<b style="color:red"> * </b>',
                                    allowBlank: false,
                                    bind: {
                                        value: '{person.firstName}'
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'firstName',
                                    fieldLabel: '名前（名）<b style="color:red"> * </b>',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'company',
                                    fieldLabel: '会社'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'title',
                                    fieldLabel: '肩書き'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'form',
                    title: 'その他',
                    layout: 'form',
                    scrollable: true,
                    items: [
                        {
                            xtype: 'fieldset',
                            padding: '0',
                            layout: 'form',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'phone',
                                    fieldLabel: '電話番号'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'Eメール',
                                    fieldLabel: 'email'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'im',
                                    fieldLabel: 'IM'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'websites',
                                    fieldLabel: 'Webサイト'
                                },
                                {
                                    xtype: 'textareafield',
                                    name: 'info',
                                    fieldLabel: '特記事項'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
