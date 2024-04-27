// ==UserScript==
// @name         SUUMOからレオパレス物件を除外(Exclude Leopalace from SUUMO)
// @namespace    ExcludeLeopalaceFromSUUMO
// @version      1.4.1
// @description  SUUMOの賃貸物件検索から物件名に"レオパレス"が含まれる物件を除外します．
// @author       HalsSC
// @match        https://suumo.jp/jj/chintai/ichiran/FR301FC001/*
// @license      MIT
// ==/UserScript==

(function () {
    const titles = $(".cassetteitem_content-title");
    const exName = $("レオパレス").val();
    let cnt = 0;
    for (let i = 0; i < titles.length; i++) {
        try {
            let item = titles[i].closest(".cassetteitem");
            if (titles[i].textContent.includes(exName) && !item.hidden) {
                item.hidden = true;
                cnt++;
            }
        } catch (TypeError) {
            { }
        }
    }
    console.log(cnt + "件の" + exName + "物件を除外");
})();