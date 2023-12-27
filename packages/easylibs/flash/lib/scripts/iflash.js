"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flashHTMLModel = void 0;
const icon_1 = require("./icon");
require("../assets/index.scss");
class flashHTMLModel {
    constructor(message, title, icon, type) {
        this.message = message;
        this.title = title;
        this.icon = icon;
        this.type = type;
    }
    static parent() {
        let title = flashHTMLModel.setTitle(this.title);
        let icon = flashHTMLModel.setIcon(this.icon);
        let type = flashHTMLModel.setType(this.type);
        if ((false === title || undefined === title) && false === flashHTMLModel.closeButton) {
            flashHTMLModel.hasHeader = false;
        }
        if (undefined !== type || "" !== icon) {
            flashHTMLModel.hasFlashIcon = true;
        }
        return `${flashHTMLModel.hasHeader ? "<span class='flash-header'>" : ""}
                ${typeof title == "string" ? "<h6>" + title + "</h6>" : ""}
                ${flashHTMLModel.closeButton ? (0, icon_1.SVG)('close-modal', 'iconPath') : ""}
            ${flashHTMLModel.hasHeader ? "</span>" : ""}
            <span class="flash-content">
                ${flashHTMLModel.hasFlashIcon ? "<h6>" + icon + "</h6>" : ""}
                <h6 class="flash-message">
                    ${this.message}
                </h6>
            </span>`;
    }
    getMessage() {
        return this.message;
    }
    static setMessage(message) {
        if (undefined !== message) {
            return this.message = message;
        }
        return flashHTMLModel.message;
    }
    getType() {
        var _a;
        return (_a = this.type) !== null && _a !== void 0 ? _a : "";
    }
    static setType(type) {
        if (undefined !== type) {
            return this.type = type;
        }
        return flashHTMLModel.type;
    }
    getTitle() {
        var _a;
        return (_a = this.title) !== null && _a !== void 0 ? _a : "";
    }
    static setTitle(title) {
        if (undefined === title || true === title) {
            return this.title = flashHTMLModel.type;
        }
        if (typeof title == "string") {
            return this.title = title;
        }
        return "";
    }
    getIcon() {
        var _a;
        return (_a = this.icon) !== null && _a !== void 0 ? _a : "";
    }
    static setIcon(icon) {
        if (true === icon && undefined === flashHTMLModel.type) {
            return this.icon = (0, icon_1.SVG)("success", 'iconPath');
        }
        if (true === icon && undefined !== flashHTMLModel.type) {
            return this.icon = (0, icon_1.SVG)(flashHTMLModel.type, 'iconPath');
        }
        if (typeof icon == "string") {
            return this.icon = (0, icon_1.SVG)(icon, 'iconPath');
        }
        return "";
    }
}
exports.flashHTMLModel = flashHTMLModel;
flashHTMLModel.closeButton = true;
flashHTMLModel.hasHeader = true;
flashHTMLModel.hasFlashIcon = false;
