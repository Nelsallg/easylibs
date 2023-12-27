"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordVisibility = void 0;
const process_node_1 = require("../../../utils/src/process-node");
const convert_type_1 = require("../../../utils/src/convert-type");
const utils_1 = require("../../../utils/src/utils");
class PasswordVisibility {
    constructor(iconPath, showIconsToClick = false) {
        this.active = () => {
            const fieldContainer = document.querySelectorAll("password");
            (0, process_node_1.processNodes)(fieldContainer, (container) => {
                container.setAttribute('pws-target', '');
                const field = container.querySelector("input[type='password']");
                const html = this.html();
                container.appendChild(html);
                const iconHide = container.querySelector(".hide-eye");
                const iconShow = container.querySelector(".show-eye");
                const fieldBorderRadius = (0, utils_1.findComputedStyle)(field, "border-radius");
                if ("" !== fieldBorderRadius) {
                    container.style.borderTopRightRadius = fieldBorderRadius;
                    container.style.borderBottomRightRadius = fieldBorderRadius;
                }
                if (this.showIconsToClick) {
                    field.addEventListener("click", () => {
                        html.style.display = 'flex';
                    });
                }
                else {
                    html.style.display = 'flex';
                }
                iconShow.addEventListener('click', () => {
                    if (field.type === 'password') {
                        field.type = "text";
                        field.style.paddingRight = "35px";
                        iconShow.style.display = 'none';
                        iconHide.style.display = 'flex';
                    }
                });
                iconHide.addEventListener('click', () => {
                    if (field.type === 'text') {
                        field.type = "password";
                        iconShow.style.display = 'flex';
                        iconHide.style.display = 'none';
                    }
                });
            });
        };
        this.iconPath = iconPath;
        this.showIconsToClick = showIconsToClick;
    }
    html() {
        const html = `<div class='eyes-icon'>
            <svg class="hide-eye" style='display:none;'><use xlink:href="/${this.iconPath.hide}"></use></svg>
            <svg class="show-eye"><use xlink:href="/${this.iconPath.show}"></use></svg>
        </div>`;
        const htmlstyle = {
            display: 'none',
            position: 'absolute',
            top: '0',
            right: '0',
            height: '100%',
            width: '35px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#d5e3ec'
        };
        let node = (0, convert_type_1.textHtmlToNode)(html, "div");
        Object.assign(node.style, htmlstyle);
        return this.iconStyle(node);
    }
    iconStyle(html) {
        let svg = html.querySelectorAll('svg');
        html.innerHTML = "";
        (0, process_node_1.processNodes)(svg, (iconSvg) => {
            const style = {
                color: '#999',
                cursor: 'pointer',
                width: '1.5rem',
                height: '1.5rem',
            };
            Object.assign(iconSvg.style, style);
            html.appendChild(iconSvg);
        });
        return html;
    }
}
exports.PasswordVisibility = PasswordVisibility;
