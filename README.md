# E2MC Pages

個人ポートフォリオサイト用のGitHub Pagesリポジトリです。

## 機能

- 自己紹介・スキルの紹介
- 実績・プロジェクトの紹介
- Zenn記事の自動取得・表示

## セットアップ手順

### 1. リポジトリのセットアップ

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/e2mc-pages.git
cd e2mc-pages
```

### 2. GitHub Pagesの設定

1. リポジトリの Settings > Pages を開く
2. Source を `main` ブランチの `docs` フォルダに設定
3. Jekyll を有効化

### 3. GitHub Actionsの設定

Zenn記事の自動取得のためのワークフローが `.github/workflows/fetch-articles.yml` に設定済みです。
以下の項目を確認してください：

1. Actionsタブで Workflows が有効になっていること
2. `workflow_dispatch` で手動実行が可能
3. 毎日0時（UTC）に自動実行

### 4. コンテンツの更新

以下のファイルを編集してコンテンツを更新します：

- `docs/index.md`: トップページ
- `docs/about.md`: 自己紹介・スキル
- `docs/products.md`: 実績・プロジェクト

### 5. Zenn記事の表示

Zenn記事は以下の仕組みで自動取得・表示されます：

1. GitHub Actionsで毎日Zennの記事を取得
2. `docs/assets/zenn-articles.json` に保存
3. `docs/assets/js/load-articles.js` で最新5件を表示

## ディレクトリ構成

```
.
├── .github/
│   └── workflows/
│       └── fetch-articles.yml  # Zenn記事取得用ワークフロー
├── docs/
│   ├── assets/
│   │   ├── js/
│   │   │   └── load-articles.js  # 記事表示用JavaScript
│   │   └── zenn-articles.json    # 取得した記事データ
│   ├── index.md    # トップページ
│   ├── about.md    # 自己紹介ページ
│   └── products.md # 実績ページ
└── README.md
```

## カスタマイズ

### Zenn以外の記事を追加する場合

1. `.github/workflows/fetch-articles.yml` に新しいAPIコールを追加
2. `docs/assets/js/load-articles.js` に表示ロジックを追加
3. `docs/index.md` に表示用のHTML要素を追加

### スタイルのカスタマイズ

必要に応じて `docs/assets/css/` にCSSファイルを追加してスタイリングを調整できます。
