/**
 * SenchaCRM.view.main.MainController
 */
Ext.define('SenchaCRM.view.people.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.people',

    requires: [
        'SenchaCRM.model.Person',
        'SenchaCRM.view.people.Detail'
    ],

    /**
     * @param button
     */
    onAddButtonClick: function (button) {
        var created = Ext.create('SenchaCRM.model.Person');
        this.getViewModel().setData({
            person: created
        });

        var panel = Ext.widget('people-detail');
        panel.show(button);
    },

    onSaveFormButtonClick: function () {
        var me = this,
            window = me.lookup('people-detail'),
            record = me.getViewModel().getData().person;

        var store = Ext.getStore('People');
        store.add(record);

        store.sync({
            success: function () {
                Ext.Msg.alert('SenchaCRM', '保存しました', function () {
                    window.destroy();
                    store.load();
                });
            }
        });
    },

    onSaveGridButtonClick: function () {
        var store = Ext.getStore('People');
        Ext.Msg.confirm('SenchaCRM', '保存しますか？', function (btn) {
            if (btn === 'yes') {
                store.sync({
                    success: function () {
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
    }

});
