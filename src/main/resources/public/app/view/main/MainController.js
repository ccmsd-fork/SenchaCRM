/**
 * SenchaCRM.view.main.MainController
 */
Ext.define('SenchaCRM.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'SenchaCRM.model.Person',
        'SenchaCRM.view.main.AddForm'
    ],

    /**
     * @param button
     */
    onAddButtonClick: function (button) {
        var panel = Ext.widget('app-main-add-form');

        panel.show(button);

        //var created = Ext.create('SenchaCRM.model.Customer');
        //var store = Ext.getStore('Customers');
        //store.insert(0, created);
    },

    onSaveButtonClick: function () {
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
    },

    /**
     *
     */
    onSearchTriggerClick: function () {
        Ext.Msg.alert('Hi');
    },

    /**
     * @param {Ext.view.View} component
     * @param {Ext.data.Model} record
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.event.Event} e
     */
    onMenuItemClick: function (component, record, item, index, e) {
        if (!record.isLeaf()) {
            return;
        }

        var panel = this.lookup('menu-panel');
        panel.setCollapsed(true);

        var view = this.lookup('main-panel');
        view.mask('画面読込中...');
        Ext.defer(function () {
            view.unmask();
        }, 500);

    }

});
