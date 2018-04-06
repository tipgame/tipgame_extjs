Ext.define('TipgameApp.model.user.RegisterUser', {
    extend: 'Ext.data.Model',

    fields: [{
        type : 'int',
        name : 'id',
        persist: false
    }, {
        name: 'firstname'
    }, {
        name: 'lastname'
    }, {
        name: 'username'
    }, {
        name: 'password'
    }, {
        name: 'email'
    }],

    proxy: {
        type: 'rest',
        url : 'http://localhost:8080/user/register'
    }
});