import Flash from "./packages/flash/dist/flash.js";

const flash = new Flash();
flash.addFlash({
    type: "success",
    message: "This is a success message!",
    closeButton: true
}) 