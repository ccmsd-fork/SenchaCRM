describe("レコードの基本操作", function() {

    beforeEach(function() {
        Ext.first('people-detail').setCollapsed(true);
    });

    it("レコードを新規追加できること", function() {
        ST.button('[text=\'追加\']').click().and(function () {
            ST.textField('[reference=lastname]').focus().type('Sencha');
            ST.textField('[reference=firstname]').focus().type('太郎');
            ST.button('[text=\'保存\']').click().wait(500).and(function () {
                ST.button('[text=\'OK\']').and(function (button) {
                    expect(button).toBeDefined();
                    button.click();
                });
            });
        });
    });

    it("レコードの取得できること", function() {
        ST.grid('people-list > gridpanel').
        rowAt(0).and(function (row) {
            expect(row.record.get('lastName')).toBe('Sencha');
            expect(row.record.get('firstName')).toBe('太郎');
        })
    });

    it("レコードを編集できること", function() {
        ST.grid('people-list > gridpanel').
        rowAt(0).
        cellAt(0).
        click().and(function () {
            ST.textField('[reference=firstname]').setValue('花子');
            ST.button('[text=\'保存\']').click().wait(500).and(function () {
                ST.button('[text=\'OK\']').and(function (button) {
                    expect(button).toBeDefined();
                    button.click();
                });
            });
        }).and(function () {
            ST.grid('people-list > gridpanel').
            rowAt(0).and(function (row) {
                expect(row.record.get('lastName')).toBe('Sencha');
                expect(row.record.get('firstName')).toBe('花子');
            })
        });
    });

    it("レコードを削除できること", function() {
        ST.grid('people-list > gridpanel').
        rowAt(0).
        cellAt(6).
        click().and(function () {
            ST.button('[text=\'編集内容の保存\']').click().and(function () {
                ST.button('[text=\'はい\']').click().wait(500).and(function () {
                    ST.button('[text=\'OK\']').click();
                });
            });
        }).and(function () {
            ST.grid('people-list > gridpanel').
            rowAt(0).and(function (row) {
                expect(row.record.get('lastName')).not.toBe('Sencha');
                expect(row.record.get('firstName')).not.toBe('花子');
            })
        });
    });
});

describe("ボタンのステータス", function() {
    beforeEach(function() {
        Ext.first('people-detail').setCollapsed(true);
        
        ST.grid('people-list > gridpanel').
        rowAt(0).
        cellAt(0).
        click();
    });

    it("ボタンが非活性であること", function() {
        ST.button('[text=\'保存\']').and(function (button) {
            expect(button.isDisabled()).toBe(true);
        });
    });
    
    it("ボタンが活性であること", function() {
        ST.textField('[reference=firstname]').
          focus().
          type('文字を追加').and(function (text) {
                ST.button('[text=\'保存\']').and(function (button) {
                    expect(button.isDisabled()).toBe(false);
                });
          });
    });
    
    it("タブ切り替えできること", function(done) {
        ST.play([
            { type: "tap", target: "tab[text=\"最近の活動\"]", x: 18, y: 31 },
            { type: "tap", target: "tab[text=\"基本\"]", x: 21, y: 27 },
            { type: "tap", target: "tab[text=\"最近の活動\"]", x: 22, y: 19 },
            { type: "tap", target: "tab[text=\"基本\"]", x: 27, y: 20 },
            { type: "tap", target: "tab[text=\"最近の活動\"]", x: 19, y: 23 },
            function () {
                ST.screenshot('TAB-1', done);
            }
        ]);
    });

    afterEach(function() {
        ST.component('people-edit').and(function (detail) {
            detail.close();
        });
    });
});
