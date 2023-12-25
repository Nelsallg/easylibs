import { resolvePath } from "./resolver";
/**
 * Crée un élément audio avec la source audio spécifiée par le chemin audioPath.
 * @param audioPath Le chemin de la source audio.
 * @param classname La classe CSS à ajouter à l'élément audio (optionnel).
 * @returns L'élément audio créé.
 */
export function setAudio(audioPath:string, classname=null) {
    const audio = document.createElement('audio');
    if(classname != null){audio.classList.add(classname);}
    const source = document.createElement('source');
    source.src = resolvePath(audioPath);
    source.type = "audio/mpeg";
    audio.appendChild(source);
    return audio;
}