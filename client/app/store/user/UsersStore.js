Ext.define('TipgameApp.store.user.UsersStore', {
    extend: "Ext.data.Store",
    model: 'TipgameApp.model.user.UserModel',
    alias: 'store.usersstore',
    proxy: {
        type: 'rest',
        url : 'http://localhost:8080/user/all'
    }
});