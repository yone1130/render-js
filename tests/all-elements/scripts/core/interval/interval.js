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

export class Interval {
    get interval() {
        return this.#interval;
    }

    set interval(newInterval) {
        this.#interval = newInterval;
        this.#listeners.forEach(async (listener) => await listener());
    }

    /**
     * @type {NodeJS.Timeout}
     */
    #interval = null;

    /**
     * @type {Array<() => unknown)>}
     */
    #listeners = [];

    /**
     * @param {{ interval: NodeJS.Timeout }}
     */
    constructor({ interval }) {
        this.#interval = interval;
    }

    /**
     * @param {() => unknown}
     * @returns {void}
     */
    addListener({ callback }) {
        this.#listeners.push(callback);
    }

    /**
     * @param {() => unknown}
     * @returns {void}
     */
    removeListener({ callback }) {
        this.#listeners.splice(this.#listeners.indexOf(callback), 1);
    }
}
