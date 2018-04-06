Ext.define('TipgameApp.controller.settings.SettingsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settings',
    init: function() {
        this.callParent(arguments);
        var me = this;
        var userId = localStorage.getItem("userId");
        TipgameApp.model.user.UserModel.load(2, {
            success: function(record, operation) {
                me.getViewModel().set('user', record);
            }
        })
    },
});