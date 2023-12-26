define(["require", "exports", "../../animation/src/script/animation", "../../utils/src/process-node"], function (require, exports, animation_1, process_node_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormModal = void 0;
    class FormModal {
        init() {
            const modals = document.querySelectorAll('[data-modal^="modal-bg"]');
            (0, process_node_1.processNodes)(modals, (modal) => {
                var _a;
                this.modal = modal;
                this.modalIdentifier = (_a = modal.getAttribute('data-modal')) === null || _a === void 0 ? void 0 : _a.split('-')[2];
                try {
                    if (!this.modalIdentifier || "" === this.modalIdentifier) {
                        throw new Error('Modal identifier not found');
                    }
                    this.checkExistingData(this.modalIdentifier);
                    this.openingButton = document.querySelector(`[modal-openbtn-${this.modalIdentifier}]`);
                    if (!this.openingButton) {
                        throw new Error(`Open button for modal with identifier @${this.modalIdentifier} not found`);
                    }
                    this.closingButton = document.querySelector(`[modal-closebtn-${this.modalIdentifier}]`);
                    if (!this.closingButton) {
                        throw new Error(`Close button for modal with identifier @${this.modalIdentifier} not found`);
                    }
                }
                catch (error) {
                    console.error(error);
                }
            });
            return this;
        }
        setAnimation(animation, display = "flex", animateElement) {
            if (animation && this.modal && this.closingButton && this.openingButton) {
                (0, animation_1.animeInOut)({
                    openButton: this.openingButton,
                    element: animateElement ? { element: this.modal, animateElement } : this.modal,
                    display,
                    animation,
                    closeButton: this.closingButton,
                });
            }
            return this;
        }
        checkExistingData(identifier) {
            const modals = document.querySelectorAll(`[data-modal="modal-bg-${identifier}"]`);
            const openButtons = document.querySelectorAll(`[modal-openbtn-${identifier}]`);
            const closeButtons = document.querySelectorAll(`[modal-openbtn-${identifier}]`);
            try {
                if (modals && modals.length > 1) {
                    throw new Error(`More than one modal with identifier name @${identifier} detected`);
                }
                if (openButtons && openButtons.length > 1) {
                    throw new Error(`More than one opening button with identifier name @${identifier} detected`);
                }
                if (closeButtons && closeButtons.length > 1) {
                    throw new Error(`More than one closing button with identifier name @${identifier} detected`);
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    exports.FormModal = FormModal;
});
//# sourceMappingURL=index.js.map