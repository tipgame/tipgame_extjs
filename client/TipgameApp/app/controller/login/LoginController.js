Ext.define('TipgameApp.controller.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    onLoginClick: function() {

        var user = Ext.create('TipgameApp.model.user.UserLogin', {username: 't', password: 't', userId: 0});
        debugger
        var userIsLoggedIn;
        var view = this.getView();
        user.save({
            success: function(user) {
                if(user.data.loginAccepted) {
                    debugger
                    localStorage.setItem("userId", user.data.userId);
                    view.destroy();
                    Ext.create({
                        xtype: 'app-main'
                    });
                }
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