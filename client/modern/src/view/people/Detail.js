Ext.define('SenchaCRM.view.people.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'people-detail',

    requires: [
        'Ext.field.Text',
        'Ext.field.TextArea',
        'Ext.form.FieldSet'
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
                    iconCls: 'x-fa fa-floppy-o',
                    align: 'right',
                    ui: 'action',
                    bind: {
                        disabled: '{saveButtonDisabled}'
                    },
                    listeners: {
                        tap: 'onTapSaveButton'
                    }
                }
            ]
        },
        {
            xtype: 'fieldset',
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
            ]
        },
        {
            xtype: 'fieldset',
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
    ],
    listeners: {
        change: {
            fn: 'onUpdateField',
            delegate: 'textfield'
        }
    }
});
