describe("Edit", function() {
    beforeEach(function() {
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
