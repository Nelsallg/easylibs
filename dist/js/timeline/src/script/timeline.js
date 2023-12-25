// import {pageTabs} from "./page-tabs";
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.animeLine = void 0;
    function animeLine() {
        let isAnimated = false;
        // pageTabs('.language-icon .button', '.language-timeline');
        const buttons = document.querySelectorAll('.language-icon .button');
        const lines = document.querySelectorAll('.language-timeline');
        activeLine(lines, false, 0);
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                activeLine(lines);
            });
        });
    }
    exports.animeLine = animeLine;
    function activeLine(lines, isAnimated = false, timer = 100) {
        lines.forEach(line => {
            if (line.classList.contains('active')) {
                setTimeout(() => {
                    line.classList.remove('idle');
                    isAnimated = true;
                }, timer);
            }
            else {
                line.classList.add('idle');
            }
        });
    }
});
//# sourceMappingURL=timeline.js.map