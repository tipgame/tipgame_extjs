Ext.define('TipgameApp.view.login.Login', {
    extend: 'Ext.Panel',
    xtype: 'loginView',

    requires: [
        'TipgameApp.controller.login.LoginController',
        'Ext.form.Panel',
        'Ext.plugin.Viewport',
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'WM Tippspiel',
    closable: false,
    autoShow: true,
    plugins: 'viewport',
    items: {
        xtype: 'form',
        reference: 'loginForm',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }, {
            text: 'Registrierung',
            listeners: {
                click: 'onRegisterClick'
            }
        }]
    }
});