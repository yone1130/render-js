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

import { App } from "./features/app/app.js";

class TestAppCreator {
    /**
     * @param {{ root: HTMLElement }}
     */
    constructor({ root }) {
        this.root = root;
    }

    /**
     * @returns {Promise<unknown>}
     */
    async main() {
        const { Render } = await this.#importRender();
        this.render = new Render();
        this.rendering();
    }

    /**
     * @returns {void}
     */
    rendering() {
        this.render.runApp({
            root: this.root,
            app: new App(),
        });
    }

    /**
     * @returns {Promise<unknown>}
     */
    async #importRender() {
        try {
            return await import('../../../dist/render.js');
        } catch (error) {
            this.#onFailedImportRender(error);
        }
    }

    /**
     * @returns {void}
     */
    #onFailedImportRender(error) {
        root.textContent = "Error: Failed to import the render.js package. Please build the project first.";
        throw new Error(`Error: Failed to import the render.js package. Please build the project first.: ${error}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const testAppCreator = new TestAppCreator({
        root: document.getElementById("root"),
    });

    testAppCreator.main();
});
