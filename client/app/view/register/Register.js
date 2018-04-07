Ext.define('TipgameApp.view.register.Register', {
    extend: 'Ext.Panel',
    xtype: 'registerView',

    requires: [
        'TipgameApp.controller.register.RegisterController',
        'Ext.form.Panel',
        'Ext.plugin.Viewport',
    ],

    controller: 'register',
    bodyPadding: 10,
    title: 'Registrierung',
    closable: false,
    autoShow: true,
    plugins: 'viewport',
    items: {
        xtype: 'form',
        reference: 'registrationForm',
        items: [{
            xtype: 'textfield',
            name: 'firstname',
            fieldLabel: 'Vorname',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'lastname',
            fieldLabel: 'Nachname',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'E-Mail',
            allowBlank: false
        },
         {
             xtype: 'textfield',
             name: 'username',
             fieldLabel: 'Username',
             allowBlank: false
         },
        {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }],
        buttons: [{
            text: 'Registrierung absenden',
            formBind: true,
            listeners: {
                click: 'onSendRegistration'
            }
        }]
    }
});