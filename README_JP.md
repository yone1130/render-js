# Render.js

[![DeepWiki に質問する](https://deepwiki.com/badge.svg)](https://deepwiki.com/yone1130/render-js)

[Read in English >](./README.md)

## 概要

**Render.js** は、TypeScript / JavaScript 用のHTMLレンダリングライブラリです。

## 利用方法

### 1. インストールまたはインポート

パッケージとしてインストール (TypeScript):
```bash
npm i yone1130/render-js
```

またはCDNから直接インポート (JavaScript):
```js
import { Render, RenderApp, RenderComponent } from "https://cdn.yoneyo.com/scripts/render-js@1.0.0-beta.2/dist/render.js";
```

### 2. 使う

サンプルコード (App Creator):
```js
class Greeting extends RenderComponent {
    constructor() {
        super();
        this.title = "Render.js";
        this.message = "Hello World";
    }

    build() {
        const { $h1, $p } = this.render;

        return super.build({
            children: [
                $h1({
                    id: "title",
                    textContent: this.title,
                }),
                $p({
                    id: "message",
                    textContent: this.message,
                }),
            ]
        });
    }
}

class MyApp extends RenderApp {
    constructor() { super(); }

    build() {
        return super.build({
            children: [
                new Greeting(),
            ]
        });
    }
}

const render = new Render();

render.runApp({
    root: document.body,
    app: new MyApp(),
});
```

またはレンダリングのみ (Builder):
```js
const render = new Render();
const root = document.getElementById("root");

const app = () => {
    const { $div, $h1, $p } = render;
    const title = "Render.js";
    const message = "Hello World";

    return [
        $div({
            id: "app",
            children: [
                $h1({
                    id: "title",
                    textContent: title,
                }),
                $p({
                    id: "message",
                    textContent: message,
                }),
            ],
        }),
    ];
};

render.build({
    target: root,
    children: app(),
});
```

### サンプルコード

- **サンプルコード: [examples/](./examples/).**

### リソース

- **ドキュメント: https://render-js.yoneyo.com/ .**
- **ウェブデモ: https://render-js.yoneyo.com/examples/ .**

## 開発

### 1. パッケージをインストールする

```bash
pnpm i
```

### 2. ビルド

JavaScript にコンパイルします。

```bash
pnpm run build
```

コンパイルされたJavaScriptファイルが `dist/` ディレクトリに出力されます。

## License

[MIT License](./LICENSE) のもとでライセンスされます。

Copyright © 2025 よね/Yone
