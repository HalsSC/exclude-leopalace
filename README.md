# exclude-reopalace

SUUMOの賃貸物件一覧ページに除外ワードを設定したり、物件名に"レオパレス"が含まれるような物件を自動で除外したりするようなuserscriptです。怒られたら消します。

This is a userscript that allows you to set exclusion words on the SUUMO rental property listings page, and automatically exclude properties that include "Leo Palace" in their names.

詳しくは私のQiitaを見てください。 
https://qiita.com/Hals_SC/items/4cd04bd7d0f9e28136f7

# 機能

+ SUUMOの賃貸物件検索から物件名に **"レオパレス"が含まれる物件** を除外 ⇒ [SUUMOからレオパレス物件を除外(Exclude Leopalace from SUUMO)](https://greasyfork.org/ja/scripts/434556-suumo%E3%81%8B%E3%82%89%E3%83%AC%E3%82%AA%E3%83%91%E3%83%AC%E3%82%B9%E7%89%A9%E4%BB%B6%E3%82%92%E9%99%A4%E5%A4%96-exclude-leopalace-from-suumo)
+ SUUMOの賃貸物件検索に **除外ワードを設定** し，物件名にそのワードが含まれる物件を除外 ⇒ [SUUMOの賃貸物件検索に除外ワードを設定(SUUMO Chintai NG)](https://greasyfork.org/ja/scripts/434625-suumo%E3%81%AE%E8%B3%83%E8%B2%B8%E7%89%A9%E4%BB%B6%E6%A4%9C%E7%B4%A2%E3%81%AB%E9%99%A4%E5%A4%96%E3%83%AF%E3%83%BC%E3%83%89%E3%82%92%E8%A8%AD%E5%AE%9A-suumo-chintai-ng)

ができます。
  
# 使用方法

## 1.Tampermonkeyのインストール

まず使用ブラウザの拡張機能インストールページから _Tampermonkey_ をインストールしてください。
Chromeなら[Chrome ウェブストア](https://chrome.google.com/webstore/category/extensions?hl=ja)，Firefoxなら[Firefoxアドオン](https://addons.mozilla.org/ja/firefox/)からインストールできると思います。

## 2.Greasy Forkにアクセス

Greasy Fork(https://greasyfork.org/ja) にアクセスし当userscriptを検索する。「スクリプトをインストール」を押すとTampermonkeyが開くので「インストール」というボタンを押して完了です。

※userscriptのインストールには十分注意してください。userscriptのインストールおよび使用による問題について作者は一切考慮しません。※

# 使用時の注意

### なんかuserscriptが効かない...

賃貸物件検索してもuserscriptが効かない場合には「部屋ごとに表示」などを経由することで拡張機能が効くURLになると思います．

### 画面が変なのになった

除外を繰り返すと「まとめてお問い合わせする」ボタンが大量に出てきますが，~~直せません~~そういう仕様です．面白がってやってください．
リロードすれば全部リセットされます．
