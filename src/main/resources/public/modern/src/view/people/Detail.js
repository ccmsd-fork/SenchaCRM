Ext.define('SenchaCRM.view.people.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'people-detail',

    requires: [
        'Ext.field.Text',
        'Ext.field.TextArea',
        'Ext.form.FieldSet',
        'Ext.layout.Fit'
    ],

    layout: 'vbox',

    items: [
        {
            xtype: 'titlebar',
            docked: 'top',
            cls: 'header',
            title: '担当者',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-chevron-left',
                    ui: 'action',
                    listeners: {
                        tap: 'onTapBackButton'
                    }
                },
                {
                    xtype: 'button',
                    //text: '保存',
                    iconCls: 'x-fa fa-floppy-o',
                    align: 'right',
                    ui: 'action',
                    reference: 'saveButton',
                    listeners: {
                        tap: 'onTapSaveButton'
                    }
                }
            ]
        },
        {
            xtype: 'fieldset',
            //title: '基本',
            items: [
                {
                    xtype: 'textfield',
                    label: '姓',
                    bind: '{person.lastName}'
                },
                {
                    xtype: 'textfield',
                    label: '名',
                    bind: '{person.firstName}'
                },
                {
                    xtype: 'textfield',
                    label: '会社',
                    bind: '{person.company}'
                },
                {
                    xtype: 'textfield',
                    label: '肩書き',
                    bind: '{person.title}'
                }
            ],
            listeners: {
                change: {
                    fn: 'onUpdateField',
                    delegate: 'textfield'
                }
            }
        },
        {
            xtype: 'fieldset',
            //title: '基本',
            items: [
                {
                    xtype: 'textfield',
                    label: '電話',
                    bind: '{person.phone}'
                },
                {
                    xtype: 'textfield',
                    label: 'Eメール',
                    bind: '{person.email}'
                },
                {
                    xtype: 'textfield',
                    label: 'IM',
                    bind: '{person.im}'
                },
                {
                    xtype: 'textfield',
                    label: 'Webサイト',
                    bind: '{person.websites}'
                },
                {
                    xtype: 'textareafield',
                    label: '特記事項',
                    bind: '{person.info}'
                }
            ]
        }
    ]
});
