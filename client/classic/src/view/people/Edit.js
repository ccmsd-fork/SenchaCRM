Ext.define('SenchaCRM.view.people.Edit', {
    extend: 'Ext.window.Window',
    xtype: 'people-edit',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.layout.container.Fit',
        'Ext.layout.container.Form',
        'Ext.plugin.Responsive',
        'Ext.tab.Panel',
        'SenchaCRM.view.people.Controller',
        'SenchaCRM.view.people.Model'
    ],

    controller: 'people',
    viewModel: 'people',
    modelValidation: true,

    title: '担当者',
    glyph: 'xf007@FontAwesome',
    height: '80%',
    plugins: 'responsive',
    responsiveConfig: {
        'width < 800': {
            width: '80%'
        },
        'width >= 1000': {
            width: '50%'
        }
    },
    //width: 800,
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
                    width: 100,
                    bind: {
                        disabled: '{saveButtonDisabled}'
                    }
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
                                    reference: 'firstname',
                                    fieldLabel: '名前（姓）<b style="color:red"> * </b>',
                                    msgTarget: 'side',
                                    bind: '{person.lastName}'
                                },
                                {
                                    xtype: 'textfield',
                                    reference: 'lastname',
                                    fieldLabel: '名前（名）<b style="color:red"> * </b>',
                                    msgTarget: 'side',
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
    ],
    listeners: {
        change: {
            fn: 'onUpdateField',
            delegate: 'textfield'
        },
        close: {
            fn: 'onCloseWindow'
        }
    }
});
