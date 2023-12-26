define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.textHtmlToNode = void 0;
    function textHtmlToNode(textHtml, targetName = "div", children = false) {
        const target = document.createElement(`${targetName}`);
        target.innerHTML = textHtml;
        if (true === children) {
            return target.children;
        }
        return target.firstElementChild;
    }
    exports.textHtmlToNode = textHtmlToNode;
});
//# sourceMappingURL=convert-type.js.map