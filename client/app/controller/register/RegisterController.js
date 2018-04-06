Ext.define('TipgameApp.controller.register.RegisterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.register',

    onSendRegistration: function() {
        var user = Ext.create('TipgameApp.model.user.RegisterUser',
            {firstname: '1',
            lastname: '1',
            email: '1',
            username: 't',
            password: 't'});
        var view = this.getView();
        user.save({
            success: function(user) {
                view.destroy();
                Ext.create({
                    xtype: 'loginView'
                });
            }
        });
    }
});