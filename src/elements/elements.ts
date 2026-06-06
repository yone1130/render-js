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

import { RenderElement } from "./element.js";
import { ElementOptions } from "../types/element-options.js";

class A extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("a");
    }
}

class Article extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("article");
    }
}

class Aside extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("aside");
    }
}

class Base extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("base");
    }
}

class Body extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("body");
    }
}

class Button extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("button");
    }
}

class Code extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("code");
    }
}

class Dialog extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("dialog");
    }
}

class Div extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("div");
    }
}

class Footer extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("footer");
    }
}

class Form extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("form");
    }
}

class H1 extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("h1");
    }
}

class H2 extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("h2");
    }
}

class H3 extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("h3");
    }
}

class H4 extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("h4");
    }
}

class H5 extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("h5");
    }
}

class H6 extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("h6");
    }
}

class Head extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("head");
    }
}

class Header extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("header");
    }
}

class Html extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("html");
    }
}

class Image extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("img");
    }
}

class Li extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("li");
    }
}

class Link extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("link");
    }
}

class Main extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("main");
    }
}

class Meta extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("meta");
    }
}

class Nav extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("nav");
    }
}

class Ol extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("ol");
    }
}

class P extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("p");
    }
}

class Script extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("script");
    }
}

class Search extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("search");
    }
}

class Section extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("section");
    }
}

class Span extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("span");
    }
}

class Strong extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("strong");
    }
}

class Style extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("style");
    }
}

class Title extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("title");
    }
}

class Ul extends RenderElement {
    constructor(options: ElementOptions) {
        super(options);
    }

    create(): HTMLElement {
        return super.create("ul");
    }
}

abstract class RenderElements {
    static A = A;
    static Article = Article;
    static Aside = Aside;
    static Base = Base;
    static Body = Body;
    static Button = Button;
    static Code = Code;
    static Dialog = Dialog;
    static Div = Div;
    static Footer = Footer;
    static Form = Form;
    static H1 = H1;
    static H2 = H2;
    static H3 = H3;
    static H4 = H4;
    static H5 = H5;
    static H6 = H6;
    static Head = Head;
    static Header = Header;
    static Html = Html;
    static Image = Image;
    static Li = Li;
    static Link = Link;
    static Main = Main;
    static Meta = Meta;
    static Nav = Nav;
    static Ol = Ol;
    static P = P;
    static Script = Script;
    static Search = Search;
    static Section = Section;
    static Span = Span;
    static Strong = Strong;
    static Style = Style;
    static Title = Title;
    static Ul = Ul;
}

export { RenderElements };
