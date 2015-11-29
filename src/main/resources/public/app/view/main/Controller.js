/**
 * SenchaCRM.view.main.Controller
 */
Ext.define('SenchaCRM.view.main.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

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
    },

    /**
     *
     */
    onSearchTriggerClick: function () {
        Ext.Msg.alert('Hi');
    }

});
