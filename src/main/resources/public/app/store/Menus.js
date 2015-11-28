/**
 * Created by kawanoshinobu on 2015/11/28.
 */
Ext.define('SenchaCRM.store.Menus', {
    extend: 'Ext.data.TreeStore',

    root: {
        text: 'MENUS',
        expanded: true,
        children: [
            {
                text: 'ダッシュボード',
                iconCls: "icon-dashboard",
                leaf: true
            },
            {

                text: '最近の活動',
                iconCls: "icon-activity",
                leaf: true
            },
            {
                text: 'コンタクト履歴',
                iconCls: "icon-contact",
                expanded: true,
                children: [
                    {
                        text: '一覧',
                        iconCls: "icon-list",
                        leaf: true
                    },
                    {
                        text: '集計処理',
                        iconCls: "icon-chart",
                        leaf: true
                    }
                ]
            },
            {
                text: '案件',
                iconCls: "icon-case",
                expanded: true,
                children: [
                    {
                        text: '一覧',
                        iconCls: "icon-list",
                        leaf: true
                    },
                    {
                        text: '集計処理',
                        iconCls: "icon-chart",
                        leaf: true
                    }
                ]
            },
            {
                text: '取引',
                iconCls: "icon-deal",
                expanded: true,
                children: [
                    {
                        text: '一覧',
                        iconCls: "icon-list",
                        leaf: true
                    },
                    {
                        text: '集計処理',
                        iconCls: "icon-chart",
                        leaf: true
                    }
                ]
            },
            {
                text: 'マスタメンテナンス',
                iconCls: "icon-master",
                expanded: true,
                children: [
                    {
                        text: '会社',
                        iconCls: "icon-company",
                        leaf: true
                    },
                    {
                        text: '担当者',
                        iconCls: "icon-users",
                        leaf: true
                    },
                    {
                        text: '商品',
                        iconCls: "icon-merchandise",
                        leaf: true
                    }
                ]
            },
            {
                text: 'ごみ箱',
                iconCls: "icon-trash",
                leaf: true
            }
        ]
    }

});