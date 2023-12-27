"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMimeType = void 0;
function getMimeType(base64String, get = "both") {
    const extension = base64String
        .split(",")[0]
        .split(":")[1]
        .split(";")[0]
        .split("/")[1];
    const fileType = base64String
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
