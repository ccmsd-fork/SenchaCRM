Ext.define('SenchaCRM.view.people.Detail', {
    extend: 'Ext.window.Window',
    xtype: 'people-detail',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.layout.container.Fit',
        'Ext.layout.container.Form',
        'Ext.tab.Panel',
        'SenchaCRM.view.people.Controller',
        'SenchaCRM.view.people.Model'
    ],

    controller: 'people',
    viewModel: 'people',

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
                                    fieldLabel: '名前（姓）<b style="color:red"> * </b>',
                                    allowBlank: false,
                                    bind: '{person.lastName}'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '名前（名）<b style="color:red"> * </b>',
                                    allowBlank: false,
                                    bind: '{person.firstName}'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '会社',
                                    bind: '{person.company}'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '肩書き',
                                    bind: '{person.title}'
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
                                    fieldLabel: '電話番号',
                                    bind: '{person.phone}'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Eメール',
                                    bind: '{person.email}'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'IM',
                                    bind: '{person.im}'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Webサイト',
                                    bind: '{person.websites}'
                                },
                                {
                                    xtype: 'textareafield',
                                    fieldLabel: '特記事項',
                                    bind: '{person.info}'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
