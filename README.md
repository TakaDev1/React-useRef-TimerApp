# React-useRef-TimerApp

Reactの `useRef` を使って、再レンダリングを発生させずにタイマーIDとカウントを保持する練習用アプリです。

## 📌 概要

「タイマー開始」ボタンを押すと1秒ごとにカウントアップし、現在のカウントをコンソールへ出力します。

タイマーIDとカウント値は `useRef` で管理するため、カウントアップによる再レンダリングは発生しません。

「タイマー停止」ボタンを押すと `clearInterval` によってタイマーを停止します。

## 🛠 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* useRef
* setInterval
* clearInterval

## 📂 コンポーネント構成

```text
src/
├── components/
│   ├── HandleTimer.tsx
│   └── DisplayTimer.tsx
├── App.tsx
└── main.tsx
```

### HandleTimer.tsx

タイマー処理を担当します。

* `useRef` でタイマーIDを保持
* `useRef` でカウント値を保持
* `setInterval` で1秒ごとにカウント
* コンソールへカウントを出力
* `clearInterval` でタイマーを停止

### DisplayTimer.tsx

タイマーの開始・停止ボタンを表示し、`HandleTimer` から受け取った処理を実行します。

## 🔄 処理の流れ

```text
「タイマー開始」をクリック
        ↓
setIntervalを実行
        ↓
timerRef.currentにタイマーIDを保存
        ↓
1秒経過
        ↓
countRef.current += 1
        ↓
コンソールに出力
        ↓
1秒ごとに繰り返す
```

「タイマー停止」をクリックすると、

```text
「タイマー停止」をクリック
        ↓
timerRef.currentを取得
        ↓
clearInterval()
        ↓
タイマー停止
```

となります。

## 🔑 useRefの役割

このアプリでは2つの `useRef` を使用します。

```tsx
const timerRef = useRef<number | null>(null);
const countRef = useRef<number>(0);
```

### timerRef

`setInterval` が返すタイマーIDを保持します。

```tsx
timerRef.current = window.setInterval(() => {
  // 処理
}, 1000);
```

停止するときは、このIDを `clearInterval` に渡します。

```tsx
clearInterval(timerRef.current);
```

### countRef

タイマーのカウント値を保持します。

```tsx
countRef.current += 1;

console.log("カウント:", countRef.current);
```

`ref.current` を変更しても、それだけではReactの再レンダリングは発生しません。

## 🎯 学習ポイント

* `useRef` による値の保持
* `ref.current` の使い方
* `useState` と `useRef` の違い
* `setInterval` の使い方
* `clearInterval` によるタイマー停止
* タイマーIDを `useRef` で管理する方法
* 再レンダリングを発生させずに値を更新する方法
* コンポーネント間で関数をPropsとして渡す方法

## 🚀 起動方法

```bash
npm install
npm run dev
```

ブラウザでアプリを開き、「タイマー開始」をクリックしてください。

カウントは画面には表示されず、ブラウザの開発者ツールのコンソールに出力されます。
