var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "../../fetch-request/src/index", "../../utils/src/convert-type", "../../utils/src/dom", "../../utils/src/scroll-behavior"], function (require, exports, index_1, convert_type_1, dom_1, scroll_behavior_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cardProcess = exports.paginator = void 0;
    function paginator(options) {
        const { parentElement, skeletonLoading, callback, csrfToken = false, margin, } = options;
        const element = (0, dom_1.$$)(parentElement);
        let lastRequestSuccessfully = true;
        (0, scroll_behavior_1.isEndScrolling)(element, (is, scroll) => {
            if (element && is) {
                const nextPageNumber = element.dataset.nextPageNumber;
                const uri = element.dataset.uri;
                if (nextPageNumber &&
                    nextPageNumber !== "null" &&
                    lastRequestSuccessfully) {
                    const preFetchAction = function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (scroll === "y") {
                                let cartProcess = cardProcess();
                                let skeletonLoadingContainer = null;
                                let time = 3;
                                if (cartProcess.length !== undefined &&
                                    cartProcess.length < 3) {
                                    skeletonLoadingContainer = cartProcess.element;
                                    time = 3 - cartProcess.length;
                                }
                                else {
                                    skeletonLoadingContainer = cardProcess();
                                }
                                if (skeletonLoadingContainer) {
                                    if (skeletonLoadingContainer instanceof Element) {
                                        for (let i = 0; i < time; i++) {
                                            skeletonLoadingContainer.appendChild((0, convert_type_1.textHtmlToNode)(skeletonLoading));
                                        }
                                    }
                                    else if (typeof skeletonLoadingContainer === "object") {
                                        for (let i = 0; i < time; i++) {
                                            skeletonLoadingContainer.element.appendChild((0, convert_type_1.textHtmlToNode)(skeletonLoading));
                                        }
                                    }
                                }
                            }
                            if (scroll === "x") {
                                element.appendChild((0, convert_type_1.textHtmlToNode)(skeletonLoading));
                            }
                            return (lastRequestSuccessfully = false);
                        });
                    };
                    const postFetchAction = function () {
                        const { response } = request;
                        return response;
                    };
                    const request = new index_1.FetchRequest({
                        uri,
                        data: {
                            next_page_number: nextPageNumber,
                            _csrf_token: csrfToken,
                        },
                        preFetchAction,
                        postFetchAction,
                        options: {
                            method: "POST",
                            acceptDataFormat: "form-data",
                        },
                    });
                }
            }
        }, margin);
    }
    exports.paginator = paginator;
    function getLastRowCardChild() {
        const parent = document.querySelector(".product_card_container");
        return parent.querySelector(".row_card_parent:last-child");
    }
    function cardProcess() {
        const lastChild = getLastRowCardChild();
        if (!lastChild) {
            return { element: createRowCardParent() };
        }
        const rows = lastChild.querySelectorAll(".row_card_child");
        if (rows.length < 3) {
            return { element: lastChild, length: rows.length };
        }
        return { element: createRowCardParent() };
    }
    exports.cardProcess = cardProcess;
    function createRowCardParent() {
        var _a;
        const div = document.createElement("div");
        div.className = "row row_card_parent";
        (_a = document.querySelector(".product_card_container")) === null || _a === void 0 ? void 0 : _a.appendChild(div);
        return div;
    }
});
//# sourceMappingURL=index.js.map