/*!
 * 
 * Render.js
 * 
 * Copyright (C) 2025 よね/Yone
 * Licensed under the MIT License.
 * 
 * https://github.com/yone1130/render-js
 * 
 */

import { Render, RenderApp, RenderComponent } from "https://cdn.yoneyo.com/scripts/render-js@1.0.0-beta.2/dist/render.js";

class CounterPage extends RenderComponent {
    /**
     * @type {number}
     */
    get count() {
        return this.#count;
    }

    /**
     * @type {number}
     */
    set count(newCount) {
        this.#count = newCount;
        this.rendering();
    }

    /**
     * @type {number}
     */
    #count = 0;

    constructor() {
        super({
            id: "counter",
        });
    }

    /**
     * @param {{ ref: unknown }}
     * @returns {Array<HTMLElement>}
     */
    build({ ref }) {
        const { $div, $p, $button } = this.render;

        return super.build({
            ref,
            children: [
                $p({
                    className: "result",
                    textContent: `Count: ${this.count}`,
                }),
                $div({
                    className: "button-container",
                    children: [
                        $button({
                            className: "increment-button button",
                            textContent: "＋",
                            onClick: () => this.#incrementCount(),
                        }),
                        $button({
                            className: "decrement-button button",
                            textContent: "－",
                            onClick: () => this.#decrementCount(),
                        }),
                    ],
                }),
            ],
        });
    }

    /**
     * @returns {void}
     */
    #incrementCount() {
        this.count++;
    }

    /**
     * @returns {void}
     */
    #decrementCount() {
        this.count--;
    }
}

class CounterApp extends RenderApp {
    constructor() {
        super();
    }

    /**
     * @param {{ ref: unknown }}
     * @returns {Array<HTMLElement>}
     */
    build({ ref }) {
        return super.build({
            ref: ref,
            children: [
                new CounterPage(),
            ],
        });
    }
}

/**
 * @type {Render}
 */
const render = new Render();

render.runApp({
    root: document.body,
    app: new CounterApp(),
});
