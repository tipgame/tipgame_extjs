Ext.define('TipgameApp.store.session.SessionStore', {
    extend: 'Ext.data.Store',
    model: 'TipgameApp.model.session.SessionModel',
    storeId: 'sessionstore',
    proxy: {
        type: 'sessionstorage',
        id  : 'sessionProxyId'
    },
    autoLoad: false
});