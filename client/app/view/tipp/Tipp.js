/**
 * Demonstrates usage of an accordion layout.
 */
Ext.define('TipgameApp.view.tipp.Tipp', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout.tipps',

    requires: [
        'Ext.layout.container.Accordion',
        'Ext.grid.*'
    ],

    title: 'Accordion Layout',
    layout: 'accordion',
    defaults: {
        bodyPadding: 10
    },

    initComponent: function () {
        var i;
        this.items = new Array();
        for (i = 0; i < 5; i++) {
          this.items.push(Ext.create('Ext.grid.Panel', {
                       width: 400,
                       height: 200,
                       title: 'Application Users',
                       initComponent: function () {
                               var store = Ext.create('Ext.data.Store', {
                                       model: Ext.create('Ext.data.Model', {
                                          fields: ['firstname', 'lastname']
                                       }),
                                       data : [
                                                {firstname: 'Peter',   lastName: 'Venkman'},
                                                {firstName: 'Egon',    lastName: 'Spengler'},
                                                {firstName: 'Ray',     lastName: 'Stantz'},
                                                {firstName: 'Winston', lastName: 'Zeddemore'}
                                            ]
                                   })

                               this.store = store;
                               this.callParent(arguments);
                           },
                       columns: [
                           {
                               text: 'Name1',
                               width: 100,
                               sortable: false,
                               hideable: false,
                               dataIndex: 'firstName'
                           },
                           {
                                text: 'Name2',
                                width: 100,
                                sortable: false,
                                hideable: false,
                                dataIndex: 'lastName'
                            }
                       ]
                   }));
        }

        this.callParent(arguments);
    },
    /*
    items: [{
        // See Grids / Basic Grid example for this view.
        xtype: 'userslist',
        title: 'Basic Grid (Click or tap header to collapse)',
        tools: [
            { type: 'pin' }, { type: 'unpin' }, { type: 'gear' }
        ],
        bodyPadding: 0
    }, {
        title: 'Accordion Item 2',
        tools: [
            { iconCls: 'x-fa fa-thumb-tack' },
            { iconCls: 'x-fa fa-thumb-tack fa-rotate-90' },
            { iconCls: 'x-fa fa-gear' }
        ],
        html: 'Empty'
    }, {
        title: 'Accordion Item 3',
        tools: [
            { glyph: 'xf08d@FontAwesome' },
            { glyph: 'xf08d@FontAwesome', cls: 'fa-rotate-90' },
            { glyph: 'xf013@FontAwesome' }
        ],
        html: 'Empty'
    }, {
        title: 'Accordion Item 4',
        tools: [
            { iconCls: 'x-fa fa-thumb-tack' },
            { iconCls: 'x-fa fa-thumb-tack fa-rotate-90' },
            { iconCls: 'x-fa fa-gear' }
        ],
        html: 'Empty'
    }, {
        title: 'Accordion Item 5',
        tools: [
            { glyph: 'xf08d@FontAwesome' },
            { glyph: 'xf08d@FontAwesome', cls: 'fa-rotate-90' },
            { glyph: 'xf013@FontAwesome' }
        ],
        html: 'Empty'
    }] */
});