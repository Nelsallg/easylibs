import { resolvePath } from "./resolver.d";
export function setAudio(audioPath:string, classname=null) {
    const audio = document.createElement('audio');
    if(classname != null){audio.classList.add(classname);}
    const source = document.createElement('source');
    source.src = resolvePath(audioPath);
    source.type = "audio/mpeg";
    audio.appendChild(source);
    return audio;
}