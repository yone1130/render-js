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

import { RenderComponent } from '../../../../../../dist/render.js';

export class HelloWorld extends RenderComponent {
    get count() {
        return this.#count;
    }

    set count(newCount) {
        this.#count = newCount;
        this.rendering();
    }

    /**
     * @type {number}
     */
    #count = 0;

    constructor() {
        super();
    }

    /**
     * @returns {Array<HTMLElement>}
     */
    build({ ref }) {
        const { $p, $span, $button } = this.render;

        return super.build({
            ref,
            children: [
                $p({
                    children: [
                        $span({
                            textContent: `Count: ${this.#count}`,
                        }),
                    ],
                }),
                $button({
                    id: "button",
                    textContent: "＋",
                    onClick: () => this.count++,
                }),
            ],
        });
    }
}
