Ext.define('TipgameApp.view.settings.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settingsView',

    requires: [
        'Ext.form.Panel',
        'TipgameApp.controller.settings.SettingsController'
    ],
    controller: 'settings',
    bodyPadding: 10,
    title: 'Einstellungen',
    closable: false,
    autoShow: true,
    items: {
        xtype: 'form',
        reference: 'form',
        items: [
        {
            xtype: 'textfield',
            name: 'firstname',
            bind: '{user.firstname}',
            fieldLabel: 'Vorname'
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
            title: 'Avatar',
            frame: true,
            bodyPadding: '10 10 0',
            reference: 'avatarUploadForm',

            items: [
            {
                xtype: 'filefield',
                emptyText: 'Bild auswählen',
                fieldLabel: 'Photo',
                name: 'photo-path',
                buttonText: '',
                buttonConfig: {
                    iconCls: 'file-uploads-image-add'
                }
            }],

            buttons: [{
                text: 'Speichern',
                handler: 'saveAvatarHandler'
            }, {
                text: 'Zurücksetzen',
                handler: 'resetAvatarHandler'
            }]
        }
        ],
        buttons: [{
            text: 'Einstellungen speichern',
            listeners: {
                click: 'onSaveSettings'
            }
        }]
    }
});