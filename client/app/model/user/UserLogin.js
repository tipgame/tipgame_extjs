Ext.define('TipgameApp.model.user.UserLogin', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'username'
        }, {
            name: 'password'
        }],
    proxy: {
        type: 'rest',
        url : 'http://localhost:8080/user/login'
    }
});

