"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forbiddener = exports.RoudedHeadCornet = void 0;
const spinner_td = document.createElement('td');
spinner_td.classList.add("td-spinner");
spinner_td.setAttribute('tabindex', '-1');
const div = document.createElement("div");
div.classList.add("spinner");
spinner_td.appendChild(div);
exports.RoudedHeadCornet = spinner_td;
function forbiddener(tag = 'td', backgroundColor) {
    let forbiddenTag = document.createElement(tag);
    forbiddenTag.setAttribute('class', 'forbidden');
    const style = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: '.7',
        zIndex: '10',
        backgroundColor: backgroundColor ? backgroundColor : '#FFFFFF',
    };
    Object.assign(forbiddenTag.style, style);
    return forbiddenTag;
}
exports.forbiddener = forbiddener;
