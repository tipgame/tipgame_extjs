Ext.define('TipgameApp.controller.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    onLoginClick: function() {

        var loginValue = this.getView().lookupReference('loginForm').getValues();
        var user = Ext.create('TipgameApp.model.user.UserLogin', {username: loginValue.username, password: loginValue.password});
        var view = this.getView();
        user.save({
            success: function(user) {

                localStorage.setItem("userId", user.data.userId);
                view.destroy();
                Ext.create({
                    xtype: 'app-main'
                });
            },
            failure: function (record, operation) {
                    Ext.Msg.alert('Hinweis', 'Die Anmeldung ist fehlgeschlagen. Bitte überprüfe Benutzername und Passwort.', Ext.emptyFn);
                }
        });
    },
    onRegisterClick: function() {
         this.getView().destroy();
         Ext.create({
             xtype: 'registerView'
         });
     }
});