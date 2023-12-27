"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePath = void 0;
/**
 * Résout le chemin d'une ressource en fonction de l'environnement d'exécution.
 * @param path Le chemin de la ressource.
 * @returns Le chemin résolu de la ressource.
 */
function resolvePath(path) {
    const PROJECT_NAME = window.location.pathname.split("/")[1];
    const ORIGIN = window.location.origin;
    const PORT = window.location.port;
    const HOST = window.location.host;
    let _stylesheetsoutdir_;
    if (HOST == "localhost") {
        return _stylesheetsoutdir_ = ORIGIN + `/${PROJECT_NAME}/${path}`;
    }
    else if (HOST !== "localhost" && PORT !== "") {
        return _stylesheetsoutdir_ = ORIGIN + `/${path}`;
    }
    else {
        return _stylesheetsoutdir_ = ORIGIN + `/${path}`;
    }
}
exports.resolvePath = resolvePath;
