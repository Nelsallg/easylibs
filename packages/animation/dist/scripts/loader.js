"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCSSAnimation = void 0;
const path_1 = __importDefault(require("path"));
/**
 * Fonction principale pour charger, transformer et appliquer le mixin avec des paramètres optionnels.
 */
function loadCSSAnimation(options) {
    fetchSCSS(options.animationType)
        .then((SCSSContent) => {
        const mixinName = `${options.animationType}-${options.animationEnter}-${options.animationPosition}`;
        const css = convertMixinToCSS(SCSSContent, mixinName, options.animCSSProps);
        console.log(css);
        if (css) {
            addCSSToDocument(css); // Ajoute le CSS transformé à la balise <style>
        }
        else {
            console.error('Mixin non trouvé.');
        }
    })
        .catch(error => console.error(error));
}
exports.loadCSSAnimation = loadCSSAnimation;
/**
 * Fonction pour charger le contenu d'un fichier SCSS
 */
function fetchSCSS(animationType) {
    return new Promise((resolve, reject) => {
        // Utiliser AJAX, fetch ou une autre méthode pour charger le fichier SCSS
        fetch(path_1.default.resolve(__dirname, `node_modules/@easylibs/animation/dist/assets/styles/${animationType}.scss`))
            .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier SCSS');
            }
            return response.text();
        })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}
/**
 * Fonction pour trouver et convertir un mixin en CSS, avec gestion des paramètres optionnels.
 */
function convertMixinToCSS(SCSSContent, mixinName, animCSSProps) {
    // Recherche le mixin et les keyframes associées
    const regex = new RegExp(`@mixin ${mixinName}\\((.*?)\\) {([\\s\\S]*?)}\\s*@keyframes`, 'm');
    const match = regex.exec(SCSSContent);
    if (match && match[2]) {
        let mixinContent = match[2];
        // Vérifie si des animCSSProps ont été fournis avant de tenter de les remplacer
        if (animCSSProps) {
            Object.keys(animCSSProps).forEach(key => {
                const paramRegex = new RegExp(`\\$${key}`, 'g');
                mixinContent = mixinContent.replace(paramRegex, animCSSProps[key]);
            });
        }
        // Ajoute les keyframes associées
        const keyframesName = mixinName.replace(/-/g, '_');
        const keyframesRegex = new RegExp(`@keyframes ${keyframesName} {([\\s\\S]*?)}\\s*`, 'm');
        const keyframesMatch = keyframesRegex.exec(SCSSContent);
        if (keyframesMatch) {
            mixinContent += `@keyframes ${keyframesName} {${keyframesMatch[1]}}`;
        }
        return mixinContent;
    }
    else {
        return '';
    }
}
/**
 * Ajoute ou met à jour une balise <style> avec le CSS généré
 */
function addCSSToDocument(css) {
    let styleTag = document.getElementById('@animation-style');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = '@animation-style';
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML += css; // Ajoute le nouveau CSS à la balise <style>
}
//# sourceMappingURL=loader.js.map