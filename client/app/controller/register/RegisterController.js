Ext.define('TipgameApp.controller.register.RegisterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.register',

    onSendRegistration: function() {
        //TODO HashPwd
        debugger
        var registrationValues = this.getView().lookupReference('registrationForm').getValues();
        var user = Ext.create('TipgameApp.model.user.RegisterUser',
            {firstname: registrationValues.firstname,
            lastname: registrationValues.lastname,
            email: registrationValues.email,
            username: registrationValues.username,
            password: registrationValues.password});
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