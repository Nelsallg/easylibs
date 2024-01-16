import FetchRequest from "packages/fetch-request/@types/fetch-request";
import Utils from "@easylibs/utils";
import ScrollBehavior from "@easylibs/scroll-behavior";

interface PaginatorOptions {
    parentElement: HTMLElement | string;
    skeletonLoading: string;
    callback: (response: any, element: HTMLElement) => void;
    csrfToken?: boolean;
    margin?: { x: number; y: number };
}

export function paginator(options: PaginatorOptions): void {
    const {
        parentElement,
        skeletonLoading,
        callback,
        csrfToken = false,
        margin,
    } = options;

    const element = Utils.$$(parentElement) as HTMLElement;
    let lastRequestSuccessfully = true;

    ScrollBehavior.isEndScrolling(element, (is: boolean, scroll: string) => {
        if (element && is) {
            const nextPageNumber = element.dataset.nextPageNumber;
            const uri = element.dataset.uri as string;

            if (
                nextPageNumber &&
                nextPageNumber !== "null" &&
                lastRequestSuccessfully
            ) {
                const onPreFetch = async function () {
                    if (scroll === "y") {
                        let cartProcess = cardProcess();
                        let skeletonLoadingContainer = null;
                        let time = 3;

                        if (
                            cartProcess.length !== undefined &&
                            cartProcess.length < 3
                        ) {
                            skeletonLoadingContainer = cartProcess.element;
                            time = 3 - cartProcess.length;
                        } else {
                            skeletonLoadingContainer = cardProcess();
                        }

                        if (skeletonLoadingContainer) {
                            if (skeletonLoadingContainer instanceof Element) {
                                for (let i = 0; i < time; i++) {
                                    skeletonLoadingContainer.appendChild(
                                        Utils.textToHTMLElement(skeletonLoading) as Node
                                    );
                                }
                            } else if (
                                typeof skeletonLoadingContainer === "object"
                            ) {
                                for (let i = 0; i < time; i++) {
                                    skeletonLoadingContainer.element.appendChild(
                                        Utils.textToHTMLElement(skeletonLoading) as Node
                                    );
                                }
                            }
                        }
                    }

                    if (scroll === "x") {
                        element.appendChild(
                            Utils.textToHTMLElement(skeletonLoading) as Node
                        );
                    }

                    return (lastRequestSuccessfully = false);
                };

                const onPostFetch = function () {
                    const { response } = request;
                    return response;
                };

                const request = new FetchRequest({
                    uri,
                    data: {
                        next_page_number: nextPageNumber,
                        _csrf_token: csrfToken,
                    },
                    onPreFetch,
                    onPostFetch,
                    options: {
                        method: "POST",
                        acceptDataFormat: "form-data",
                    },
                });
            }
        }
    }, margin);
}

function getLastRowCardChild() {
    const parent = document.querySelector(
        ".product_card_container"
    ) as HTMLElement;
    return parent.querySelector(".row_card_parent:last-child");
}

export function cardProcess() {
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

function createRowCardParent() {
    const div = document.createElement("div");
    div.className = "row row_card_parent";
    document.querySelector(".product_card_container")?.appendChild(div);
    return div;
}
