"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMimeType = void 0;
function getMimeType(base64String, get) {
    if (get === void 0) { get = "both"; }
    var extension = base64String
        .split(",")[0]
        .split(":")[1]
        .split(";")[0]
        .split("/")[1];
    var fileType = base64String
        .split(",")[0]
        .split(":")[1]
        .split(";")[0]
        .split("/")[0];
    if ("type" === get) {
        return fileType;
    }
    if ("extension" === get) {
        return extension;
    }
    return fileType + "/" + extension;
}
exports.getMimeType = getMimeType;
//# sourceMappingURL=mime.js.map