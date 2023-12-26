define(["require", "exports", "./resolver"], function (require, exports, resolver_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setAudio = void 0;
    /**
     * Crée un élément audio avec la source audio spécifiée par le chemin audioPath.
     * @param audioPath Le chemin de la source audio.
     * @param classname La classe CSS à ajouter à l'élément audio (optionnel).
     * @returns L'élément audio créé.
     */
    function setAudio(audioPath, classname = null) {
        const audio = document.createElement('audio');
        if (classname != null) {
            audio.classList.add(classname);
        }
        const source = document.createElement('source');
        source.src = (0, resolver_1.resolvePath)(audioPath);
        source.type = "audio/mpeg";
        audio.appendChild(source);
        return audio;
    }
    exports.setAudio = setAudio;
});
//# sourceMappingURL=audio.js.map