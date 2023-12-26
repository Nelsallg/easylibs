define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flashTemplate = void 0;
    function flashTemplate(properties, template) {
        let setIcon;
        let button;
        switch (template) {
            case 1:
                (true === Boolean(properties.closeButton)) ?
                    button = `<svg close-modal><use xlink:href='/svg/alert.svg#close-modal'></use></svg>` :
                    button = '';
                ('null' != properties.icon) ?
                    setIcon = `<h6><svg><use xlink:href='/svg/alert.svg#${properties.icon}'></use></svg></h6>` :
                    setIcon = '';
                return `<span class="alert-header">
                        <h6>${properties.title}</h6>
                        ${button}
                    </span>
                    <span class="alert-content">
                        ${setIcon}
                        <h6 class="text">${properties.message}</h6>
                    </span>`;
            default:
                (true === Boolean(properties.closeButton)) ?
                    button = `<span class="flash-header"><div id="flash-close-button"></div></span>` :
                    button = '';
                return `${button}
                    <span class="flash-content">
                    <svg><use xlink:href="/${properties.icon}"></use></svg>
                    <h6 class="flash-message">
                        ${properties.message}
                    </h6>
                    </span>`;
        }
    }
    exports.flashTemplate = flashTemplate;
});
//# sourceMappingURL=template.js.map