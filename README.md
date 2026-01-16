# Login Screen Project（Money Pay）

## 概要
Next.js と Tailwind CSS を使用して作成した、  
**金融系サービスを想定したログイン画面のUIサンプルプロジェクト**です。

フロントエンドのUI設計・スタイリングに重点を置きつつ、  
将来的に認証機能やバックエンド連携を追加できる構成で実装しています。

---

## 使用技術
- Next.js 16（App Router）
- React 19
- TypeScript
- Tailwind CSS 4

---

## 実装のポイント
- グリーン × ブラックを基調とした、金融系サービスを意識したデザイン
- Tailwind CSS を用いた効率的なUI構築
- `peer` を活用し、フォーカス時にアイコンの色が変化する入力フォーム
- 「Remember Me」を独立したコンポーネントとして分離し、状態管理を実装
- hover / transition を活用し、操作感を意識したUI調整
- API Routes との連携を想定したフォーム構成

---

## スクリーンショット
![ログイン画面](public/screenshot.png)

---

## 学習目的・背景
- Next.js App Router を用いたコンポーネント設計の理解
- フォームUIの設計と状態管理の練習
- 実務を意識したログイン画面のUI・UX設計

---

## 今後の改善予定
- フォームバリデーションの追加
- レスポンシブ対応の強化
- API Routes を用いた認証処理の実装
- バックエンド機能（DB・認証）との連携
