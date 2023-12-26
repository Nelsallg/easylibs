define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TrTextType = exports.EnTextType = exports.FrTextType = exports.DefaultTextType = exports.UrlType = exports.StrongPasswordType = exports.NumberType = exports.PhoneNumberType = exports.EmailType = void 0;
    /**
     * Cette constante représente une expression régulière pour valider une adresse e-mail.
     */
    exports.EmailType = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
    /**
     * Cette constante représente une expression régulière pour valider un numéro de téléphone.
     */
    exports.PhoneNumberType = new RegExp(/^(0|\\+[1-9]{1,3})[0-9 ]+$/);
    /**
     * Cette constante représente une expression régulière pour valider un nombre.
     */
    exports.NumberType = new RegExp(/^[0-9]+$/);
    /**
     * Cette constante représente une expression régulière pour valider un mot de passe fort.
     * Le mot de passe doit contenir au moins une lettre majuscule,
     * une lettre minuscule, un chiffre et un caractère spécial, et avoir une longueur minimale de 8 caractères.
     */
    exports.StrongPasswordType = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    /**
     * Cette constante représente une expression régulière pour valider une URL.
     */
    exports.UrlType = new RegExp(/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/);
    /**
     * Cette constante représente une expression régulière pour valider un texte par défaut.
     * Le texte peut contenir des lettres, des espaces, des tirets et des apostrophes.
     */
    exports.DefaultTextType = new RegExp(/^[a-zA-Z -'áàâäãåçéèêëğíìîïıñóòôöõúùûüşýÿæœÁÀÂÄÃÅÇÉÈÊËĞÍÌÎÏIÑÓÒÔÖÕÚÙÛÜŞÝŸÆŒ]+$/);
    /**
     * Cette constante représente une expression régulière pour valider un texte en français.
     * Le texte peut contenir des lettres, des espaces, des tirets, des apostrophes et des caractères spécifiques à la langue française.
     */
    exports.FrTextType = new RegExp(/^[A-Za-z' - àâçéèêëûæœÀÂÉÈÊËÆŒ]+$/);
    /**
     * Cette constante représente une expression régulière pour valider un texte en anglais.
     * Le texte peut contenir des lettres, des espaces, des tirets et des apostrophes, avec une longueur maximale de 40 caractères.
     */
    exports.EnTextType = new RegExp(/^[a-zA-Z '-]{1,40}$/);
    /**
     * Cette constante représente une expression régulière pour valider un texte en turc.
     * Le texte peut contenir des lettres, des espaces, des tirets et des caractères spécifiques à la langue turque.
     */
    exports.TrTextType = new RegExp(/^[A-Za-z çğıöüşæœÇĞIÖÜŞ]+$/);
});
//# sourceMappingURL=regexp.js.map