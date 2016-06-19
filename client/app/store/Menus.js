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
                iconCls: "x-fa fa-home",
                leaf: true
            },
            {

                text: '最近の活動',
                iconCls: "x-fa fa-home",
                leaf: true
            },
            {
                text: 'コンタクト履歴',
                iconCls: "x-fa fa-home",
                children: [
                    {
                        text: '一覧',
                        iconCls: "x-fa fa-home",
                        leaf: true
                    },
                    {
                        text: '集計処理',
                        iconCls: "x-fa fa-home",
                        leaf: true
                    }
                ]
            },
            {
                text: '案件',
                iconCls: "icon-case",
                children: [
                    {
                        text: '一覧',
                        iconCls: "x-fa fa-home",
                        leaf: true
                    },
                    {
                        text: '集計処理',
                        iconCls: "x-fa fa-home",
                        leaf: true
                    }
                ]
            },
            {
                text: '取引',
                iconCls: "x-fa fa-home",
                children: [
                    {
                        text: '一覧',
                        iconCls: "x-fa fa-home",
                        leaf: true
                    },
                    {
                        text: '集計処理',
                        iconCls: "x-fa fa-home",
                        leaf: true
                    }
                ]
            },
            {
                text: 'マスタメンテナンス',
                iconCls: "x-fa fa-home",
                children: [
                    {
                        text: '会社',
                        iconCls: "x-fa fa-home",
                        leaf: true
                    },
                    {
                        text: '担当者',
                        iconCls: "x-fa fa-home",
                        leaf: true
                    },
                    {
                        text: '商品',
                        iconCls: "x-fa fa-home",
                        leaf: true
                    }
                ]
            },
            {
                text: 'ごみ箱',
                iconCls: "x-fa fa-home",
                leaf: true
            }
        ]
    }

});