define(["require", "exports", "../../../animatest/src/script/animation", "../../../utils/src/convert-type", "../../../utils/src/scroll-behavior"], function (require, exports, animation_1, convert_type_1, scroll_behavior_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DragAndDropManager = void 0;
    class DragAndDropManager {
        constructor() {
            this.isDragging = false;
            this.afterElement = null;
            this.placeholder = null;
            this.slip = "";
            this.outerDragged = false;
            this.startY = 0;
            this.currentY = 0;
        }
        droppingStart() {
            const draggables = document.querySelectorAll('.draggable');
            draggables.forEach(() => {
                document.addEventListener('drag', this.drag.bind(this), false);
                document.addEventListener('dragover', this.dragOver.bind(this), false);
                document.addEventListener('dragenter', this.dragEnter.bind(this), false);
                document.addEventListener('dragleave', this.dragLeave.bind(this), false);
                document.addEventListener('dragend', this.dragEnd.bind(this), false);
            });
        }
        drag(event) {
            this.dragged = event.target;
        }
        dragStart(event) {
            if (event) {
                this.dragged = event.target;
                this.startY = event.clientY;
                if (this.dragged.classList.contains('undraggable')) {
                    return null;
                }
                this.dragEvent = event;
                this.dragged.style.opacity = '.4';
                this.dragged.classList.add('dragging');
                (0, scroll_behavior_1.enableScrollBehavior)();
                this.isDragging = true;
                return this.dragged;
            }
        }
        dragOver(event) {
            var _a;
            let element = event.target;
            this.currentY = event.clientY;
            event.preventDefault();
            if (event.dataTransfer) {
                event.dataTransfer.dropEffect = 'move';
                let parent = element.closest('.dropzone');
                let undroppable = element.closest('.undroppable');
                if (!parent) {
                    event.dataTransfer.dropEffect = 'none';
                }
                else if (undroppable) {
                    event.dataTransfer.dropEffect = 'none';
                }
                else {
                    event.dataTransfer.dropEffect = 'copy';
                }
            }
            if (this.draggableParent &&
                this.draggableParent.classList.contains("draggable")) {
                const element = this.draggableParent.closest(".dropzone");
                if (this.isDragging) {
                    this.afterElement = this.getDragAfterElement(element, event.clientY);
                    this.slip = this.draggingSlip();
                    if (this.afterElement) {
                        if ("top" === this.slip) {
                            (0, animation_1.animeIn)({
                                element: this.dragged,
                                animation: {
                                    type: "slide",
                                    position: "bottom",
                                    clearAfterApplying: true,
                                },
                                display: null,
                            });
                            element.insertBefore(this.dragged, this.afterElement);
                        }
                        if ("bottom" === this.slip) {
                            (0, animation_1.animeIn)({
                                element: this.dragged,
                                animation: {
                                    type: "slide",
                                    position: "top",
                                    clearAfterApplying: true,
                                },
                                display: null,
                            });
                            element.insertBefore(this.dragged, (_a = this.afterElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling);
                        }
                    }
                }
            }
        }
        dragEnter(event) {
            let element = event.target;
            this.draggableParent = element.parentElement;
            if (element.classList.contains("dropzone")) {
                element.style.background = "rgba(0, 0, 0, 0.5)"; //#8b5cf6
            }
            return element;
        }
        dragLeave(event) {
            let element = event.target;
            this.draggableParent = element.parentElement;
            if (element.classList.contains("dropzone") ||
                element.classList.contains("draggable")) {
                element.style.background = "";
                if (this.placeholder) {
                    element.removeChild(this.placeholder);
                    this.placeholder = null;
                }
            }
            return element;
        }
        dragEnd(event) {
            let draggable = event.target;
            draggable.style.opacity = "";
            draggable.classList.remove("dragging");
            this.isDragging = false;
            if (this.placeholder &&
                this.draggableParent &&
                this.draggableParent.classList.contains("draggable")) {
                const element = this.draggableParent.closest(".dropzone");
                element.insertBefore(this.draggableParent, this.placeholder);
                element.removeChild(this.placeholder);
                this.placeholder = null;
            }
            return draggable;
        }
        drop(event, animation) {
            var _a;
            if (event) {
                event.preventDefault();
                let dropzone = event.target;
                this.dropEvent = event;
                if (dropzone.classList.contains("undroppable")) {
                    return null;
                }
                try {
                    if (dropzone.classList.contains("dropzone")) {
                        dropzone.style.background = "";
                        if (null != ((_a = this.dragged) === null || _a === void 0 ? void 0 : _a.parentNode)) {
                            this.dragged.parentNode.removeChild(this.dragged);
                        }
                        if (dropzone.localName == "td") {
                            let tr = dropzone.parentElement;
                            if (null != tr) {
                                let dropzoneParent = tr.parentElement;
                                if (null != dropzoneParent) {
                                    dropzoneParent.appendChild(this.dragged);
                                }
                                tr.remove();
                                return dropzoneParent;
                            }
                        }
                    }
                    else if (!dropzone.classList.contains("dropzone")) {
                        return dropzone.closest(".dropzone");
                    }
                }
                catch (error) {
                    if (typeof error === "string") {
                        return new Error(error);
                    }
                }
            }
        }
        hundleDraggedPosition(dropzone) {
            const siblingElements = Array.from(dropzone.children);
            const dropIndex = siblingElements.indexOf(dropzone);
            console.log({ dropIndex, siblingElements, dropzone });
            if (dropIndex !== -1) {
                let insertIndex = dropIndex;
                // Find the index of the element before the dropzone
                for (let i = dropIndex - 1; i >= 0; i--) {
                    if (!siblingElements[i].classList.contains("undroppable")) {
                        insertIndex = i + 1; // Insert after the element before the dropzone
                        break;
                    }
                }
                siblingElements.splice(insertIndex, 0, this.dragged);
                const dropzoneParent = dropzone.parentElement;
                dropzoneParent.innerHTML = ""; // Clear dropzone
                siblingElements.forEach((sibling) => dropzoneParent.appendChild(sibling));
                return dropzoneParent;
            }
        }
        draggablePlaceholder(skeleton, animationType) {
            if (!skeleton) {
                skeleton = document.createElement("tr");
                const td = document.createElement("td");
                const div = document.createElement("div");
                skeleton.className = "draggable-skeleton";
                td.colSpan = 12;
                div.className = "rotating-border";
                td.appendChild(div);
                skeleton.appendChild(td);
                if (animationType) {
                    this.setAnimation(skeleton, animationType);
                }
                return skeleton;
            }
            if (typeof skeleton === "string") {
                return (0, convert_type_1.textHtmlToNode)(skeleton);
            }
        }
        setAnimation(element, animationType) {
            let fromInToOut = true;
            const type = animationType !== null && animationType !== void 0 ? animationType : "slide";
            if ("top" === this.draggingSlip()) {
                fromInToOut = false;
            }
            else if ("bottom" === this.draggingSlip()) {
                fromInToOut = true;
            }
            (0, animation_1.animeIn)({
                element: element,
                animation: { type, position: "top", clearAfterApplying: true },
                display: null,
                fromInToOut,
            });
        }
        draggingSlip() {
            if (this.currentY < this.startY) {
                return "top";
            }
            else if (this.currentY > this.startY) {
                return "bottom";
            }
            return "";
        }
        getDragAfterElement(container, y) {
            const draggableElements = Array.from(container.querySelectorAll(".draggable:not(.dragging)"));
            let closestElement = null;
            let minOffset = Number.POSITIVE_INFINITY;
            for (const child of draggableElements) {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                if (offset < 0 && offset > -box.height / 2 && offset < minOffset) {
                    minOffset = offset;
                    closestElement = child;
                }
            }
            return closestElement;
        }
    }
    exports.DragAndDropManager = DragAndDropManager;
});
//# sourceMappingURL=main.js.map