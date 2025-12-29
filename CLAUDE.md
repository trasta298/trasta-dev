# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

個人ブログサイト (trasta.dev) のソースコード。Astro + Panda CSS + Bun で構築されている。

## Common Commands

### Setup and Development
```bash
# 依存関係のインストール
bun install

# Panda CSS のコード生成 (必須の初期セットアップ)
bun prepare

# 開発サーバーの起動
bun dev

# 本番ビルド
bun build

# プレビュー
bun preview

# コードフォーマット
bun fmt
```

## Architecture

### Content Collections
- **Blog**: `src/content/blog/` - ブログ記事 (MDXファイル)
  - Schema: `title`, `date`, `tags`, `emoji`, `draft` (optional)
- **Works**: `src/content/works/` - 作品ポートフォリオ
  - Schema: `title`, `description`, `cover` (image), `date`, `tags`, `draft` (optional)
- Content定義: `src/content/config.ts`

### Directory Structure
- `src/pages/` - ルーティング (Astroのファイルベースルーティング)
  - `blog/` - ブログページ
  - `works/` - 作品ページ
  - `en/`, `ja/` - 多言語対応ページ
- `src/layouts/Layout.astro` - ベースレイアウト
- `src/components/` - 再利用可能なAstroコンポーネント
- `styled-system/` - Panda CSSの生成ファイル (編集不可)

### Styling
- **Panda CSS**: CSS-in-JSスタイルシステム
- 設定: `panda.config.ts`
- テーマ: セマンティックトークンでダークモード対応
- グローバルスタイル: Markdownコンテンツ用のスタイルを含む
- 変更後は `bun prepare` で再生成が必要

### Integrations
- `@astrojs/mdx` - MDXサポート
- `@astrojs/partytown` - サードパーティスクリプト最適化 (Google Analyticsなど)
- `@astrojs/sitemap` - サイトマップ自動生成
- Site URL: https://trasta.dev

## Development Notes
- **TypeScript**: Astroのstrictモード + `verbatimModuleSyntax`
- **Package Manager**: Bun (lockfileは `bun.lockb`)
- Panda CSSの変更時は必ず `panda codegen` を実行
- MDXファイルで新しいブログ記事・作品を追加可能
