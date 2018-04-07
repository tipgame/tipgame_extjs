/**
 * This view is an example list of people.
 */

Ext.define('TipgameApp.view.main.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userslist',
    requires: [
        'TipgameApp.store.user.UsersStore'
    ],

    title: 'Mitspieler',

    listeners: {
        render : function(grid){
                    //TODO
               },
        select: 'onItemSelected'
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
