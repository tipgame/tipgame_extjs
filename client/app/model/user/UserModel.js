Ext.define('TipgameApp.model.user.UserModel', {
    extend: 'Ext.data.Model',
    fields: ['firstname', 'lastname', 'username', 'userId', 'email'],
    proxy: {
            type: 'rest',
            url : 'http://localhost:8080/user'
        }
});