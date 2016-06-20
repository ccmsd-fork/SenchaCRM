/**
 * SenchaCRM.view.main.MainController
 */
Ext.define('SenchaCRM.view.people.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.people',

    requires: [
        'SenchaCRM.model.Person'
    ],

    /**
     * @param button
     */
    onAddButtonClick: function (button) {
        var panel = Ext.widget('people-edit');

        var created = Ext.create('SenchaCRM.model.Person');
        panel.getViewModel().setData({
            person: created
        });

        panel.show(button);
    },

    /**
     */
    onSaveFormButtonClick: function () {
        var me = this,
            window = Ext.first('people-edit'),
            record = me.getViewModel().getData().person;

        var fields = [
            me.lookup('firstname'),
            me.lookup('lastname')
        ];
        var results = Ext.Array.map(fields, function (f) {
            return f.validate();
        });
        if (Ext.Array.contains(results, false)) {
            Ext.Msg.alert('SenchaCRM', '入力値が不正です。');
            return;
        }

        var store = Ext.getStore('People');
        store.add(record);

        if (store.getModifiedRecords().length === 0 &&
            store.getRemovedRecords().length === 0) {
            Ext.Msg.alert('SenchaCRM', '変更がありません。');
            return;
        }

        window.mask('処理中...');
        store.sync({
            success: function () {
                Ext.Msg.alert('SenchaCRM', '保存しました', function () {
                    window.destroy();
                    store.load();
                });
            }
        });
    },

    /**
     */
    onCloseWindow: function () {
        var me = this,
            vm = me.getViewModel();
        vm.getData().person.reject();
    },

    /**
     */
    onSaveGridButtonClick: function () {
        var view = this.getView(),
            store = Ext.getStore('People');

        Ext.Msg.confirm('SenchaCRM', '保存しますか？', function (btn) {
            if (btn === 'yes') {
                if (store.getModifiedRecords().length === 0 &&
                    store.getRemovedRecords().length === 0) {
                    Ext.Msg.alert('SenchaCRM', '変更がありません。');
                    return;
                }

                view.mask('処理中...');
                store.sync({
                    success: function () {
                        view.unmask();
                        Ext.Msg.alert('SenchaCRM', '保存しました', function () {
                            store.load();
                        });
                    }
                });
            }
        });
    },

    /**
     * @param grid
     * @param index
     */
    onDeleteButtonClick: function (grid, index) {
        grid.getStore().removeAt(index);
        this.onUpdateRecord();
    },

    /**
     * @param grid
     * @param index
     */
    onEditButtonClick: function (grid, index, num, option, e) {
        var panel = Ext.widget('people-edit');

        var person = grid.getStore().getAt(index);
        panel.getViewModel().setData({
            person: person
        });

        panel.show(e.event.srcElement);
    },

    /**
     * @param {Ext.dataview.DataView} component
     * @param {Number} index
     * @param {Ext.Element/Ext.dataview.component.DataItem} target
     * @param {Ext.data.Model} record
     * @param {Ext.event.Event} e
     */
    onListItemTap: function (component, index, target, record, e) {
        var me = this,
            page = me.lookup('user');

        me.getViewModel().setData({
            person: record
        });

        page.animateActiveItem(1, {
            type: 'slide',
            direction: 'left'
        });
    },

    /**
     * @param {Ext.Button} component
     * @param {Ext.EventObject} e
     */
    onTapBackButton: function (component, e) {
        this.doBack();
    },

    doBack: function () {
        var me = this,
            vm = me.getViewModel(),
            page = me.lookup('user');

        vm.getData().person.reject();

        page.animateActiveItem(0, {
            type: 'slide',
            direction: 'right'
        });

        var fields = page.query('formpanel textfield');
        Ext.each(fields, function (field) {
            field.ready = false;
        });

        Ext.defer(function () {
            page.down('people-detail').getScrollable().scrollTo(0, 0);
        }, 500);
    },

    /**
     * @param {Ext.Button} component
     * @param {Ext.EventObject} e
     */
    onTapSaveButton: function (component, e) {
        var me = this,
            view = me.getView();

        var store = Ext.getStore('People');

        if (store.getModifiedRecords().length === 0 &&
            store.getRemovedRecords().length === 0) {
            Ext.Msg.alert('SenchaCRM', '変更がありません。');
            return;
        }

        view.setMasked({
            xtype: 'loadmask',
            message: '処理中..'
        });

        store.sync({
            success: function () {
                view.unmask();
                me.doBack();
            }
        });
    },

    /**
     * @param field
     * @param newValue
     * @param oldValue
     */
    onUpdateField: function (field, newValue, oldValue) {
        var vm = this.getViewModel(),
            record = vm.getData().person;

        vm.set('saveButtonDisabled', !record.dirty);
    },

    onUpdateRecord: function () {
        var vm = this.getViewModel(),
            store = Ext.getStore('People');
        var targets = Ext.Array.merge(store.getModifiedRecords(), store.getRemovedRecords());
        vm.set('storeEditing', targets.length === 0);
    }

});
