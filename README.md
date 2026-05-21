# Render.js

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/yone1130/render-js)

[日本語で読む >](./README_JP.md)

## Overview

**Render.js** is a TypeScript / JavaScript library for rendering HTML elements.

## Usage

### 1. Install or Import

Install as a package (TypeScript):
```bash
npm i yone1130/render-js
```

or direct importing from CDN (JavaScript):
```js
import { Render, RenderApp, RenderComponent } from "https://cdn.yoneyo.com/scripts/render-js@1.0.0-beta.2/render.js";
```

### 2. Use

Example code (with App Creator):
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

or just rendering (with Builder):
```js
const render = new Render();
const root = document.getElementById("root");

function app() {
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

### Example codes

- **Example codes: [examples/](./examples/).**

### Resources

- **Documents: https://render-js.yoneyo.com/ .**
- **Demos: https://render-js.yoneyo.com/examples/ .**

## Development

### 1. Install Packages

```bash
pnpm i
```

### 2. Build

Compile to JavaScript.

```bash
pnpm run build
```

Emitted JavaScript files will be output to the `dist/` directory.

## License

Licensed under the [MIT License](./LICENSE).

Copyright © 2025 よね/Yone
