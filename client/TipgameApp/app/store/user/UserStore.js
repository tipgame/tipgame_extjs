Ext.define('TipgameApp.store.user.UserStore', {
    extend: "Ext.data.Store",
    model: 'TipgameApp.model.user.UserModel',
    alias: 'store.user',
    proxy: {
        type: 'rest',
        url : 'http://localhost:8080/user/1'
    }
});