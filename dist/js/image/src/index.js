define(["require", "exports", "../../utils/src/dom"], function (require, exports, dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImageCropping = void 0;
    class ImageCropping {
        constructor(input, canvas) {
            this.input = (0, dom_1.$$)(input);
            this.canvas = (0, dom_1.$$)(canvas);
        }
        run() {
            try {
                let image = new Image();
                let isDragging = false;
                let startX, startY, offsetX, offsetY, dragX, dragY;
                const ctx = this.canvas.getContext("2d");
                this.input.addEventListener("change", (e) => {
                    const target = e.target;
                    const file = target.files ? target.files[0] : null;
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function (event) {
                            image.src = event.target ? `${event.target.result}` : "";
                        };
                        reader.readAsDataURL(file);
                    }
                });
                image.onload = () => {
                    this.canvas.width = image.width;
                    this.canvas.height = image.height;
                    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, 0, 0);
                    this.canvas.addEventListener("mousedown", function (e) {
                        isDragging = true;
                        startX = e.offsetX;
                        startY = e.offsetY;
                    });
                    this.canvas.addEventListener("mousemove", (e) => {
                        if (isDragging && ctx) {
                            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                            ctx.drawImage(image, 0, 0);
                            dragX = e.offsetX;
                            dragY = e.offsetY;
                            offsetX = dragX - startX;
                            offsetY = dragY - startY;
                            ctx.strokeStyle = "red";
                            ctx.strokeRect(startX, startY, offsetX, offsetY);
                        }
                    });
                    this.canvas.addEventListener("mouseup", function () {
                        isDragging = false;
                        // Ici, vous pouvez utiliser les valeurs offsetX, offsetY, startX, startY
                        // pour recadrer l'image en fonction de la zone sélectionnée
                    });
                };
            }
            catch (error) {
                console.error("Une erreur est survenu: " + error);
            }
        }
        test(imageTarget) {
            let image = (0, dom_1.$$)(imageTarget);
            let isDragging = false;
            let startX, startY;
            let imageOffsetX = 0;
            let imageOffsetY = 0;
            image.addEventListener("mousedown", function (event) {
                isDragging = true;
                startX = event.clientX - image.offsetLeft;
                startY = event.clientY - image.offsetTop;
            });
            image.addEventListener("mouseup", function () {
                isDragging = false;
            });
            image.addEventListener("mousemove", function (event) {
                if (isDragging) {
                    let newTop = event.clientY - startY;
                    console.log({ newTop });
                    if (newTop <= 0 && image.clientHeight - newTop >= image.height) {
                        image.style.top = newTop + "px";
                        imageOffsetY = newTop;
                    }
                }
            });
            image.addEventListener("dblclick", function () {
                // Recentrer l'image
                image.style.top = (image.clientHeight - image.height) / 2 + "px";
                imageOffsetY = 0;
            });
        }
    }
    exports.ImageCropping = ImageCropping;
});
//# sourceMappingURL=index.js.map