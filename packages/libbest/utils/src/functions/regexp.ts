/**
 * Cette constante représente une expression régulière pour valider une adresse e-mail.
 */
export const EmailType: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
/**
 * Cette constante représente une expression régulière pour valider un numéro de téléphone.
 */
export const PhoneNumberType: RegExp = new RegExp(/^(0|\\+[1-9]{1,3})[0-9 ]+$/);
/**
 * Cette constante représente une expression régulière pour valider un nombre.
 */
export const NumberType: RegExp = new RegExp(/^[0-9]+$/);
/**
 * Cette constante représente une expression régulière pour valider un mot de passe fort. 
 * Le mot de passe doit contenir au moins une lettre majuscule, 
 * une lettre minuscule, un chiffre et un caractère spécial, et avoir une longueur minimale de 8 caractères.
 */
export const StrongPasswordType: RegExp = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
/**
 * Cette constante représente une expression régulière pour valider une URL.
 */
export const UrlType: RegExp = new RegExp(/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/);
/**
 * Cette constante représente une expression régulière pour valider un texte par défaut. 
 * Le texte peut contenir des lettres, des espaces, des tirets et des apostrophes.
 */
export const DefaultTextType: RegExp = new RegExp(/^[a-zA-Z -'áàâäãåçéèêëğíìîïıñóòôöõúùûüşýÿæœÁÀÂÄÃÅÇÉÈÊËĞÍÌÎÏIÑÓÒÔÖÕÚÙÛÜŞÝŸÆŒ]+$/);
/**
 * Cette constante représente une expression régulière pour valider un texte en français. 
 * Le texte peut contenir des lettres, des espaces, des tirets, des apostrophes et des caractères spécifiques à la langue française.
 */
export const FrTextType: RegExp = new RegExp(/^[A-Za-z' - àâçéèêëûæœÀÂÉÈÊËÆŒ]+$/);
/**
 * Cette constante représente une expression régulière pour valider un texte en anglais. 
 * Le texte peut contenir des lettres, des espaces, des tirets et des apostrophes, avec une longueur maximale de 40 caractères.
 */
export const EnTextType: RegExp = new RegExp(/^[a-zA-Z '-]{1,40}$/);
/**
 * Cette constante représente une expression régulière pour valider un texte en turc. 
 * Le texte peut contenir des lettres, des espaces, des tirets et des caractères spécifiques à la langue turque.
 */
export const TrTextType: RegExp = new RegExp(/^[A-Za-z çğıöüşæœÇĞIÖÜŞ]+$/);