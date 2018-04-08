
Ext.define('TipgameApp.view.main.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userslist',

    title: 'Mitspieler',


    initComponent: function () {
        var store = Ext.create('Ext.data.Store', {
                model: 'TipgameApp.model.user.UserModel',
                proxy: {
                        type: 'rest',
                        url : 'http://localhost:8080/user/all'
                    }
            });

        store.load();
        this.store = store;
        this.callParent(arguments);
    },


    columns: [{
                text: 'Vorname',
                flex: 1,
                sortable: false,
                dataIndex: 'firstname'
            },
            {
                text: 'Nachname',
                flex: 1,
                sortable: false,
                dataIndex: 'lastname'
            }]
});
